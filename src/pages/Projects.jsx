import React, { useState, useEffect } from 'react';
import { 
  Plane, 
  Activity,
  Satellite, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Leaf,
  Database,
  Zap,
  TrendingUp,
  Award,
  MapPin,
  ChevronDown,
  Target,
  Users,
  Clock
} from 'lucide-react';

// ==================== CONSTANTS ====================

const PROJECTS = [
  {
    id: 'drones',
    year: '2020',
    phase: 'Operativo',
    icon: Plane,
    title: "Operaciones Aéreas con Drones",
    tagline: "Precisión desde el cielo",
    description: "Flota de drones especializados equipados con cámaras multiespectrales y sistemas de fumigación inteligente. Utilizamos IA para optimizar rutas y detectar problemas antes de que afecten la producción.",
    gradient: "from-blue-500 to-cyan-500",
    impact: {
      coverage: "15,000+ hectáreas",
      efficiency: "40% menos costos",
      speed: "10x más rápido"
    },
    capabilities: [
      {
        title: "Mapeo Multispectral NDVI",
        description: "Análisis de salud vegetal con cámaras especializadas que detectan estrés hídrico, deficiencias nutricionales y enfermedades invisibles al ojo humano."
      },
      {
        title: "Fumigación de Precisión",
        description: "Sistema automatizado de aspersión que reduce uso de químicos hasta 30% aplicando solo donde se necesita, protegiendo el medio ambiente."
      },
      {
        title: "Detección Temprana de Plagas",
        description: "Algoritmos de IA analizan imágenes para identificar patrones de infestación 2-3 semanas antes de síntomas visibles."
      },
      {
        title: "Optimización de Rutas Inteligente",
        description: "Planificación automática considerando topografía, viento, temperatura y áreas prioritarias para máxima eficiencia."
      }
    ],
    technologies: ["DJI Enterprise", "Sentera 6X", "Machine Learning", "Computer Vision"],
    clients: "120+ agricultores",
    roi: "Retorno de inversión en 8 meses"
  },
  {
    id: 'soil',
    year: '2021',
    phase: 'Operativo',
    icon: Activity,
    title: "Laboratorio Móvil de Suelos",
    tagline: "Ciencia al alcance del campo",
    description: "Unidad móvil equipada con tecnología de análisis in-situ que proporciona resultados en tiempo real sobre composición, nutrientes y recomendaciones agronómicas basadas en ciencia de datos.",
    gradient: "from-green-600 to-emerald-600",
    impact: {
      samples: "5,000+ análisis",
      savings: "30% ahorro fertilizantes",
      accuracy: "Lab-grade precision"
    },
    capabilities: [
      {
        title: "Análisis Químico Completo",
        description: "Evaluación de macronutrientes (N-P-K), micronutrientes esenciales, materia orgánica, y capacidad de intercambio catiónico (CIC)."
      },
      {
        title: "Pruebas de pH y Salinidad",
        description: "Medición precisa de acidez/alcalinidad y conductividad eléctrica para optimizar condiciones de crecimiento específicas por cultivo."
      },
      {
        title: "Mapeo de Variabilidad Espacial",
        description: "Identificación de zonas de manejo diferenciado dentro del lote para aplicación variable de insumos."
      },
      {
        title: "Recomendaciones Personalizadas",
        description: "Sistema experto genera plan de fertilización adaptado a cultivo objetivo, economía del productor y sostenibilidad ambiental."
      }
    ],
    technologies: ["Espectrofotometría", "Conductividad EC", "pH-metro digital", "GIS Integration"],
    clients: "200+ fincas atendidas",
    roi: "Incremento 25% en rendimiento"
  },
  {
    id: 'platform',
    year: '2022',
    phase: 'Operativo',
    icon: Satellite,
    title: "AgroCloud Platform",
    tagline: "Tu finca en la palma de tu mano",
    description: "Plataforma SaaS que centraliza todos los datos agrícolas: imágenes satelitales, sensores IoT, datos de drones y análisis de suelo. Dashboard intuitivo con alertas inteligentes y reportes automatizados.",
    gradient: "from-purple-600 to-pink-600",
    impact: {
      users: "500+ usuarios activos",
      uptime: "99.9% disponibilidad",
      alerts: "10,000+ alertas enviadas"
    },
    capabilities: [
      {
        title: "Dashboard Multicapa Interactivo",
        description: "Visualización simultánea de imágenes satelitales Sentinel-2, mapas de calor NDVI, datos climáticos y registros históricos con comparación temporal."
      },
      {
        title: "Integración Satelital Automática",
        description: "Descarga y procesamiento automático de imágenes cada 5 días, con análisis de índices vegetativos (NDVI, EVI, NDMI) sin intervención manual."
      },
      {
        title: "Sistema de Alertas Predictivas",
        description: "Notificaciones push/email cuando se detectan anomalías: estrés hídrico, riesgo de heladas, ventanas de aplicación óptimas, predicción de enfermedades."
      },
      {
        title: "Módulo de Trazabilidad Completa",
        description: "Registro digital de todas las actividades: siembras, aplicaciones, cosechas, creando historial auditable para certificaciones y compliance."
      }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Sentinel-2 API", "AWS Cloud"],
    clients: "Acceso web y móvil",
    roi: "95% satisfacción usuario"
  },
  {
    id: 'blockchain',
    year: '2023',
    phase: 'Beta',
    icon: Shield,
    title: "AgroChain Network",
    tagline: "Transparencia inquebrantable",
    description: "Red blockchain permisionada diseñada específicamente para agricultura. Almacenamiento inmutable de datos de producción, certificaciones y transacciones sin depender de terceros centralizados.",
    gradient: "from-orange-600 to-red-600",
    impact: {
      transactions: "12,000+ registradas",
      security: "Zero breaches",
      transparency: "100% auditable"
    },
    capabilities: [
      {
        title: "Registro Inmutable de Producción",
        description: "Cada evento en la cadena productiva (siembra, aplicaciones, cosecha) se registra en bloques criptográficamente sellados, imposibles de alterar retroactivamente."
      },
      {
        title: "Smart Contracts Agrícolas",
        description: "Contratos inteligentes automatizan pagos, certificaciones y cumplimiento de estándares cuando se verifican condiciones predefinidas en la blockchain."
      },
      {
        title: "Trazabilidad de Origen Verificable",
        description: "Consumidores pueden escanear QR y ver toda la historia del producto: desde semilla hasta punto de venta, con garantía criptográfica de autenticidad."
      },
      {
        title: "Descentralización y Privacidad",
        description: "Arquitectura distribuida elimina puntos únicos de falla. Los agricultores mantienen control total de sus datos mediante claves privadas."
      }
    ],
    technologies: ["Hyperledger Fabric", "IPFS", "Ethereum", "Zero-Knowledge Proofs"],
    clients: "50+ beta testers",
    roi: "Lanzamiento Q2 2025"
  }
];

const IMPACT_STATS = [
  { icon: MapPin, value: "20,000+", label: "Hectáreas bajo monitoreo" },
  { icon: TrendingUp, value: "35%", label: "Aumento promedio rendimiento" },
  { icon: Users, value: "450+", label: "Productores beneficiados" },
  { icon: Award, value: "15+", label: "Años de experiencia" }
];

// ==================== COMPONENTS ====================

const TimelineConnector = ({ isLast }) => (
  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-green-300 to-green-100" 
       style={{ display: isLast ? 'none' : 'block' }} />
);

const ProjectCard = ({ project, index, isExpanded, onToggle }) => {
  const Icon = project.icon;
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-16 last:mb-0">
      <TimelineConnector isLast={index === PROJECTS.length - 1} />
      
      <div className={`flex items-start gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Timeline dot */}
        <div className="relative flex-shrink-0">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg ring-4 ring-white z-10 relative`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-700 shadow-md">
              {project.year}
            </span>
          </div>
        </div>

        {/* Card content */}
        <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Card header */}
            <div className={`bg-gradient-to-br ${project.gradient} p-6 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className={`relative ${isEven ? 'text-left' : 'text-right'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {project.phase}
                  </span>
                  {project.phase === 'Operativo' && (
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-100">Live</span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-white/90 text-sm">{project.tagline}</p>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Impact metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {Object.entries(project.impact).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-green-600 mb-1">
                      {value}
                    </div>
                    <div className="text-xs text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expandable section */}
              <div>
                <button
                  onClick={() => onToggle(project.id)}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 px-4 py-3 rounded-lg transition-all duration-300 group"
                >
                  <span className="font-semibold text-green-800 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Ver Capacidades Detalladas
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-green-600 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-4 mb-6">
                    {project.capabilities.map((capability, i) => (
                      <div key={i} className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-start gap-3 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <h4 className="font-bold text-gray-900">{capability.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed ml-8">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h5 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Stack Tecnológico
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-xs text-blue-600 font-medium mb-1">Alcance</div>
                      <div className="text-sm font-bold text-blue-900">{project.clients}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-xs text-green-600 font-medium mb-1">ROI</div>
                      <div className="text-sm font-bold text-green-900">{project.roi}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================

function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [expandedProjects, setExpandedProjects] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-700">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 mb-8">
            <Leaf className="w-5 h-5 text-green-300" />
            <span className="text-green-100 font-medium">Innovación & Tecnología Agrícola</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Proyectos que
            <br />
            <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Transforman el Campo
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Del suelo al satélite, del drone al blockchain. Conoce cómo integramos 
            tecnologías de vanguardia para revolucionar la agricultura ecuatoriana.
          </p>

          <div className="flex items-center justify-center gap-2 text-green-200">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="text-sm">Desliza para ver nuestra evolución tecnológica</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-20 z-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IMPACT_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Línea de Tiempo Tecnológica
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra Evolución en Agtech
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada proyecto representa un hito en nuestra misión de digitalizar 
              y modernizar la agricultura. Haz clic para explorar capacidades detalladas.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isExpanded={expandedProjects[project.id]}
                onToggle={toggleProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}/>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Database className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para Innovar tu Operación Agrícola?
            </h2>
            <p className="text-xl mb-12 text-green-100 leading-relaxed max-w-2xl mx-auto">
              Únete a cientos de productores que ya están utilizando nuestras tecnologías 
              para aumentar rendimientos, reducir costos y tomar mejores decisiones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                Solicitar Demo Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-green-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/30 transition-all duration-300">
                Descargar Brochure
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-green-200">
              <CheckCircle className="w-5 h-5" />
              <span>Sin costo de implementación inicial • Soporte 24/7 incluido</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;