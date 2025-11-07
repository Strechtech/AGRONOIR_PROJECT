// ============================================
// 🎨 LANDING PAGE - DISEÑO INDUSTRIAL PREMIUM
// ============================================

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  ArrowRight, Factory, TrendingUp, Clock, Users, Award,
  PackageCheck, Zap, Shield, Cpu, Target, CheckCircle2,
  Gauge, Settings, Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Hooks y componentes personalizados
import { useContactForm } from '../hooks/LogicForms';
import { FormSection } from '../UI/Forms';

// ============================================
// 📊 CONSTANTES
// ============================================

const STATS = [
  { value: "15+", label: "Años de Experiencia", icon: Award },
  { value: "200+", label: "Proyectos Completados", icon: CheckCircle2 },
  { value: "98%", label: "Satisfacción del Cliente", icon: TrendingUp },
  { value: "24/7", label: "Soporte Técnico", icon: Clock },
];

const GUARANTEES = [
  { 
    icon: TrendingUp, 
    title: "Mejora Medible", 
    metric: "20-35%", 
    description: "Incremento en eficiencia operacional",
    detail: "Resultados cuantificables en 3 meses"
  },
  { 
    icon: Clock, 
    title: "Respuesta Inmediata", 
    metric: "< 2hrs", 
    description: "Tiempo de respuesta técnica",
    detail: "Soporte prioritario 24/7"
  },
  { 
    icon: Users, 
    title: "Capacitación Integral", 
    metric: "100%", 
    description: "Entrenamiento del equipo",
    detail: "Dominio completo de la tecnología"
  },
  { 
    icon: Award, 
    title: "Garantía Extendida", 
    metric: "12 meses", 
    description: "Respaldo de calidad total",
    detail: "Mantenimiento preventivo incluido"
  },
];

const SECTORS = [
  { icon: Factory, name: "Manufactura", description: "Líneas de producción automatizadas" },
  { icon: PackageCheck, name: "Alimentos & Bebidas", description: "Procesamiento industrial seguro" },
  { icon: Zap, name: "Energía", description: "Generación y distribución eficiente" },
  { icon: Shield, name: "Químico & Farmacéutico", description: "Procesos controlados y validados" },
  { icon: Cpu, name: "Textil", description: "Automatización de última generación" },
  { icon: Target, name: "Metalmecánica", description: "Precisión y trazabilidad industrial" },
];

// ============================================
// 🎭 COMPONENTE DE ANIMACIÓN DE FONDO
// ============================================

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(20px, -20px) scale(1.5); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

// ============================================
// 🧩 COMPONENTES ATÓMICOS
// ============================================

const StatCard = ({ value, label, icon: Icon, index }) => (
  <div 
    className="relative group"
    style={{
      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
    }}
  >
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
          {value}
        </p>
        <p className="text-gray-300 font-medium">{label}</p>
      </div>
    </div>
  </div>
);

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  index: PropTypes.number.isRequired,
};

const GuaranteeCard = ({ icon: Icon, title, metric, description, detail, index }) => (
  <div 
    className="group relative"
    style={{
      animation: `slideInRight 0.6s ease-out ${index * 0.15}s both`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
    <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
        {metric}
      </p>
      <p className="text-gray-300 text-sm font-medium mb-2">{description}</p>
      <p className="text-gray-400 text-xs">{detail}</p>
    </div>
  </div>
);

GuaranteeCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const SectorCard = ({ icon: Icon, name, description, index }) => (
  <div 
    className="group relative"
    style={{
      animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-500">
          <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
        </div>
        <p className="font-bold text-white mb-2 text-lg">{name}</p>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

SectorCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

// ============================================
// 🧱 SECCIONES
// ============================================

const HeroSection = ({ onCTAClick }) => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-32 overflow-hidden">
      <AnimatedBackground />
      
      {/* Grid de fondo técnico */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Gradiente radial central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda - Contenido */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-500/30">
              <Factory className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-100 font-semibold tracking-wide">INDUSTRIA 4.0</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Automatización
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Industrial Inteligente
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Transformamos procesos industriales con tecnología de control avanzado, 
              <span className="text-cyan-400 font-semibold"> monitoreo en tiempo real</span> y 
              sistemas de optimización predictiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCTAClick}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-3"
              >
                Consultoría Gratuita 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/services')}
                className="bg-slate-800/80 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                Ver Proyectos
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-2xl font-bold text-white">35%</p>
                  <p className="text-xs text-gray-400">Más eficiencia</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-2xl font-bold text-white">200+</p>
                  <p className="text-xs text-gray-400">Proyectos</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-2xl font-bold text-white">24/7</p>
                  <p className="text-xs text-gray-400">Monitoreo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Visual Industrial */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Círculo principal animado */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-cyan-500/30 rounded-full animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-blue-500/20 rounded-full animate-spin-slower" />
              
              {/* Elementos flotantes */}
              <div className="absolute top-20 right-20 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-cyan-500/50 shadow-2xl shadow-cyan-500/20 animate-float">
                <Factory className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="absolute bottom-20 left-20 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-blue-500/50 shadow-2xl shadow-blue-500/20 animate-float-delayed">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
              <div className="absolute top-1/2 right-10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-cyan-500/50 shadow-2xl shadow-cyan-500/20 animate-float-slow">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slower { animation: spin-slower 30s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
};

HeroSection.propTypes = { onCTAClick: PropTypes.func.isRequired };

const StatsSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-950" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Experiencia que <span className="text-cyan-400">Respalda</span>
        </h2>
        <p className="text-gray-400 text-lg">Números que demuestran nuestro compromiso</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {STATS.map((stat, index) => <StatCard key={stat.label} {...stat} index={index} />)}
      </div>
    </div>
  </section>
);

const GuaranteesSection = () => (
  <section className="py-20 bg-slate-900 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-block bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30 mb-4">
          <span className="text-cyan-400 font-semibold text-sm">GARANTÍAS INDUSTRIALES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Compromisos <span className="text-cyan-400">Verificables</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Resultados medibles respaldados por años de experiencia en automatización industrial
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {GUARANTEES.map((item, index) => <GuaranteeCard key={item.title} {...item} index={index} />)}
      </div>
    </div>
  </section>
);

const SectorsSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(6,182,212,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Sectores <span className="text-cyan-400">Especializados</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Soluciones personalizadas para cada industria
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SECTORS.map((sector, index) => <SectorCard key={sector.name} {...sector} index={index} />)}
      </div>
    </div>
  </section>
);

const CTASection = ({ onCTAClick }) => (
  <section className="py-24 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
    
    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transforma tu Planta
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            en Industria 4.0
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Únete a más de 200 empresas que ya optimizaron su producción con nuestra tecnología
        </p>
        
        <button
          onClick={onCTAClick}
          className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 inline-flex items-center gap-3"
        >
          Solicitar Consultoría Gratuita
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>

        <p className="text-gray-500 text-sm mt-6">
          <CheckCircle2 className="w-4 h-4 inline text-cyan-400 mr-1" />
          Sin compromiso • Análisis técnico incluido • Respuesta en 24 horas
        </p>
      </div>
    </div>
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
    <main className="min-h-screen bg-slate-950">
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