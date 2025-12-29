'use client';

import { 
  FaShoppingCart,
  FaRobot,
  FaGamepad,
  FaChevronLeft, 
  FaChevronRight,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaHeartbeat
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb,
  SiOpenai,
  SiKotlin,
  SiAndroid,
  SiExpress,
  SiMysql,
  SiLangchain,
  SiSelenium,
  SiHtml5,
  SiCss3,
  SiJavascript
} from 'react-icons/si';
import { useRef, useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';

// Colores oficiales de cada tecnología
const techColors: { [key: string]: string } = {
  'React': '#61DAFB',
  'Node.js': '#339933',
  'AWS': '#FF9900',
  'Python': '#3776AB',
  'LangChain': '#1C3C3C',
  'BeautifulSoup': '#3776AB',
  'Selenium': '#43B02A',
  'HTML': '#E34F26',
  'CSS': '#1572B6',
  'JavaScript': '#F7DF1E',
  'Kotlin': '#7F52FF',
  'Android': '#3DDC84',
  'Next.js': '#000000',
  'TypeScript': '#3178C6',
  'Tailwind': '#06B6D4',
  'PostgreSQL': '#4169E1',
  'MongoDB': '#47A248',
  'OpenAI': '#412991',
  'Express': '#000000',
  'MySQL': '#4479A1'
};

const projects = [
  {
    title: 'Tienda Huerto Hogar',
    description: 'E-commerce completo para productos de huerto y jardinería con carrito de compras, gestión de inventario y pasarela de pagos',
    icon: FaShoppingCart,
    gradient: 'from-green-500 via-emerald-600 to-teal-600',
    image: '/projects/huerto-hogar.jpg',
    longDescription: 'Plataforma completa de e-commerce desarrollada para la venta de productos de jardinería y huerto. Incluye sistema completo de gestión de inventario, carrito de compras con persistencia, pasarela de pagos segura y panel de administración desplegado en AWS.',
    features: [
      'Carrito de compras con persistencia local',
      'Sistema de búsqueda y filtrado de productos',
      'Panel de administración para gestión de inventario',
      'Pasarela de pagos integrada',
      'Sistema de órdenes y seguimiento',
      'Diseño responsive y moderno',
      'Desplegado en AWS con alta disponibilidad'
    ],
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'AWS', icon: FaAws }
    ]
  },
  {
    title: 'ChatBot Grozy',
    description: 'Bot inteligente con scraping de supermercados y armado automático de carritos según preferencias del usuario usando IA',
    icon: FaRobot,
    gradient: 'from-purple-500 via-violet-600 to-indigo-600',
    image: '/projects/grozy-bot.jpg',
    longDescription: 'Asistente virtual inteligente que realiza scraping de múltiples supermercados en tiempo real y utiliza IA con LangChain para recomendar y armar carritos de compras personalizados según las preferencias alimenticias, presupuesto y necesidades del usuario. Utiliza BeautifulSoup4 y Selenium para extracción de datos web.',
    features: [
      'Scraping en tiempo real con BeautifulSoup4 y Selenium',
      'Análisis de preferencias con LangChain',
      'Armado automático de carritos optimizados',
      'Comparación de precios entre tiendas',
      'Recomendaciones nutricionales con IA',
      'Historial de compras y análisis de gastos',
      'Interfaz web con HTML, CSS y JavaScript'
    ],
    technologies: [
      { name: 'Python', icon: FaPython },
      { name: 'LangChain', icon: SiLangchain },
      { name: 'BeautifulSoup', icon: FaPython },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs }
    ]
  },
  {
    title: 'Juego Impostor',
    description: 'Juego multijugador presencial donde los jugadores descubren roles secretos y deben identificar al impostor mediante palabras relacionadas',
    icon: FaGamepad,
    gradient: 'from-red-500 via-pink-600 to-rose-600',
    image: '/projects/impostor-game.jpg',
    video: '/projects/impostor-game.webm',
    longDescription: 'Juego de mesa digital desarrollado en Kotlin para Android. Se juega con todas las personas en el mismo lugar físico. Cada jugador ingresa a la app y cuando inicia la partida, las cartas se revelan una por una de forma secreta (tocando la pantalla), mostrando si eres impostor o el personaje asignado. Una vez todos conocen sus roles, comienza la ronda donde cada jugador dice una palabra relacionada con el personaje. El impostor debe pasar desapercibido. Luego todos votan por quien creen que es el impostor. Si obtiene mayoría, es eliminado y ganan los jugadores. El impostor gana si logra quedar solo con un jugador.',
    features: [
      'Sistema de roles secretos con revelación táctil',
      'Un dispositivo compartido entre todos los jugadores',
      'Mecánica de palabras relacionadas al personaje',
      'Sistema de votación por mayoría',
      'El impostor debe pasar desapercibido',
      'Ganan los jugadores si eliminan al impostor',
      'El impostor gana si queda solo con un jugador',
      'Desarrollo nativo en Kotlin para Android'
    ],
    technologies: [
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'Android', icon: SiAndroid }
    ]
  },
  {
    title: 'FitStart - Tu Primer Paso',
    description: 'Aplicación web de rutinas de ejercicios para principiantes con guías paso a paso, videos demostrativos y seguimiento de progreso',
    icon: FaHeartbeat,
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    image: '/projects/fitstart.jpg',
    longDescription: 'Aplicación web interactiva diseñada específicamente para personas que inician su camino en el fitness. Ofrece rutinas personalizadas según nivel, videos demostrativos de cada ejercicio, contador de repeticiones y seguimiento semanal de progreso. Desarrollada con tecnologías web puras (HTML, CSS, JavaScript) para máxima compatibilidad.',
    features: [
      'Rutinas personalizadas según nivel de experiencia',
      'Videos demostrativos con técnica correcta',
      'Contador de repeticiones y temporizador',
      'Seguimiento de progreso semanal',
      'Calendario de entrenamientos',
      'Tips de nutrición para principiantes',
      'Diseño responsive y fácil de usar'
    ],
    technologies: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs }
    ]
  }
];

export default function UnifiedCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? containerWidth : -containerWidth);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group/carousel h-full flex flex-col bg-transparent backdrop-blur-none rounded-3xl border-0 shadow-none p-4">
      {/* Botones de navegación */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 -translate-x-6"
        aria-label="Anterior"
      >
        <FaChevronLeft className="text-white text-lg" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 translate-x-6"
        aria-label="Siguiente"
      >
        <FaChevronRight className="text-white text-lg" />
      </button>

      {/* Contenedor del carrusel */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth flex-1 flex items-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="inline-flex gap-6 h-full items-center w-full justify-center">
          {/* Cada página del carrusel */}
          {Array.from({ length: Math.ceil(projects.length / 4) }).map((_, pageIndex) => (
            <div key={pageIndex} className="inline-block h-full">
              <div className="grid grid-cols-2 gap-5 w-full max-w-[860px] auto-rows-fr">
                {projects.slice(pageIndex * 4, (pageIndex + 1) * 4).map((project, index) => {
                  const Icon = project.icon;
                  // Patrón diagonal: posición 0,3 = negro; posición 1,2 = blanco
                  const isBlack = index % 3 === 0;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedProject(project)}
                      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col"
                      style={{ backgroundColor: isBlack ? '#000000' : '#FFFFFF' }}
                    >
                      {/* Image Preview - Más grande */}
                      <div className="relative w-full h-44 bg-gray-100 overflow-hidden flex-shrink-0">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="text-5xl text-gray-300" />
                          </div>
                        )}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent`}></div>
                        
                        {/* Icon en la esquina superior */}
                        <div className={`absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg`} style={{ backgroundColor: isBlack ? '#FFFFFF' : '#000000' }}>
                          <Icon className="text-lg" style={{ color: isBlack ? '#000000' : '#FFFFFF' }} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative flex flex-col flex-1 p-4">
                        {/* Title */}
                        <h3 className="text-base font-semibold leading-tight mb-2" style={{ color: isBlack ? '#FFFFFF' : '#000000' }}>{project.title}</h3>

                        {/* Description */}
                        <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: isBlack ? '#CCCCCC' : '#666666' }}>
                          {project.description}
                        </p>

                        {/* Technologies - Iconos visibles */}
                        <div className="flex flex-wrap gap-2 items-center pt-3 mb-3 flex-1 content-start" style={{ borderTop: `1px solid ${isBlack ? '#333333' : '#E5E5E5'}` }}>
                          {project.technologies.slice(0, 6).map((tech, i) => {
                            const TechIcon = tech.icon;
                            const techColor = techColors[tech.name] || (isBlack ? '#CCCCCC' : '#333333');
                            return (
                              <div
                                key={i}
                                className="flex items-center justify-center rounded-lg p-2 transition-all duration-200 hover:scale-110"
                                style={{ backgroundColor: isBlack ? '#FFFFFF' : '#F5F5F5' }}
                                title={tech.name}
                              >
                                <TechIcon className="text-base" style={{ color: techColor }} />
                              </div>
                            );
                          })}
                          {project.technologies.length > 6 && (
                            <span className="text-xs font-medium" style={{ color: isBlack ? '#999999' : '#666666' }}>+{project.technologies.length - 6}</span>
                          )}
                        </div>

                        {/* View Button */}
                        <button 
                          className="flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 pointer-events-none mt-auto pt-2"
                          style={{ color: isBlack ? '#FFFFFF' : '#000000' }}
                        >
                          <span>Ver detalles</span>
                          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de páginas */}
  <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(projects.length / 4) }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === 0 ? 'w-8 bg-white/60' : 'w-1.5 bg-white/20'
            }`}
          ></div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}
