import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";

export default function BlogHeader() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Aprende Desarrollo Web
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Explora artículos sobre diseño, desarrollo y las últimas tendencias tecnológicas. Desde React hasta TypeScript, cubrimos todo lo que necesitas saber.
          </p>
          <div className="flex items-center gap-2 text-blue-100 mb-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-xs font-bold text-blue-700">M</div>
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs font-bold text-blue-700">C</div>
              <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-xs font-bold text-blue-700">A</div>
            </div>
            <span className="text-sm">Escrito por desarrolladores apasionados</span>
          </div>

          <button
            onClick={() => navigate("/vacuum-pumps")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors hover:shadow-lg"
          >
            <Zap size={20} />
            Ver Centro de Bombas de Vacío
          </button>
        </div>
      </div>
    </div>
  );
}
