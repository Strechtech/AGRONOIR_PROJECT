import { createClient } from '@supabase/supabase-js';

// ✅ LEER VARIABLES DE ENTORNO
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validar que las variables existan
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ ERROR: Faltan variables de entorno de Supabase');
  console.error('SUPABASE_URL:', SUPABASE_URL ? '✅' : '❌');
  console.error('SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY ? '✅' : '❌');
}

// Cliente Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
});

// ==========================================
// 📧 FUNCIONES DE GESTIÓN DE CORREOS (EXISTENTES)
// ==========================================

// 🆕 Guardar contacto Y enviar emails automáticamente
export const saveContact = async (contactData) => {
  try {
    console.log('📤 Enviando a Supabase:', contactData);
    
    const dataToInsert = {
      name: contactData.name.trim(),
      email: contactData.email.trim().toLowerCase(),
      company: contactData.company.trim(),
      sector: contactData.sector.trim(),
      message: contactData.message?.trim() || null,
      status: 'nuevo'
    };

    console.log('📦 Datos preparados:', dataToInsert);

    // 1️⃣ GUARDAR EN LA BASE DE DATOS
    const { data, error } = await supabase
      .from('contacts')
      .insert(dataToInsert)
      .select()
      .single();

    if (error) {
      console.error('❌ Error de Supabase:', error);
      throw error;
    }

    console.log('✅ Guardado exitosamente en DB:', data);

    // 2️⃣ ENVIAR EMAILS VÍA EDGE FUNCTION
    let emailSent = false;
    let emailError = null;

    try {
      console.log('📧 Llamando a Edge Function resend-email...');
      
      // 🔥 LLAMADA CORREGIDA A LA EDGE FUNCTION
      const { data: emailResponse, error: functionError } = await supabase.functions.invoke('resend-email', {
        body: {
          name: contactData.name,
          email: contactData.email,
          company: contactData.company,
          sector: contactData.sector,
          message: contactData.message || ''
        }
      });

      // Verificar si hubo error en la invocación
      if (functionError) {
        console.error('⚠️ Error al invocar función:', functionError);
        emailError = functionError.message || 'Error desconocido al invocar función';
      } else if (emailResponse) {
        console.log('✅ Respuesta de Edge Function:', emailResponse);
        
        // Verificar si la respuesta indica éxito
        if (emailResponse.success) {
          emailSent = true;
          console.log('✅ Emails enviados correctamente');
        } else {
          emailError = emailResponse.error || 'Error desconocido en el envío de emails';
          console.warn('⚠️ Edge Function respondió con error:', emailError);
        }
      } else {
        emailError = 'No se recibió respuesta de la Edge Function';
        console.warn('⚠️', emailError);
      }

    } catch (emailException) {
      console.error('⚠️ Excepción al enviar emails:', emailException);
      emailError = emailException.message || 'Error al procesar el envío de emails';
    }

    return { 
      success: true, 
      data,
      emailSent,
      emailError: emailSent ? null : emailError
    };

  } catch (error) {
    console.error('❌ Error completo:', error);
    
    let errorMessage = 'Error al guardar el contacto';
    
    if (error.code === '42501') {
      errorMessage = 'Error de permisos en la base de datos';
    } else if (error.code === '23505') {
      errorMessage = 'Este contacto ya existe';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

export const getAllContacts = async () => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    console.log(`✅ ${data?.length || 0} contactos obtenidos`);
    return { success: true, data: data || [] };
    
  } catch (error) {
    console.error('❌ Error al obtener contactos:', error);
    return { success: false, error: error.message };
  }
};

export const updateContactStatus = async (id, status) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    
    console.log('✅ Estado actualizado:', data);
    return { success: true, data };
    
  } catch (error) {
    console.error('❌ Error al actualizar:', error);
    return { success: false, error: error.message };
  }
};

export const testConnection = async () => {
  try {
    const { count, error } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true });
    
    if (error) throw error;
    
    console.log(`✅ Conexión exitosa. ${count} contactos en la base de datos`);
    return { success: true, count };
    
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    return { success: false, error: error.message };
  }
};

// ==========================================
// 🤖 FUNCIONES DE CHAT IA (NUEVAS)
// ==========================================

/**
 * Envía un mensaje al chat IA y obtiene una respuesta
 * @param {string} prompt - El mensaje del usuario
 * @returns {Promise<{success: boolean, reply?: string, error?: string}>}
 */
export const sendChatMessage = async (prompt) => {
  try {
    console.log('🤖 Enviando mensaje al chat IA:', prompt);
    
    // Validar que el prompt no esté vacío
    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      console.error('❌ Prompt vacío o inválido');
      return {
        success: false,
        error: 'Por favor escribe un mensaje válido'
      };
    }
    
    // Llamar a la Edge Function chat-ai (sin JWT)
    const { data, error } = await supabase.functions.invoke('chat-ai', {
      body: { prompt: prompt.trim() }
    });

    if (error) {
      console.error('❌ Error al invocar chat-ai:', error);
      
      // Mensajes de error más amigables
      let errorMessage = 'Error al comunicarse con el asistente virtual';
      if (error.message?.includes('fetch')) {
        errorMessage = 'No se pudo conectar con el servidor. Verifica tu conexión.';
      } else if (error.message?.includes('CORS')) {
        errorMessage = 'Error de configuración del servidor. Contacta al administrador.';
      }
      
      return {
        success: false,
        error: errorMessage
      };
    }

    // Verificar que la respuesta tenga el formato esperado
    if (!data) {
      console.error('❌ Respuesta vacía del servidor');
      return {
        success: false,
        error: 'No se recibió respuesta del servidor'
      };
    }

    if (data.success && data.reply) {
      console.log('✅ Respuesta del chat IA recibida:', data.reply.substring(0, 50) + '...');
      return { 
        success: true, 
        reply: data.reply 
      };
    } else {
      console.error('❌ Error en la respuesta:', data.error);
      return { 
        success: false, 
        error: data.error || 'No se pudo generar una respuesta. Intenta nuevamente.' 
      };
    }

  } catch (error) {
    console.error('❌ Excepción al enviar mensaje al chat:', error);
    
    // Error genérico amigable
    return { 
      success: false, 
      error: 'Ocurrió un error inesperado. Por favor intenta nuevamente.' 
    };
  }
};

/**
 * Prueba la conexión con el chat IA
 * @returns {Promise<{success: boolean, reply?: string, error?: string}>}
 */
export const testChatIA = async () => {
  try {
    console.log('🧪 Probando Chat IA...');
    
    const result = await sendChatMessage('Hola, ¿estás funcionando?');
    
    if (result.success) {
      console.log('✅ Chat IA funcionando correctamente');
      console.log('Respuesta:', result.reply);
    } else {
      console.error('❌ Chat IA no está respondiendo');
    }
    
    return result;
    
  } catch (error) {
    console.error('❌ Excepción en test de chat:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};