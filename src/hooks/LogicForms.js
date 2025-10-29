// src/hooks/LogicForms.js
import { useState } from 'react';
import { saveContact } from '../services/supabase';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    message: '',
    honeypot: '' // 🍯 Campo honeypot para detectar bots
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'La empresa es requerida';
    }
    
    if (!formData.sector) {
      newErrors.sector = 'El sector es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // 🚀 GUARDAR EN SUPABASE Y ENVIAR EMAILS
    const result = await saveContact(formData);

    if (result.success) {
      console.log('✅ Contacto guardado:', result.data);
      
      if (result.emailSent) {
        console.log('📧 Emails enviados correctamente');
        setSubmitStatus('success');
      } else {
        console.warn('⚠️ Datos guardados pero email falló:', result.emailError);
        setSubmitStatus('success-no-email');
      }
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        sector: '',
        message: '',
        honeypot: ''
      });

      // Auto-ocultar mensaje después de 7 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 7000);
    } else {
      console.error('❌ Error:', result.error);
      setSubmitStatus('error');
      
      // Auto-ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }

    setIsSubmitting(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  };
};