import { Article } from "@/lib/articles";
import { X, Clock, User, Calendar } from "lucide-react";
import { useEffect } from "react";

interface ArticleDetailProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleDetail({ article, onClose }: ArticleDetailProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 aspect-video">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category & Read Time */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <Clock size={16} />
              {article.readTime} min de lectura
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{article.author}</p>
                <p className="text-sm text-gray-500">Autor</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
              {article.content}
            </p>
          </div>

          {/* Footer Action */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Volver a Artículos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
