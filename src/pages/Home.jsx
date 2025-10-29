// VENTANA INCIAL- LANDING PAGE

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Factory,
  TrendingUp,
  Clock,
  Users,
  Award,
  PackageCheck,
  Zap,
  Shield,
  Cpu,
  Target,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// 🎯 HOOKS
import { useContactForm } from '../hooks/LogicForms';

// 🎨 UI COMPONENTS
import { FormSection } from '../UI/Forms';

// ============================================
// CONSTANTS
// ============================================

const STATS = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "200+", label: "Proyectos Completados" },
  { value: "98%", label: "Satisfacción del Cliente" },
  { value: "24/7", label: "Soporte Técnico" }
];

const GARANTIAS = [
  {
    icon: TrendingUp,
    title: "Mejora Medible",
    metric: "20-35% incremento en eficiencia",
    description: "Resultados cuantificables en los primeros 3 meses"
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    metric: "Soporte en menos de 2 horas",
    description: "Equipo técnico disponible cuando lo necesites"
  },
  {
    icon: Users,
    title: "Capacitación Incluida",
    metric: "Entrenamiento completo del personal",
    description: "Tu equipo dominará la tecnología desde el día uno"
  },
  {
    icon: Award,
    title: "Garantía Total",
    metric: "12 meses de garantía",
    description: "Respaldamos la calidad de nuestro trabajo"
  }
];

const SECTORES = [
  { icon: Factory, name: "Manufactura", description: "Líneas de producción" },
  { icon: PackageCheck, name: "Alimentos", description: "Procesamiento industrial" },
  { icon: Zap, name: "Energía", description: "Generación y distribución" },
  { icon: Shield, name: "Químico", description: "Procesos controlados" },
  { icon: Cpu, name: "Textil", description: "Automatización textil" },
  { icon: Target, name: "Metalmecánica", description: "Precisión industrial" }
];

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = ({ onCTAClick }) => (
  <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-32 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30 mb-8">
          <Factory className="w-5 h-5 text-blue-300" />
          <span className="text-blue-100 font-medium">Control Industrial de Precisión</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Innovación que 
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Transforma Industrias
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
          Soluciones avanzadas de automatización y control para maximizar la eficiencia 
          de tu operación industrial. Del campo a la fábrica.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onCTAClick}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Consultoría Gratuita
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30">
            Ver Proyectos
          </button>
        </div>
      </div>
    </div>
  </section>
);

const StatCard = ({ value, label }) => (
  <div className="text-center transform hover:scale-105 transition-transform">
    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
      {value}
    </div>
    <div className="text-gray-600 font-medium">
      {label}
    </div>
  </div>
);

const StatsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

const GarantiaCard = ({ icon: Icon, title, metric, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-blue-600 font-semibold mb-2">
      {metric}
    </p>
    <p className="text-gray-600 text-sm">
      {description}
    </p>
  </div>
);

const GarantiasSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Resultados garantizados respaldados por años de experiencia y cientos de clientes satisfechos
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {GARANTIAS.map((garantia, i) => (
          <GarantiaCard key={i} {...garantia} />
        ))}
      </div>
    </div>
  </section>
);

const SectorCard = ({ icon: Icon, name, description }) => (
  <div className="bg-slate-50 rounded-xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all transform hover:-translate-y-1 group">
    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
    <div className="font-semibold text-gray-900 mb-1">
      {name}
    </div>
    <div className="text-sm text-gray-600">
      {description}
    </div>
  </div>
);

const SectoresSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sectores que Atendemos
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experiencia comprobada en múltiples industrias con soluciones personalizadas
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {SECTORES.map((sector, i) => (
          <SectorCard key={i} {...sector} />
        ))}
      </div>
    </div>
  </section>
);

const CTASection = ({ onCTAClick }) => (
  <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        ¿Listo para transformar tu operación?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Únete a más de 200 empresas que ya optimizaron sus procesos con nosotros
      </p>
      <button 
        onClick={onCTAClick}
        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
      >
        Comenzar Ahora
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </section>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function Home() {
  // 🎯 Custom Hook con toda la lógica del formulario
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  } = useContactForm();

  // 📍 Función para scroll al formulario
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onCTAClick={scrollToContact} />
      <StatsSection />
      <GarantiasSection />
      <SectoresSection />
      <FormSection 
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
      />
      <CTASection onCTAClick={scrollToContact} />
    </div>
  );
}