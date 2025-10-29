import React, { useState } from 'react';
import { 
  Settings, 
  Zap, 
  Shield, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Factory,
  Target,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Users
} from 'lucide-react';

// Constantes
const SERVICES = [
  {
    icon: Factory,
    title: "Control Industrial Automatizado",
    description: "Implementación de sistemas SCADA y PLC para automatización completa de procesos industriales con monitoreo en tiempo real.",
    features: [
      "Programación de PLCs (Siemens, Allen Bradley, Schneider)",
      "Desarrollo de sistemas SCADA personalizados",
      "Integración con sistemas MES y ERP",
      "Monitoreo remoto 24/7"
    ]
  },
  {
    icon: Target,
    title: "Optimización de Procesos",
    description: "Análisis exhaustivo y mejora continua de tus líneas de producción para maximizar eficiencia y reducir costos operativos.",
    features: [
      "Análisis de capacidad productiva",
      "Identificación de cuellos de botella",
      "Implementación de metodologías Lean",
      "Reducción de tiempos muertos"
    ]
  },
  {
    icon: Zap,
    title: "Eficiencia Energética",
    description: "Auditorías energéticas y soluciones para reducir consumo eléctrico y mejorar la sostenibilidad de tu operación industrial.",
    features: [
      "Auditorías energéticas certificadas",
      "Instalación de variadores de frecuencia",
      "Sistemas de gestión energética ISO 50001",
      "Análisis de calidad de energía"
    ]
  },
  {
    icon: Shield,
    title: "Mantenimiento Predictivo",
    description: "Implementación de tecnologías IoT y análisis de datos para prevenir fallas y optimizar planes de mantenimiento.",
    features: [
      "Sensores IoT para monitoreo continuo",
      "Análisis predictivo con Machine Learning",
      "Reducción de paradas no programadas",
      "Planes de mantenimiento basados en condición"
    ]
  }
];

const GUARANTEES = [
  {
    icon: TrendingUp,
    title: "Mejora Medible",
    metric: "Incremento del 20-35% en eficiencia operativa"
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    metric: "Soporte técnico en menos de 2 horas"
  },
  {
    icon: Users,
    title: "Capacitación Incluida",
    metric: "Entrenamiento completo para tu equipo"
  },
  {
    icon: Award,
    title: "Garantía Total",
    metric: "12 meses de garantía en implementaciones"
  }
];

const SECTORS = [
  "Industria Alimentaria",
  "Manufactura",
  "Energía",
  "Químico y Farmacéutico",
  "Textil",
  "Metalmecánica",
  "Otro"
];
function Services() {

  return (
    // Seccion principal de servicios
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000000e7] via-[#046838d4] to-[#1e1e1ee8] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
            {/* Seccion Principal -encabezado y titulo */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#fffbfb4f] backdrop-blur-sm px-6 py-3 rounded-full border border-[black] mb-8">
              <Settings className="w-5 h-5 text-[white]" />
              <span className="text-[#ffffffde] font-medium">Soluciones Industriales Integrales</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Servicios de
              <br />
              <span className="bg-gradient-to-r from-[#e8e2e2] to-emerald-400 bg-clip-text text-transparent">
                Control Industrial
              </span>
            </h1>
            
            <p className="text-xl text-[white] leading-relaxed max-w-3xl mx-auto">
              Transformamos operaciones industriales con tecnología de punta y experiencia comprobada. 
              Del campo a la fábrica, garantizamos resultados medibles.
            </p>
          </div>
        </div>
      </section>

      {/* Seccion de muestra de Nuestros Servicios */}
      <section className="py-20 bg-gradient-to-br from-[#000000d7] via-[#038e54] to-[#1e1e1ee8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-xl text-[white]">
              Soluciones completas adaptadas a las necesidades específicas de tu industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#00000072] rounded-2xl p-8 border border-slate-200  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0ad785] to-[#161515cf] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[white] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#ffffffe0]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-[white]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Seccion de Garantia  */}
          <div className="bg-gradient-to-br from-[#00000069] to-[#00000011] rounded-2xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-center text-[white] mb-12">
              Nuestras Garantías
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GUARANTEES.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-[#95ff0044] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-[#ffffffdb] mb-2">
                      {guarantee.title}
                    </h4>
                    <p className="text-sm text-[white]">
                      {guarantee.metric}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </div>

  );
}

export default Services;