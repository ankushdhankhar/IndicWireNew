"use client";
import { useState, useMemo } from "react";
import { INews } from "@/lib/newsquery";
import NewsGrid from "./news-grid";
import NewsFilters from "./news-filters";
import NewsCard from "./news-card";

export default function NewsPage({ news }: { news: INews[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const allCategories = news.flatMap((item) => item.tags);
    return Array.from(new Set(allCategories));
  }, [news]);

  const filteredNews = useMemo(() => {
    return news
      .filter((item) => {
        const matchesSearch =
          item.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          activeCategory === "All" || item.tags.includes(activeCategory);
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => (new Date(a.time) > new Date(b.time) ? -1 : 1));
  }, [news, searchTerm, activeCategory]);

  const handleFilterChange = (search: string, category: string) => {
    setSearchTerm(search);
    setActiveCategory(category);
  };

  return (
    <>
      {/* <NewsFilters
        categories={categories}
        onFilterChange={handleFilterChange}
      /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {filteredNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </>
  );
}
