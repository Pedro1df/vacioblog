import { Article } from "@/lib/articles";
import { Clock, User, Calendar } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <div
      onClick={() => onClick(article)}
      className="group cursor-pointer h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 aspect-video">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {article.category}
          </span>
          <span className="text-xs text-gray-500">{article.readTime} min</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-3">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
