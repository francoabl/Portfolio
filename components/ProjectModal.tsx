'use client';

import { useEffect, useState, useRef } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    image?: string;
    video?: string;
    technologies: Technology[];
    longDescription?: string;
    features?: string[];
    githubUrl?: string;
    liveUrl?: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [isVideoExpandedInModal, setIsVideoExpandedInModal] = useState(false);
  const [isVideoFullScreen, setIsVideoFullScreen] = useState(false);
  const [isClosingVideo, setIsClosingVideo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Resetear el estado del video cuando se abre el modal
      setIsVideoExpandedInModal(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isVideoFullScreen) {
          handleCloseFullScreenVideo();
        } else if (isVideoExpandedInModal) {
          setIsVideoExpandedInModal(false);
        } else {
          onClose();
        }
      }
    };
    
    if (isOpen || isVideoFullScreen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, isVideoFullScreen, isVideoExpandedInModal, onClose]);

  const handleToggleVideoInModal = () => {
    if (!isVideoExpandedInModal) {
      setIsVideoExpandedInModal(true);
      // Scroll hasta el final del modal después de que el video se expanda completamente
      setTimeout(() => {
        const modalContent = videoRef.current?.closest('.overflow-y-auto');
        if (modalContent) {
          modalContent.scrollTo({ 
            top: modalContent.scrollHeight, 
            behavior: 'smooth' 
          });
        }
      }, 600); // Esperamos a que termine la animación de expansión del video
    } else {
      setIsVideoExpandedInModal(false);
    }
  };

  const handleOpenFullScreenVideo = () => {
    setIsVideoFullScreen(true);
    setIsClosingVideo(false);
  };

  const handleCloseFullScreenVideo = () => {
    setIsClosingVideo(true);
    setTimeout(() => {
      setIsVideoFullScreen(false);
      setIsClosingVideo(false);
    }, 600);
  };

  if (!isOpen || !project) return null;

  const Icon = project.icon;

  return (
    <>
      {/* Modal de video en pantalla completa */}
      {isVideoFullScreen && project.video && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={handleCloseFullScreenVideo}
        >
          <div 
            className={`relative max-w-7xl w-full ${isClosingVideo ? 'animate-bounceOut' : 'animate-videoExpand'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={handleCloseFullScreenVideo}
              className="absolute -top-14 right-0 w-12 h-12 rounded-full bg-red-500/20 backdrop-blur-lg border border-red-500/30 flex items-center justify-center hover:bg-red-500/40 transition-all duration-300 hover:scale-110 hover:rotate-90 z-50"
              aria-label="Cerrar video"
            >
              <FaTimes className="text-red-400 text-xl" />
            </button>

            {/* Video ampliado */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto max-h-[90vh] object-contain"
              >
                <source src={project.video} type="video/webm" />
                <source src={project.video.replace('.webm', '.mp4')} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Modal principal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="relative bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Content - Ahora aparece primero */}
          <div className="p-8 bg-gray-900/95">
            {/* Icon y Title en la misma línea */}
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl flex-shrink-0`}>
                <Icon className="text-2xl text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>

            {/* Long Description */}
            {project.longDescription && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Descripción</h3>
                <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Características</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Tecnologías</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => {
                  const TechIcon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <TechIcon className="text-xl group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 mb-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="text-xl" />
                  <span>Ver en GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <span>Ver Proyecto</span>
                </a>
              )}
            </div>
          </div>

        {/* Video colapsable - Ahora aparece después del contenido */}
        {project.video && (
          <div ref={videoRef} className="relative">
            {/* Video preview colapsado */}
            <div 
              className="relative w-full cursor-pointer group overflow-hidden"
              onClick={handleToggleVideoInModal}
            >
              <div className={`transition-all duration-500 ease-in-out ${isVideoExpandedInModal ? 'max-h-[2000px]' : 'max-h-32'} overflow-hidden`}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto block relative z-10 transition-transform duration-300 group-hover:scale-[1.01]"
                  onError={(e) => {
                    console.error('Error loading video:', project.video);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoadedData={() => {
                    console.log('Video loaded successfully:', project.video);
                  }}
                >
                  <source src={project.video} type="video/webm" />
                  <source src={project.video.replace('.webm', '.mp4')} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              
              {/* Indicador minimalista */}
              <div className="absolute inset-0 flex items-end justify-center pb-6 z-20 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-black/80">
                  {isVideoExpandedInModal ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Botón para pantalla completa (solo visible cuando está expandido) */}
            {isVideoExpandedInModal && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenFullScreenVideo();
                }}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 hover:bg-black/80 transition-all duration-300 z-30 text-white group"
                title="Pantalla completa"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Header con imagen (solo si NO hay video) */}
        {!project.video && (
        <div className="relative overflow-hidden rounded-t-3xl" style={{ height: '20rem' }}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover relative z-10"
              sizes="(max-width: 1200px) 100vw, 1200px"
              onError={(e) => {
                console.error('Error loading image:', project.image);
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}
          
          {/* Fallback con icono si no hay imagen/video o falla la carga */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 flex items-center justify-center`}>
            <Icon className="text-9xl text-white/20" />
          </div>
          
          {/* Gradient overlay adicional */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90 z-30"
            aria-label="Cerrar"
          >
            <FaTimes className="text-white text-lg" />
          </button>
        </div>
        )}

        {/* Close button para cuando hay video */}
        {project.video && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-90 z-30"
            aria-label="Cerrar"
          >
            <FaTimes className="text-white text-lg" />
          </button>
        )}
      </div>
    </div>
    </>
  );
}
