import { 
  Factory,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Users,
  Award,
  Wrench,
  Gauge,
  Cog,
  Package
} from 'lucide-react';

const useServiceData = () => {
  const servicesData = [
    {
      icon: Factory,
      title: "Automatización Industrial",
      description: "Sistemas de control avanzados para optimizar procesos de producción con tecnología de última generación.",
      features: [
        "Programación de PLCs y sistemas SCADA",
        "Integración de robots industriales y cobots",
        "Digitalización de líneas de producción",
        "Monitoreo y control remoto IoT"
      ],
      images: [
        { src: 'https://www.autex-open.com/wp-content/uploads/2022/09/image.png', alt: 'Automatización Industrial' },
      ]
    },
    {
      icon: Wrench,
      title: "Ingeniería de Mantenimiento",
      description: "Servicios especializados de mantenimiento preventivo, correctivo y predictivo para maximizar la vida útil de equipos.",
      features: [
        "Mantenimiento preventivo programado",
        "Análisis de fallas y diagnóstico",
        "Overhaul de maquinaria pesada",
        "Repuestos y refacciones OEM"
      ],
      images: [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ARPQOveyCzbs1bxPRmfieDvK5pS5x5YoBA&s', alt: 'Mantenimiento Industrial' },
      ]
    },
    {
      icon: Gauge,
      title: "Instrumentación y Control",
      description: "Diseño e implementación de sistemas de medición, control y monitoreo para procesos industriales críticos.",
      features: [
        "Calibración de instrumentos de medición",
        "Sistemas de control distribuido (DCS)",
        "Sensores y transmisores industriales",
        "Válvulas de control y actuadores"
      ],
      images: [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmfHNWHPmu6WgWbo9D1V4Wz24sROf2Dxqog&s', alt: 'Instrumentación' },
      ]
    },
    {
      icon: Zap,
      title: "Sistemas Eléctricos Industriales",
      description: "Diseño, instalación y mantenimiento de infraestructura eléctrica de media y baja tensión para industrias.",
      features: [
        "Tableros y centros de control de motores",
        "Subestaciones eléctricas industriales",
        "Sistemas de tierra y pararrayos",
        "Estudios de calidad de energía"
      ],
      images: [
        { src: 'https://priserperu.com/wp-content/uploads/instalaciones-electricas-industriales.webp', alt: 'Sistemas Eléctricos' },
      ]
    },
    {
      icon: Cog,
      title: "Optimización de Procesos",
      description: "Consultoría especializada para maximizar eficiencia operativa y reducir costos en manufactura y producción.",
      features: [
        "Análisis de flujos productivos y cuellos de botella",
        "Implementación de metodologías Lean y Six Sigma",
        "Simulación de procesos industriales",
        "Indicadores de desempeño (OEE, KPIs)"
      ],
      images: [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmfHNWHPmu6WgWbo9D1V4Wz24sROf2Dxqog&s', alt: 'Optimización' },
      ]
    },
    {
      icon: Package,
      title: "Logística y Manejo de Materiales",
      description: "Soluciones integrales para optimizar el flujo de materiales, almacenamiento y distribución en plantas industriales.",
      features: [
        "Sistemas de transporte y manipulación",
        "Diseño de layouts de almacenes",
        "Sistemas automatizados de almacenaje (AS/RS)",
        "Software de gestión de inventarios (WMS)"
      ],
      images: [
        { src: 'https://media.licdn.com/dms/image/v2/D5612AQEewO4fv_Kl1A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679006867302?e=2147483647&v=beta&t=ATZhw4F8u6YdGle2RJRLGX1_RyDUdsNfXyJL6D2EHdg', alt: 'Logística Industrial' },
      ]
    }
  ];

  const guaranteesData = [
    {
      icon: TrendingUp,
      title: "ROI Garantizado",
      metric: "Retorno de inversión en 12-18 meses promedio"
    },
    {
      icon: Clock,
      title: "Soporte 24/7/365",
      metric: "Servicio técnico continuo y respuesta inmediata"
    },
    {
      icon: Users,
      title: "Capacitación Certificada",
      metric: "Transferencia de conocimiento incluida"
    },
    {
      icon: Award,
      title: "Garantía Total",
      metric: "Cobertura completa de 12 meses en proyectos"
    }
  ];

  const gridPatternStyle = {
    backgroundImage:
      'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
    backgroundSize: '50px 50px'
  };

  return {
    servicesData,
    guaranteesData,
    gridPatternStyle
  };
};

export default useServiceData;