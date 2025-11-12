'use client';

import { FaCode, FaServer, FaPalette, FaRocket, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';

const skills = [
  {
    title: 'Frontend',
    icon: FaCode,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-500/10',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: FaServer,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-500/10',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'UI/UX',
    icon: FaPalette,
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-500/10',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research']
  },
  {
    title: 'Performance',
    icon: FaRocket,
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-500/10',
    skills: ['Optimization', 'SEO', 'Web Vitals', 'Accessibility']
  },
  {
    title: 'DevOps',
    icon: FaServer,
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-500/10',
    skills: ['Docker', 'CI/CD', 'AWS', 'Linux']
  },
  {
    title: 'Mobile',
    icon: FaCode,
    color: 'from-cyan-400 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    skills: ['React Native', 'Flutter', 'iOS', 'Android']
  }
];

export default function SkillsGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Ancho de la tarjeta + gap
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
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group min-w-[300px] bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl ${skill.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`text-2xl bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-bold text-white">{skill.title}</h3>
              </div>
              <div className="space-y-2">
                {skill.skills.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicador de scroll */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(skills.length / 2) }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white/20"
          ></div>
        ))}
      </div>
    </div>
  );
}
