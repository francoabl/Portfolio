'use client';

import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { useState } from 'react';

const educationItems = [
  {
    title: 'Ingeniería en Informática',
    place: 'Duoc UC',
    period: '2024 - ACTUAL'
  }
];

const certificationItems = [
  {
    title: 'AWS - Cloud Foundations - Training Badge',
    place: 'Amazon Web Services',
    period: '2024',
    badgeUrl: 'https://www.credly.com/badges/414a85c1-b571-4b20-9f59-22944f75fd84/linked_in_profile' 
  },
  {
    title: 'Python Essentials 1',
    place: 'Cisco',
    period: '2024',
    badgeUrl: 'https://www.credly.com/badges/70ba5e29-936e-48d2-afa7-d4a47a7c0958/linked_in_profile' 
  },
  {
    title: 'Python Essentials 2',
    place: 'Cisco',
    period: '2023',
    badgeUrl: 'https://www.credly.com/badges/b3046d01-b2ff-497e-b15e-093f48bd7a26/linked_in?t=slfcwi' 
  },
  {
    title: 'Full Stack JavaScript',
    place: 'Udemy',
    period: '2020',
    badgeUrl: 'https://www.udemy.com' 
  }

];

export default function EducationCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 w-full cursor-pointer hover:scale-[1.02]"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Education Section - Solo preview */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-purple-200">
            <FaGraduationCap className="text-purple-600 text-base" />
          </div>
          <h3 className="text-base font-semibold" style={{ color: '#FFFFFF' }}>Educación</h3>
        </div>
        <ul className="space-y-2">
          {educationItems.slice(0, 1).map(({ title, place, period }) => (
            <li key={title} className="rounded-2xl p-3" style={{ background: 'linear-gradient(to bottom right, #1A1A1A, #0D0D0D)' }}>
              <p className="font-semibold text-sm leading-tight mb-1" style={{ color: '#FFFFFF' }}>{title}</p>
              <p className="text-xs" style={{ color: '#CCCCCC' }}>{place}</p>
              <p className="text-[10px] mt-1" style={{ color: '#999999' }}>{period}</p>
            </li>
          ))}
        </ul>
        <p className="text-xs text-center mt-4 font-medium" style={{ color: '#999999' }}>Click para ver más detalles</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scaleIn"
            style={{ backgroundColor: '#FFFFFF' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 border-b border-gray-100 px-6 py-4 rounded-t-3xl" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold" style={{ color: '#000000' }}>Educación & Certificaciones</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Education Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200">
                    <FaGraduationCap className="text-purple-600 text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#000000' }}>Educación</h3>
                </div>
                <ul className="space-y-3">
                  {educationItems.map(({ title, place, period }) => (
                    <li key={title} className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 hover:shadow-md transition-shadow">
                      <p className="font-semibold text-base leading-tight mb-2" style={{ color: '#000000' }}>{title}</p>
                      <p className="text-sm text-gray-600">{place}</p>
                      <p className="text-xs text-gray-400 mt-1">{period}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Certifications Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-pink-200">
                    <FaCertificate className="text-pink-600 text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#000000' }}>Certificaciones</h3>
                </div>
                <ul className="space-y-3">
                  {certificationItems.map(({ title, place, period, badgeUrl }) => (
                    <li key={title} className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 hover:shadow-md transition-shadow group">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="font-semibold text-base leading-tight mb-2" style={{ color: '#000000' }}>{title}</p>
                          <p className="text-sm text-gray-600">{place}</p>
                          <p className="text-xs text-gray-400 mt-1">{period}</p>
                        </div>
                        {badgeUrl && (
                          <a
                            href={badgeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105"
                            style={{ 
                              background: 'linear-gradient(to right, #000000, #333333)',
                              color: '#FFFFFF'
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Ver Badge
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
