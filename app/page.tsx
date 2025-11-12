import ProfileCard from "@/components/ProfileCard";
import EducationCard from "@/components/EducationCard";
import UnifiedCarousel from "@/components/UnifiedCarousel";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 lg:p-8" style={{ backgroundColor: '#F5F5F7' }}>
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 text-center" style={{ 
            background: 'linear-gradient(to right, #000000, #333333)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Mi Trabajo</h2>
          <p className="text-gray-500 text-sm text-center font-medium">Habilidades y proyectos destacados</p>
        </div>

        {/* Grid con columna lateral y contenido principal */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-6">
          <div className="flex flex-col gap-4">
            <ProfileCard />
            <EducationCard />
          </div>
          <div className="h-full">
            <UnifiedCarousel />
          </div>
        </div>
      </div>
    </main>
  );
}
