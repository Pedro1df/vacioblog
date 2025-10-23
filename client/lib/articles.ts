export interface Article {
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

export const articles: Article[] = [
  {
    id: "1",
    title: "El Futuro del Diseño Web",
    excerpt: "Exploramos las tendencias más emocionantes que están transformando la forma en que diseñamos para la web.",
    content: "El diseño web está en constante evolución. Con la llegada de nuevas tecnologías como CSS Grid, WebGL y las animaciones avanzadas, los diseñadores ahora tienen más herramientas que nunca para crear experiencias web increíbles. En este artículo, exploraremos cómo estas tecnologías están transformando la industria y qué deberían aprender los diseñadores modernos. Desde componentes responsivos hasta interfaces de usuario más accesibles, el futuro del diseño web es prometedor y emocionante.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    author: "María García",
    date: "15 de Noviembre, 2024",
    category: "Diseño",
    readTime: 5
  },
  {
    id: "2",
    title: "React 19: Nuevas Características",
    excerpt: "Descubre las características más importantes de React 19 y cómo mejorarán tu desarrollo.",
    content: "React 19 trae consigo un conjunto de mejoras significativas que hacen que el desarrollo de componentes sea más eficiente. Con el nuevo servidor de renderización, hooks mejorados y mejor soporte para TypeScript, React continúa siendo la biblioteca más popular para construir interfaces de usuario modernas. Este artículo detalla los cambios clave, incluyendo las mejoras en el rendimiento y cómo migrar tus proyectos existentes.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6e9?w=800&h=500&fit=crop",
    author: "Carlos López",
    date: "10 de Noviembre, 2024",
    category: "Desarrollo",
    readTime: 7
  },
  {
    id: "3",
    title: "Diseño UX/UI: Mejores Prácticas",
    excerpt: "Aprende las mejores prácticas para crear interfaces que deleiten a tus usuarios.",
    content: "El diseño UX/UI efectivo requiere entender profundamente a tus usuarios y sus necesidades. A través de investigación, pruebas de usuario y iteración constante, podemos crear interfaces que no solo son hermosas sino también funcionales e intuitivas. En este artículo, cubrimos principios de diseño fundamentales, accesibilidad, y cómo medir el éxito de tu diseño a través de métricas clave.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    author: "Ana Martínez",
    date: "5 de Noviembre, 2024",
    category: "UX/UI",
    readTime: 6
  },
  {
    id: "4",
    title: "JavaScript Asincrónico Explicado",
    excerpt: "Domina las promesas, async/await y callbacks en JavaScript moderno.",
    content: "JavaScript asincrónico puede ser confuso al principio, pero es esencial para cualquier desarrollador web moderno. Este artículo te guía a través de callbacks, promesas y async/await, mostrando ejemplos prácticos y casos de uso reales. Entenderás cuándo usar cada patrón y cómo evitar errores comunes como el callback hell.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6e9?w=800&h=500&fit=crop",
    author: "Diego Fernández",
    date: "1 de Noviembre, 2024",
    category: "JavaScript",
    readTime: 8
  },
  {
    id: "5",
    title: "Tailwind CSS: Productividad Suprema",
    excerpt: "Construye interfaces hermosas rápidamente con Tailwind CSS utility-first approach.",
    content: "Tailwind CSS revoluciona la forma en que escribimos CSS al adoptar un enfoque utility-first. En lugar de escribir clases CSS personalizadas, usamos utilidades predefinidas que podemos combinar para crear diseños complejos. Este artículo explora cómo Tailwind puede aumentar tu productividad, mantener la consistencia en el diseño y hacer tu código más mantenible.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    author: "Elena Rodríguez",
    date: "28 de Octubre, 2024",
    category: "CSS",
    readTime: 5
  },
  {
    id: "6",
    title: "TypeScript en Proyectos Reales",
    excerpt: "Guía práctica para implementar TypeScript en tus proyectos de producción.",
    content: "TypeScript añade seguridad de tipos a JavaScript, ayudándote a detectar errores antes de que lleguen a producción. Este artículo cubre la configuración inicial, tipos fundamentales, interfaces avanzadas y cómo integrar TypeScript en un proyecto existente. Con ejemplos prácticos y mejores prácticas, aprenderás cómo TypeScript puede mejorar la calidad de tu código.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6e9?w=800&h=500&fit=crop",
    author: "Pedro Sánchez",
    date: "25 de Octubre, 2024",
    category: "TypeScript",
    readTime: 7
  }
];
