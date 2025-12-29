import ProfileCard from "@/components/ProfileCard";
import EducationCard from "@/components/EducationCard";
import UnifiedCarousel from "@/components/UnifiedCarousel";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center p-3 lg:p-6" style={{ backgroundColor: '#F5F5F7', overflow: 'hidden', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
      <div className="max-w-7xl w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-3 flex-shrink-0">
          <h2 className="text-2xl font-bold mb-1 text-center" style={{ 
            background: 'linear-gradient(to right, #000000, #333333)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Mi Trabajo</h2>
          <p className="text-gray-500 text-xs text-center font-medium">Habilidades y proyectos destacados</p>
        </div>

        {/* Layout con columna lateral y contenido principal */}
        <div className="flex flex-col lg:flex-row flex-1" style={{ overflow: 'hidden' }}>
          <div className="flex flex-col lg:w-80 flex-shrink-0 pr-0 lg:pr-4" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
            <div className="mb-3">
              <ProfileCard />
            </div>
            <div>
              <EducationCard />
            </div>
          </div>
          <div className="flex-1 mt-3 lg:mt-0" style={{ overflow: 'hidden' }}>
            <UnifiedCarousel />
          </div>
        </div>
      </div>
    </main>
  );
}
