export interface Article1 {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export const articles1: Article1[] = [
  {
    id: "1",
    title: "Introducción a las Bombas de Vacío",
    excerpt: "Descubre los fundamentos de las bombas de vacío y cómo funcionan en aplicaciones industriales.",
    content: "Las bombas de vacío son dispositivos fundamentales en muchas industrias modernas. Funcionan extrayendo gas de un espacio sellado para crear una diferencia de presión. Estas máquinas son esenciales en procesos que van desde la fabricación de semiconductores hasta la preservación de alimentos. En este artículo, exploraremos los principios básicos de funcionamiento, los diferentes tipos de bombas y sus aplicaciones principales.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Ingeniero Carlos López",
    date: "18 de Noviembre, 2024",
    category: "Fundamentos",
    readTime: 6
  },
  {
    id: "2",
    title: "Bombas de Desplazamiento Positivo",
    excerpt: "Tipos, características y aplicaciones de las bombas de desplazamiento positivo.",
    content: "Las bombas de desplazamiento positivo son aquellas que capturan una cantidad fija de gas y la expulsan con cada ciclo. Entre los tipos más comunes encontramos las bombas de pistón, rotativas de aleta y de tornillo. Cada tipo tiene sus ventajas y desventajas dependiendo de la aplicación. Este artículo detalla las características técnicas, el rendimiento y las mejores prácticas de mantenimiento.",
    image: "https://images.unsplash.com/photo-1581092160562-40038f40bada?w=800&h=500&fit=crop",
    author: "Dr. Miguel Rodríguez",
    date: "15 de Noviembre, 2024",
    category: "Tecnología",
    readTime: 8
  },
  {
    id: "3",
    title: "Bombas de Vacío de Aire Difusivo",
    excerpt: "Funcionamiento y aplicaciones de las bombas difusivas de alto vacío.",
    content: "Las bombas difusivas son bombas de velocidad que utilizan un vapor de aceite o mercurio para transferir moléculas de gas hacia fuera. Son especialmente útiles para alcanzar ultra-vacíos. En este artículo exploraremos cómo funcionan estas bombas, sus rangos de operación y su uso en laboratorios de investigación y fabricación de semiconductores.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Dra. Elena Martínez",
    date: "12 de Noviembre, 2024",
    category: "Especializada",
    readTime: 7
  },
  {
    id: "4",
    title: "Mantenimiento de Bombas de Vacío",
    excerpt: "Guía completa para el mantenimiento preventivo y correctivo de bombas de vacío.",
    content: "El mantenimiento adecuado es crucial para garantizar la longevidad y eficiencia de las bombas de vacío. Incluye cambios regulares de aceite, inspección de sellos, calibración de sensores y limpieza de filtros. Este artículo proporciona una guía paso a paso para el mantenimiento, calendario de servicio recomendado y solución de problemas comunes.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Técnico Pedro García",
    date: "10 de Noviembre, 2024",
    category: "Servicio",
    readTime: 9
  },
  {
    id: "5",
    title: "Selección de Bombas para Aplicaciones Específicas",
    excerpt: "Cómo elegir la bomba de vacío correcta según tus necesidades industriales.",
    content: "Seleccionar la bomba de vacío adecuada requiere considerar varios factores: velocidad de bombeo, rango de presión final, tipo de gas a bombearse, temperatura de operación y compatibilidad química. Este artículo proporciona un marco de decisión claro con ejemplos de aplicaciones reales en industrias como alimentación, química, electrónica y farmacéutica.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Consultora Ana Silva",
    date: "8 de Noviembre, 2024",
    category: "Aplicaciones",
    readTime: 7
  },
  {
    id: "6",
    title: "Turbomolecular vs Rotativas",
    excerpt: "Comparación detallada entre bombas turbomoleculares y bombas rotativas.",
    content: "Las bombas turbomoleculares y las bombas rotativas son dos tecnologías distintas con diferentes ventajas. Las turbomoleculares alcanzan vacíos más altos pero requieren bombas de respaldo, mientras que las rotativas son más simples y económicas para aplicaciones de medio vacío. Analizamos en detalle las características de cada una y cuándo usar cada tipo.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Ing. Fernando López",
    date: "5 de Noviembre, 2024",
    category: "Comparativa",
    readTime: 8
  },
  {
    id: "7",
    title: "Eficiencia Energética en Bombas de Vacío",
    excerpt: "Estrategias para optimizar el consumo energético de sistemas de vacío.",
    content: "Las bombas de vacío pueden consumir significativos recursos energéticos. Este artículo explora técnicas de optimización incluyendo velocidad variable, recuperación de calor, aislamiento térmico y selección de equipos de alta eficiencia. Aprende cómo reducir costos operativos sin comprometer el rendimiento.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Dr. Raúl Mendez",
    date: "3 de Noviembre, 2024",
    category: "Sostenibilidad",
    readTime: 6
  },
  {
    id: "8",
    title: "Sistemas de Detección en Vacío",
    excerpt: "Sensores y medidores para monitorear presión en sistemas de vacío.",
    content: "La medición precisa de presión es vital en cualquier aplicación de vacío. Exploramos diferentes tipos de sensores: manómetros Pirani, ionización, capacitivos y conductores. Cada uno tiene características únicas para diferentes rangos de presión. Aprende cómo seleccionar e instalar sensores para máxima precisión.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Esp. Juliana Díaz",
    date: "1 de Noviembre, 2024",
    category: "Instrumentación",
    readTime: 7
  },
  {
    id: "9",
    title: "Contaminación en Sistemas de Vacío",
    excerpt: "Identificar y prevenir fuentes de contaminación en líneas de vacío.",
    content: "La contaminación puede dañar el rendimiento de bombas y equipos conectados. Las fuentes comunes incluyen humedad, contaminantes químicos, partículas y fugas. Este artículo detalla métodos de prevención, sistemas de filtración efectivos y protocolos de purga para mantener sistemas limpios.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Químico Roberto Castro",
    date: "28 de Octubre, 2024",
    category: "Calidad",
    readTime: 8
  },
  {
    id: "10",
    title: "Bombas de Vacío en Manufactura Semiconductora",
    excerpt: "Aplicaciones críticas de bombas de vacío en la industria de semiconductores.",
    content: "La manufactura de semiconductores depende completamente de sistemas de vacío de ultra-alta calidad. Desde depósitos de películas hasta grabado y litografía, exploraremos cómo las bombas de vacío son fundamentales. Analizamos requisitos específicos, desafíos y soluciones innovadoras en esta industria de alta demanda.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Ing. Patricia Núñez",
    date: "25 de Octubre, 2024",
    category: "Industria",
    readTime: 9
  },
  {
    id: "11",
    title: "Seguridad en la Operación de Bombas de Vacío",
    excerpt: "Protocolos de seguridad esencial para operadores de bombas de vacío.",
    content: "La operación segura es prioritaria al trabajar con sistemas de vacío. Cubrimos equipos de protección personal, procedimientos de operación segura, manejo de fugas, y respuesta ante emergencias. Este artículo proporciona un conjunto completo de directrices basadas en estándares internacionales.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Dir. Seguridad Juan Martín",
    date: "22 de Octubre, 2024",
    category: "Seguridad",
    readTime: 7
  },
  {
    id: "12",
    title: "Innovaciones Recientes en Tecnología de Vacío",
    excerpt: "Descubre los últimos avances y tendencias en bombas y sistemas de vacío.",
    content: "La tecnología de vacío continúa evolucionando con bombas más eficientes, sistemas inteligentes conectados y materiales innovadores. Exploramos desarrollos recientes en bombas magnéticas, control automatizado, y soluciones ecológicas. Conoce qué esperar en el futuro próximo de esta industria.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Prof. Alicia Gómez",
    date: "20 de Octubre, 2024",
    category: "Innovación",
    readTime: 6
  },
  {
    id: "13",
    title: "Troubleshooting Común en Bombas de Vacío",
    excerpt: "Solución rápida de problemas comunes en sistemas de vacío.",
    content: "Cuando algo falla, necesitas soluciones rápidas. Este artículo cubre problemas comunes como pérdida de presión, ruidos anormales, sobrecalentamiento y vibraciones. Para cada problema, proporcionamos causas probables y procedimientos de diagnóstico paso a paso.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Técnico Especializado Leonardo Soto",
    date: "18 de Octubre, 2024",
    category: "Soporte",
    readTime: 8
  },
  {
    id: "14",
    title: "Cálculo del Tamaño de Sistema de Vacío",
    excerpt: "Metodología para dimensionar correctamente sistemas de bombeo de vacío.",
    content: "Dimensionar correctamente un sistema es crítico para eficiencia. Cubrimos cálculos de velocidad requerida, factor de seguridad, tiempo de evacuación y selección de accesorios. Incluimos ejemplos prácticos y una hoja de cálculo para facilitar el diseño.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Calculista Marcos Díaz",
    date: "15 de Octubre, 2024",
    category: "Diseño",
    readTime: 8
  },
  {
    id: "15",
    title: "Sostenibilidad Ambiental en Sistemas de Vacío",
    excerpt: "Prácticas ecológicas y cumplimiento ambiental en operaciones de vacío.",
    content: "La industria de vacío enfrenta presión para reducir su huella ambiental. Exploraremos alternativas a refrigerantes contaminantes, reciclaje de aceites, emisiones reducidas y soluciones sostenibles. Aprende cómo tu operación puede ser ambientalmente responsable sin sacrificar eficiencia.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f70bada?w=800&h=500&fit=crop",
    author: "Ambientalista Verde Sofía Reyes",
    date: "12 de Octubre, 2024",
    category: "Sostenibilidad",
    readTime: 7
  }
];
