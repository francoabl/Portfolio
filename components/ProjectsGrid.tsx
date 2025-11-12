'use client';

import { FaGlobe, FaMobileAlt, FaPalette, FaDatabase, FaArrowRight, FaChevronLeft, FaChevronRight, FaGamepad, FaShoppingCart } from 'react-icons/fa';
import { useRef } from 'react';

const projects = [
  {
    title: 'E-Commerce',
    description: 'Plataforma moderna de comercio electrónico con carrito de compras y pagos integrados',
    icon: FaGlobe,
    gradient: 'from-blue-500 via-blue-600 to-purple-600',
    tags: ['React', 'Node.js', 'Stripe']
  },
  {
    title: 'Banking App',
    description: 'Aplicación bancaria segura e intuitiva con gestión de cuentas y transferencias',
    icon: FaMobileAlt,
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    tags: ['React Native', 'TypeScript', 'Firebase']
  },
  {
    title: 'Design System',
    description: 'Sistema de diseño completo y escalable con componentes reutilizables',
    icon: FaPalette,
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    tags: ['Figma', 'React', 'Storybook']
  },
  {
    title: 'API Platform',
    description: 'Backend robusto con múltiples APIs RESTful y documentación completa',
    icon: FaDatabase,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    tags: ['Node.js', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Gaming Platform',
    description: 'Plataforma de juegos multijugador en tiempo real con chat y rankings',
    icon: FaGamepad,
    gradient: 'from-yellow-500 via-orange-500 to-red-600',
    tags: ['Unity', 'WebGL', 'Socket.io']
  },
  {
    title: 'Marketplace',
    description: 'Mercado online con vendedores múltiples y sistema de calificaciones',
    icon: FaShoppingCart,
    gradient: 'from-indigo-500 via-purple-500 to-pink-600',
    tags: ['Next.js', 'MongoDB', 'Stripe']
  }
];

export default function ProjectsGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // Ancho de la tarjeta + gap
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Botones de navegación */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white/20 -translate-x-1/2"
        aria-label="Anterior"
      >
        <FaChevronLeft className="text-white text-sm" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white/20 translate-x-1/2"
        aria-label="Siguiente"
      >
        <FaChevronRight className="text-white text-sm" />
      </button>

      {/* Contenedor del carrusel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[400px] flex-shrink-0"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <button className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Ver proyecto</span>
                  <FaArrowRight className={`text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicador de scroll */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white/20"
          ></div>
        ))}
      </div>
    </div>
  );
}
