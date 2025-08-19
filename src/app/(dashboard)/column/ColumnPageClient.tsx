"use client";

import { useState, useMemo } from "react";
import { newsArticles, newsCategories } from "@/lib/data/news";
import NewsCard from "@/components/news/NewsCard";

export default function ColumnPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Filter articles based on selected category
  const filteredArticles = useMemo(() => {
    if (!selectedCategory) {
      return newsArticles;
    }
    return newsArticles.filter(
      (article) => article.category === selectedCategory
    );
  }, [selectedCategory]);

  // Determine which articles to display (8 or all)
  const displayedArticles = useMemo(() => {
    if (showAll) {
      return filteredArticles;
    }
    return filteredArticles.slice(0, 8);
  }, [filteredArticles, showAll]);

  // Check if we should show the "more" button
  const shouldShowMoreButton = filteredArticles.length > 8 && !showAll;

  const handleCategoryClick = (categoryKey: string) => {
    if (selectedCategory === categoryKey) {
      // If clicking the same category, deselect it
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryKey);
    }
    setShowAll(false); // Reset to show only 8 articles
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Tabs */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(newsCategories).map(([key, label]) => (
            <div
              key={key}
              onClick={() => handleCategoryClick(key)}
              className={`p-6 rounded-lg text-center transition-colors cursor-pointer flex flex-col items-center ${
                selectedCategory === key
                  ? "bg-orange-500 text-white"
                  : "bg-[#2E2E2E] text-white hover:bg-gray-700"
              }`}
            >
              <div
                className={`text-lg font-semibold mb-2 ${
                  selectedCategory === key ? "text-white" : "text-orange-400"
                }`}
              >
                RECOMMENDED
              </div>
              <div
                className={`text-lg font-bold mb-1 ${
                  selectedCategory === key ? "text-white" : "text-orange-400"
                }`}
              >
                {key.toUpperCase()}
              </div>

              <div className="w-[56px] h-[0.5px] bg-white mb-[10px]"></div>

              <div className="text-white text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles count and category info */}
      {selectedCategory && (
        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            {newsCategories[selectedCategory as keyof typeof newsCategories]}{" "}
            の記事: {filteredArticles.length}件
          </p>
        </div>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {displayedArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {/* More Button */}
      {shouldShowMoreButton && (
        <div className="w-full flex justify-center">
          <button
            onClick={handleShowMore}
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer"
          >
            コラムをもっと見る
          </button>
        </div>
      )}
    </main>
  );
}
