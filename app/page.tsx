import ProfileCard from "@/components/ProfileCard";
import EducationCard from "@/components/EducationCard";
import UnifiedCarousel from "@/components/UnifiedCarousel";

export default function Home() {
  return (
    <main className="min-h-screen lg:h-screen flex items-center justify-center p-3 sm:p-4 lg:p-6" style={{ backgroundColor: '#F5F5F7', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
      <div className="max-w-7xl w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-3 sm:mb-4 flex-shrink-0">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-1 text-center" style={{ 
            background: 'linear-gradient(to right, #000000, #333333)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Mi Trabajo</h2>
          <p className="text-gray-500 text-xs sm:text-sm text-center font-medium">Habilidades y proyectos destacados</p>
        </div>

        {/* Layout con columna lateral y contenido principal */}
        <div className="flex flex-col lg:flex-row flex-1 gap-3 sm:gap-4 lg:gap-0 overflow-y-auto lg:overflow-hidden">
          <div className="flex flex-col lg:w-80 flex-shrink-0 lg:pr-4 gap-3 sm:gap-4">
            <div>
              <ProfileCard />
            </div>
            <div className="hidden sm:block">
              <EducationCard />
            </div>
          </div>
          <div className="flex-1 min-h-[500px] lg:min-h-0">
            <UnifiedCarousel />
          </div>
          {/* EducationCard visible en móvil al final */}
          <div className="sm:hidden">
            <EducationCard />
          </div>
        </div>
      </div>
    </main>
  );
}
