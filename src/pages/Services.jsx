import React from 'react';
import { 
  Settings, 
  CheckCircle
} from 'lucide-react';
import Message_AI from '../UI/Message_AI';
import useServiceData from '../hooks/useServiceData';

// ============================================
// PRESENTATIONAL COMPONENTS
// ============================================

const Badge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 bg-[#fffbfb4f] backdrop-blur-sm px-6 py-3 rounded-full border border-black mb-8">
    <Icon className="w-5 h-5 text-white" />
    <span className="text-[#ffffffde] font-medium">{text}</span>
  </div>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${className}`}>
    {children}
  </h2>
);

const SectionSubtitle = ({ children, className = "" }) => (
  <p className={`text-xl text-white ${className}`}>
    {children}
  </p>
);

const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
    <span className="text-white">{text}</span>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, features, images }) => (
  <div className="bg-[#00000072] rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-14 h-14 bg-gradient-to-br from-[#609fe6] to-[#161515cf] rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#ffffffe0]">{description}</p>
      </div>
    </div>

    {/* Galería de imágenes */}
    {images && images.length > 0 && (
      <div className={`grid gap-3 mb-6 ${
        images.length === 1 ? 'grid-cols-1' : 
        images.length === 2 ? 'grid-cols-2' : 
        'grid-cols-3'
      }`}>
        {images.map((image, idx) => (
          <div key={idx} className="aspect-video overflow-hidden rounded-lg bg-gray-800">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    )}

    <div className="space-y-3">
      {features.map((feature, idx) => (
        <FeatureItem key={idx} text={feature} />
      ))}
    </div>
  </div>
);

const GuaranteeCard = ({ icon: Icon, title, metric }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-[#2488c6f0] rounded-xl flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h4 className="text-lg font-bold text-[#ffffffdb] mb-2">{title}</h4>
    <p className="text-sm text-white">{metric}</p>
  </div>
);

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = ({ gridPatternStyle }) => (
  <section className="relative bg-gradient-to-br from-[#000000e7] via-[#1353b2d4] to-[#1e1e1ee8] py-24 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={gridPatternStyle} />
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <Badge icon={Settings} text="Soluciones Industriales Integrales" />
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ingeniería y Soluciones para
          <br />
          <span className="bg-gradient-to-r from-[#e8e2e2] to-emerald-400 bg-clip-text text-transparent">
            el Sector Industrial
          </span>
        </h1>
        
        <SectionSubtitle className="leading-relaxed max-w-3xl mx-auto">
          Transformamos plantas industriales con tecnología y expertise técnico. 
          Desde automatización de procesos hasta mantenimiento predictivo, 
          entregamos soluciones que optimizan producción y reducen costos operativos.
        </SectionSubtitle>
      </div>
    </div>
  </section>
);

const ServicesSection = ({ servicesData, guaranteesData }) => (
  <section className="py-20 bg-gradient-to-br from-[#000000d7] via-[#1f6de1d4] to-[#1e1e1ee8]">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <SectionTitle>Nuestros Servicios Especializados</SectionTitle>
        <SectionSubtitle>
          Soluciones completas adaptadas a las necesidades específicas de tu industria
        </SectionSubtitle>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {servicesData.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>

      <GuaranteesCard guaranteesData={guaranteesData} />
    </div>
  </section>
);

const GuaranteesCard = ({ guaranteesData }) => (
  <div className="bg-gradient-to-br from-[#00000069] to-[#00000011] rounded-2xl p-12 border border-blue-100">
    <h3 className="text-3xl font-bold text-center text-white mb-12">
      Nuestras Garantías
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {guaranteesData.map((guarantee, idx) => (
        <GuaranteeCard key={idx} {...guarantee} />
      ))}
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

const Services = () => {
  const { servicesData, guaranteesData, gridPatternStyle } = useServiceData();

  return (
    <div className="min-h-screen bg-gray-50">
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