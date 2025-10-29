// src/components/UI/Forms.jsx
import React from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

// ============================================
// CONSTANTS (usadas solo en este archivo)
// ============================================

const SECTORES_FORM = [
  "Industria Alimentaria",
  "Manufactura",
  "Energía",
  "Químico y Farmacéutico",
  "Textil",
  "Metalmecánica",
  "Otro"
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Llámanos",
    value: "+593 123 456 789",
    href: "tel:+593123456789"
  },
  {
    icon: Mail,
    label: "Escríbenos",
    value: "contacto@agronore.com.ec",
    href: "mailto:contacto@agronore.com.ec"
  },
  {
    icon: MapPin,
    label: "Visítanos",
    value: "Quito, Ecuador",
    href: null
  }
];

// ============================================
// FORM INPUT COMPONENTS
// ============================================

export const FormInput = ({ label, name, type = "text", value, onChange, placeholder, required = false, error }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export const FormSelect = ({ label, name, value, onChange, options, required = false, error }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
    >
      <option value="">Selecciona tu sector</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export const FormTextarea = ({ label, name, value, onChange, placeholder, rows = 4 }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
    />
  </div>
);

// ============================================
// CONTACT INFO COMPONENT
// ============================================

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <div className="font-semibold text-gray-900">{label}</div>
      {href ? (
        <a href={href} className="text-blue-600 hover:text-blue-700 transition-colors">
          {value}
        </a>
      ) : (
        <div className="text-gray-600">{value}</div>
      )}
    </div>
  </div>
);

// ============================================
// COMPLETE CONTACT FORM
// ============================================

const ContactForm = ({ formData, onChange, onSubmit, errors, isSubmitting, submitStatus }) => (
  <div className="bg-white rounded-2xl p-8 shadow-xl">
    {/* SUCCESS MESSAGE */}
    {submitStatus === 'success' && (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-green-900 mb-1">¡Mensaje enviado exitosamente!</h4>
          <p className="text-green-700 text-sm">Hemos guardado tu información y te enviamos un email de confirmación. Nos contactaremos contigo pronto.</p>
        </div>
      </div>
    )}

    {/* SUCCESS WITHOUT EMAIL MESSAGE */}
    {submitStatus === 'success-no-email' && (
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
        <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-yellow-900 mb-1">¡Solicitud recibida!</h4>
          <p className="text-yellow-700 text-sm">Hemos guardado tu información. El servicio de email tiene un problema temporal, pero te contactaremos pronto.</p>
        </div>
      </div>
    )}

    {/* ERROR MESSAGE */}
    {submitStatus === 'error' && (
      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-red-900 mb-1">Error al enviar</h4>
          <p className="text-red-700 text-sm">Por favor, intenta nuevamente o contáctanos directamente por teléfono o email.</p>
        </div>
      </div>
    )}

    {/* FORM FIELDS */}
    <div className="space-y-4">
      <FormInput
        label="Nombre Completo"
        name="name"
        value={formData.name}
        onChange={onChange}
        placeholder="Juan Pérez"
        required
        error={errors.name}
      />

      <FormInput
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        placeholder="juan@empresa.com"
        required
        error={errors.email}
      />

      <FormInput
        label="Empresa"
        name="company"
        value={formData.company}
        onChange={onChange}
        placeholder="Nombre de tu empresa"
        required
        error={errors.company}
      />

      <FormSelect
        label="Sector Industrial"
        name="sector"
        value={formData.sector}
        onChange={onChange}
        options={SECTORES_FORM}
        required
        error={errors.sector}
      />

      <FormTextarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={onChange}
        placeholder="Cuéntanos sobre tu necesidad, desafíos actuales o proyecto..."
      />

      {/* 🍯 HONEYPOT - Campo oculto anti-bots */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={onChange}
        tabIndex="-1"
        autoComplete="off"
        style={{ 
          position: 'absolute', 
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0
        }}
        aria-hidden="true"
      />

      {/* SUBMIT BUTTON */}
      <button
        onClick={onSubmit}
        disabled={isSubmitting}
        className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'} text-white px-6 py-4 rounded-lg font-semibold transition-all transform flex items-center justify-center gap-2 shadow-lg`}
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar Consultoría'}
        {!isSubmitting && <ArrowRight className="w-5 h-5" />}
      </button>
    </div>
  </div>
);

// ============================================
// FORM SECTION WITH INFO (Left side info + Right side form)
// ============================================

export const FormSection = ({ formData, onChange, onSubmit, errors, isSubmitting, submitStatus }) => (
  <section id="contacto" className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - INFO */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Solicita una Consultoría Gratuita
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo analizará tu operación y te proporcionará un plan 
              detallado de mejora sin costo ni compromiso.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">¿Qué incluye?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      Diagnóstico completo de tu operación
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      Propuesta personalizada de solución
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      Estimación de ROI y beneficios
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {CONTACT_INFO.map((contact, i) => (
                <ContactItem key={i} {...contact} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <ContactForm
            formData={formData}
            onChange={onChange}
            onSubmit={onSubmit}
            errors={errors}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
          />
        </div>
      </div>
    </div>
  </section>
);