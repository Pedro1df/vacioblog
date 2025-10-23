export default function BlogHeader1() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-red-600 to-black text-white py-16 sm:py-20 border-b-4 border-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Centro de Bombas de Vacío
          </h1>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed font-semibold">
            Aprende todo sobre bombas de vacío, su funcionamiento, aplicaciones industriales y mejores prácticas. Desde fundamentos hasta tecnologías avanzadas, somos tu recurso completo.
          </p>
          <div className="flex items-center gap-2 text-gray-100">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-xs font-bold text-white border-2 border-gray-900">I</div>
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold text-white border-2 border-gray-900">T</div>
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white border-2 border-gray-900">V</div>
            </div>
            <span className="text-sm font-bold">Expertos Técnicos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
