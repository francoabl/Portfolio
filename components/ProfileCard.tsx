'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaRocket, FaCode } from 'react-icons/fa';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full w-full flex flex-col" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
      {/* Avatar & Name */}
      <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
        <div className="relative mb-2 sm:mb-3">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full p-1" style={{ background: 'linear-gradient(to bottom right, #000000, #333333)' }}>
            <div className="w-full h-full rounded-full overflow-hidden relative" style={{ backgroundColor: '#FFFFFF' }}>
              <Image
                src="/projects/fperfil.png"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 64px, 80px"
              />
            </div>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 inline-flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full border-2 bg-green-500" style={{ borderColor: '#FFFFFF' }}></span>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold leading-tight mb-1" style={{ color: '#000000' }}>Franco Alarcón</h1>
        <p className="text-xs sm:text-sm font-medium text-gray-600">Full Stack Developer</p>
        <p className="text-xs flex items-center gap-1 mt-1 text-gray-400">
          <FaMapMarkerAlt className="text-xs" /> Santiago, Chile
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {[
          { label: 'Años desarrollando proyectos', value: '+2', gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', icon: FaCalendarAlt },
          { label: 'Stack', value: 'Full', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', icon: FaCode }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.label} 
              className="rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center relative overflow-hidden group hover:scale-105 transition-transform duration-200"
              style={{ background: item.gradient }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
              <div className="flex justify-center mb-1 sm:mb-1.5">
                <Icon className="text-xl sm:text-2xl text-white drop-shadow-sm" />
              </div>
              <p className="text-lg sm:text-xl font-bold text-white mb-0.5 drop-shadow-sm">{item.value}</p>
              <p className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-white/90 drop-shadow-sm leading-tight">{item.label}</p>
            </div>
          );
        })}
      </div>

      {/* About */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-400">Sobre mí</h2>
        <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
          Estudiante de tercer año de Ingeniería Informática especializado en fullstack en DUOC UC, en formación continua, con foco en adquirir experiencia práctica mediante proyectos reales.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-auto space-y-2">
        <div className="grid grid-cols-3 gap-2">
          {[
            { href: 'https://github.com/francoabl', icon: FaGithub },
            { href: 'https://www.linkedin.com/in/franco-alarc%C3%B3n/', icon: FaLinkedin },
            { href: 'mailto:tu@email.com', icon: FaEnvelope }
          ].map(({ href, icon: Icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-lg sm:rounded-xl p-2.5 sm:p-3 transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(to bottom right, #F5F5F5, #E5E5E5)' }}
            >
              <Icon className="text-lg sm:text-xl text-gray-700 group-hover:text-gray-900 transition-colors" />
            </a>
          ))}
        </div>
        <button 
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/projects/CV_Franco_Alarcon.pdf';
            link.download = 'CV_Franco_Alarcon.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer" 
          style={{ 
            background: 'linear-gradient(to right, #000000, #333333)',
            color: '#FFFFFF'
          }}
        >
          Descargar CV
        </button>
      </div>
    </div>
  );
}
