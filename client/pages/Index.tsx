import { useState } from "react";
import { articles, Article } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import ArticleDetail from "@/components/ArticleDetail";
import BlogHeader from "@/components/BlogHeader";

export default function Index() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <BlogHeader />

      {/* Articles Grid */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={setSelectedArticle}
            />
          ))}
        </div>
      </main>

      {/* Article Detail Modal */}
      <ArticleDetail
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Footer Click Overlay */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}
