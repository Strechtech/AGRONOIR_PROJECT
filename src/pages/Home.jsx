// ============================================
// 🎨 LANDING PAGE - MODERNIZED + NAVIGATION
// ============================================

import React from 'react';
import PropTypes from 'prop-types';
import { 
  ArrowRight, Factory, TrendingUp, Clock, Users, Award,
  PackageCheck, Zap, Shield, Cpu, Target,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 🔹 navegación

// Hooks y componentes personalizados
import { useContactForm } from '../hooks/LogicForms';
import { FormSection } from '../UI/Forms';

// ============================================
// 📊 CONSTANTES
// ============================================

const STATS = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "200+", label: "Proyectos Completados" },
  { value: "98%", label: "Satisfacción del Cliente" },
  { value: "24/7", label: "Soporte Técnico" },
];

const GUARANTEES = [
  { icon: TrendingUp, title: "Mejora Medible", metric: "20-35% más eficiencia", description: "Resultados en los primeros 3 meses" },
  { icon: Clock, title: "Respuesta Rápida", metric: "Menos de 2 horas", description: "Atención técnica inmediata" },
  { icon: Users, title: "Capacitación Incluida", metric: "Entrenamiento total", description: "Tu equipo domina la tecnología" },
  { icon: Award, title: "Garantía Total", metric: "12 meses", description: "Respaldo completo de calidad" },
];

const SECTORS = [
  { icon: Factory, name: "Manufactura", description: "Líneas de producción" },
  { icon: PackageCheck, name: "Alimentos", description: "Procesamiento industrial" },
  { icon: Zap, name: "Energía", description: "Generación y distribución" },
  { icon: Shield, name: "Químico", description: "Procesos controlados" },
  { icon: Cpu, name: "Textil", description: "Automatización textil" },
  { icon: Target, name: "Metalmecánica", description: "Precisión industrial" },
];

// ============================================
// 🧩 COMPONENTES ATÓMICOS
// ============================================

const StatCard = ({ value, label }) => (
  <div className="text-center transform hover:scale-110 transition-transform">
    <p className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{value}</p>
    <p className="text-gray-700 font-medium">{label}</p>
  </div>
);

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const GuaranteeCard = ({ icon: Icon, title, metric, description }) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
    <p className="text-indigo-600 font-semibold mb-2">{metric}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

GuaranteeCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const SectorCard = ({ icon: Icon, name, description }) => (
  <div className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-indigo-50 hover:to-fuchsia-50 hover:shadow-lg transition-transform hover:-translate-y-1 group">
    <Icon className="w-12 h-12 text-indigo-600 mx-auto mb-3 group-hover:text-fuchsia-600 group-hover:scale-110 transition-transform" />
    <p className="font-semibold text-gray-900 mb-1">{name}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

SectorCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// ============================================
// 🧱 SECCIONES
// ============================================

const HeroSection = ({ onCTAClick }) => {
  const navigate = useNavigate(); // ✅ Hook para redirigir

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-fuchsia-800 py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
          <Factory className="w-5 h-5 text-fuchsia-300" />
          <span className="text-indigo-100 font-medium">Control Industrial Avanzado</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Tecnología que <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Revoluciona Industrias
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed mb-10 max-w-3xl mx-auto">
          Soluciones inteligentes para automatización, monitoreo y eficiencia industrial. 
          Tecnología lista para el futuro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCTAClick}
            className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-500 hover:to-fuchsia-500 transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            Consultoría Gratuita <ArrowRight className="w-5 h-5" />
          </button>

          {/* ✅ BOTÓN QUE NAVEGA A /services */}
          <button
            onClick={() => navigate('/services')}
            className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 border border-white/30 transition-all"
          >
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = { onCTAClick: PropTypes.func.isRequired };

const StatsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      {STATS.map((stat) => <StatCard key={stat.label} {...stat} />)}
    </div>
  </section>
);

const GuaranteesSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
        Experiencia, rapidez y resultados comprobables.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {GUARANTEES.map((item) => <GuaranteeCard key={item.title} {...item} />)}
      </div>
    </div>
  </section>
);

const SectorsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sectores que Atendemos</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
        Soluciones adaptadas a cada industria.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {SECTORS.map((sector) => <SectorCard key={sector.name} {...sector} />)}
      </div>
    </div>
  </section>
);

const CTASection = ({ onCTAClick }) => (
  <section className="py-20 bg-gradient-to-br from-fuchsia-600 to-indigo-700 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      ¿Listo para optimizar tu industria?
    </h2>
    <p className="text-xl text-fuchsia-100 mb-8 max-w-2xl mx-auto">
      Más de 200 empresas ya transformaron su producción.
    </p>
    <button
      onClick={onCTAClick}
      className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
    >
      Empezar Ahora <ArrowRight className="w-5 h-5" />
    </button>
  </section>
);

CTASection.propTypes = { onCTAClick: PropTypes.func.isRequired };

// ============================================
// 🏠 COMPONENTE PRINCIPAL
// ============================================

export default function Home() {
  const {
    formData, errors, isSubmitting, submitStatus,
    handleChange, handleSubmit,
  } = useContactForm();

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      <HeroSection onCTAClick={scrollToContact} />
      <StatsSection />
      <GuaranteesSection />
      <SectorsSection />
      <FormSection
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
      />
      <CTASection onCTAClick={scrollToContact} />
    </main>
  );
}
