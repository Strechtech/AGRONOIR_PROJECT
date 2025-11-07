import React, { useState } from 'react';
import { 
  Settings, 
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Message_AI from '../UI/Message_AI';
import useServiceData from '../hooks/useServiceData';

// ============================================
// ANIMATED BACKGROUND COMPONENT
// ============================================

const AnimatedBackground = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/10"
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
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(15px, -15px); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

// ============================================
// PRESENTATIONAL COMPONENTS
// ============================================

const Badge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-500/30 mb-8 animate-fadeIn">
    <Icon className="w-5 h-5 text-cyan-400" />
    <span className="text-cyan-100 font-semibold tracking-wide">{text}</span>
  </div>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight ${className}`}>
    {children}
  </h2>
);

const SectionSubtitle = ({ children, className = "" }) => (
  <p className={`text-xl text-gray-300 leading-relaxed ${className}`}>
    {children}
  </p>
);

const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-3 group">
    <div className="w-5 h-5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
      <CheckCircle className="w-3 h-3 text-white" />
    </div>
    <span className="text-gray-300 group-hover:text-white transition-colors">{text}</span>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, features, images, index }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div 
      className="group relative"
      style={{
        animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Header */}
        <div className="flex items-start gap-4 mb-6 relative z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-cyan-500/30">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
          </div>
          <ChevronRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Image Gallery */}
        {images && images.length > 0 && (
          <div className={`grid gap-3 mb-6 relative ${
            images.length === 1 ? 'grid-cols-1' : 
            images.length === 2 ? 'grid-cols-2' : 
            'grid-cols-3'
          }`}>
            {images.map((image, idx) => (
              <div 
                key={idx} 
                className="relative aspect-video overflow-hidden rounded-lg bg-slate-800/50 border border-slate-700 group/img"
                onMouseEnter={() => setHoveredImage(idx)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3`}>
                  <p className="text-white text-xs font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        <div className="space-y-3 relative z-10">
          {features.map((feature, idx) => (
            <FeatureItem key={idx} text={feature} />
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
};

const GuaranteeCard = ({ icon: Icon, title, metric, index }) => (
  <div 
    className="relative group"
    style={{
      animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`
    }}
  >
    <div className="text-center transform hover:scale-105 transition-all duration-300">
      <div className="relative inline-block mb-4">
        {/* Glow ring */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        
        {/* Icon container */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {title}
      </h4>
      <p className="text-gray-400 text-sm font-medium">{metric}</p>
    </div>
  </div>
);

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = ({ gridPatternStyle }) => (
  <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-32 overflow-hidden">
    <AnimatedBackground />
    
    {/* Grid background */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>

    {/* Radial gradient */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <Badge icon={Settings} text="SOLUCIONES INDUSTRIALES INTEGRALES" />
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Ingeniería y Soluciones
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Sector Industrial 4.0
          </span>
        </h1>
        
        <SectionSubtitle className="max-w-3xl mx-auto mb-8">
          Transformamos plantas industriales con tecnología de vanguardia y expertise técnico comprobado. 
          Desde automatización de procesos hasta mantenimiento predictivo con IA, 
          entregamos soluciones que optimizan producción y reducen costos operativos hasta un 35%.
        </SectionSubtitle>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300 text-sm font-medium">200+ Proyectos</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300 text-sm font-medium">35% Más Eficiencia</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300 text-sm font-medium">15 Años Experiencia</span>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fadeIn {
        animation: fadeIn 1s ease-out;
      }
    `}</style>
  </section>
);

const ServicesSection = ({ servicesData, guaranteesData }) => (
  <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
    {/* Top divider line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-block bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30 mb-4">
          <span className="text-cyan-400 font-semibold text-sm">PORTAFOLIO DE SERVICIOS</span>
        </div>
        
        <SectionTitle>Servicios Especializados</SectionTitle>
        <SectionSubtitle>
          Soluciones completas adaptadas a las necesidades específicas de cada industria
        </SectionSubtitle>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
        {servicesData.map((service, idx) => (
          <ServiceCard key={idx} {...service} index={idx} />
        ))}
      </div>

      {/* Guarantees Section */}
      <GuaranteesCard guaranteesData={guaranteesData} />
    </div>

    <style>{`
      @keyframes slideInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInScale {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
    `}</style>
  </section>
);

const GuaranteesCard = ({ guaranteesData }) => (
  <div className="relative group">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl blur-2xl" />
    
    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700 hover:border-cyan-500/30 transition-all duration-500">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 rounded-full border border-cyan-500/30 mb-4">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-semibold text-sm">COMPROMISOS VERIFICABLES</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Nuestras <span className="text-cyan-400">Garantías</span>
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Respaldamos cada proyecto con garantías medibles y verificables
        </p>
      </div>

      {/* Guarantees Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {guaranteesData.map((guarantee, idx) => (
          <GuaranteeCard key={idx} {...guarantee} index={idx} />
        ))}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

const Services = () => {
  const { servicesData, guaranteesData, gridPatternStyle } = useServiceData();

  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection gridPatternStyle={gridPatternStyle} />
      <ServicesSection 
        servicesData={servicesData} 
        guaranteesData={guaranteesData} 
      />
      <Message_AI />
    </div>
  );
};

export default Services;