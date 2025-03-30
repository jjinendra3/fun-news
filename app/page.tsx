"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import TrendingTopics from "@/components/trending-topics";
import StoryGrid from "@/components/story-grid";
import Footer from "@/components/footer";
import { mockArticles } from "@/lib/mock-data";
import type { Article } from "@/lib/types";
import CategoryTabs from "@/components/category-tabs";
import SearchBar from "@/components/search-bar";
import SplashScreen from "@/components/splash-screen";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [filteredArticles, setFilteredArticles] =
    useState<Article[]>(mockArticles);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSplash, setShowSplash] = useState(true);
  const [likedArticles, setLikedArticles] = useState<string[]>([]);

  // Refs for section scrolling
  const worldRef = useRef<HTMLDivElement>(null);
  const entertainmentRef = useRef<HTMLDivElement>(null);
  const sportsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const politicsRef = useRef<HTMLDivElement>(null);
  const healthRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const lifestyleRef = useRef<HTMLDivElement>(null);
  const travelRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);
  const fashionRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter articles based on category and search query
    let filtered = [...articles];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [selectedCategory, searchQuery, articles]);

  const handleCategoryChange = (category: string) => {
    const offset = 150; // adjust as needed for your fixed header or spacing
    // Map categories to their refs
    const categoryRefs: Record<
      string,
      React.RefObject<HTMLDivElement | null>
    > = {
      world: worldRef,
      entertainment: entertainmentRef,
      sports: sportsRef,
      tech: techRef,
      politics: politicsRef,
      health: healthRef,
      science: scienceRef,
      business: businessRef,
    };

    const ref = categoryRefs[category];

    if (ref && ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const targetPosition = elementTop + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleLikeArticle = (articleId: string) => {
    if (likedArticles.includes(articleId)) {
      setLikedArticles(likedArticles.filter((id) => id !== articleId));
    } else {
      setLikedArticles([...likedArticles, articleId]);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      world: worldRef,
      entertainment: entertainmentRef,
      sports: sportsRef,
      tech: techRef,
      politics: politicsRef,
      health: healthRef,
      business: businessRef,
      science: scienceRef,
    };

    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      const offset = 150; // Adjust this value as needed
      const elementTop = ref.current.getBoundingClientRect().top;
      const targetPosition = elementTop + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      // setSelectedCategory(sectionId);
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  // Get popular stories (most liked or featured)
  const popularStories = articles
    .filter((article) => article.featured || likedArticles.includes(article.id))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header onNavigate={scrollToSection} />
      <main className="container mx-auto px-4 pt-6 pb-20">
        <TrendingTopics />

        <HeroSection
          articles={articles.filter((article) => article.featured)}
        />
        <div className="my-8 flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-3/4">
            <CategoryTabs
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            {/* <SearchBar onSearch={handleSearch} /> */}

            <div ref={worldRef} className="mb-12">
              {selectedCategory === "all" || selectedCategory === "world" ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">
                    World
                  </h2>
                  <StoryGrid
                    articles={filteredArticles.filter(
                      (a) => a.category === "world"
                    )}
                    likedArticles={likedArticles}
                    onLikeArticle={handleLikeArticle}
                  />
                </>
              ) : null}
            </div>
            <div ref={businessRef} className="mb-12">
              {selectedCategory === "all" || selectedCategory === "business" ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">
                    Business
                  </h2>
                  <StoryGrid
                    articles={filteredArticles.filter(
                      (a) => a.category === "business"
                    )}
                    likedArticles={likedArticles}
                    onLikeArticle={handleLikeArticle}
                  />
                </>
              ) : null}
            </div>

            {/* Entertainment Section */}
            <div ref={entertainmentRef} className="mb-12">
              {selectedCategory === "all" ||
              selectedCategory === "entertainment" ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-pink-400">
                    Entertainment
                  </h2>
                  <StoryGrid
                    articles={filteredArticles.filter(
                      (a) => a.category === "entertainment"
                    )}
                    likedArticles={likedArticles}
                    onLikeArticle={handleLikeArticle}
                  />
                </>
              ) : null}
            </div>

            {/* Sports Section */}
            <div ref={sportsRef} className="mb-12">
              {selectedCategory === "all" || selectedCategory === "sports" ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">
                    Sports
                  </h2>
                  <StoryGrid
                    articles={filteredArticles.filter(
                      (a) => a.category === "sports"
                    )}
                    likedArticles={likedArticles}
                    onLikeArticle={handleLikeArticle}
                  />
                </>
              ) : null}
            </div>
            <div ref={scienceRef} className="mb-12">
              {selectedCategory === "all" || selectedCategory === "science" ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-orange-400">
                    Science
                  </h2>
                  <StoryGrid
                    articles={filteredArticles.filter(
                      (a) => a.category === "science"
                    )}
                    likedArticles={likedArticles}
                    onLikeArticle={handleLikeArticle}
                  />
                </>
              ) : null}
            </div>
            {/* Tech Section */}
            <div ref={techRef} className="mb-12">
              {selectedCategory === "all" || selectedCategory === "tech" ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-purple-400">
                    Technology
                  </h2>
                  <StoryGrid
                    articles={filteredArticles.filter(
                      (a) => a.category === "tech"
                    )}
                    likedArticles={likedArticles}
                    onLikeArticle={handleLikeArticle}
                  />
                </>
              ) : null}
            </div>

            {/* Politics Section */}
            <div ref={politicsRef} className="mb-12">
              {selectedCategory === "all" || selectedCategory === "politics" ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-red-400">
                    Politics
                  </h2>
                  <StoryGrid
                    articles={filteredArticles.filter(
                      (a) => a.category === "politics"
                    )}
                    likedArticles={likedArticles}
                    onLikeArticle={handleLikeArticle}
                  />
                </>
              ) : null}
            </div>
            <div ref={healthRef} className="mb-12">
              {selectedCategory === "all" || selectedCategory === "health" ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-red-400">
                    Health
                  </h2>
                  <StoryGrid
                    articles={filteredArticles.filter(
                      (a) => a.category === "health"
                    )}
                    likedArticles={likedArticles}
                    onLikeArticle={handleLikeArticle}
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className="w-full md:w-1/4 sticky top-20">
            <div className="bg-gray-800 rounded-xl shadow-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-primary">
                Popular Stories
              </h2>
              <div className="space-y-4">
                {popularStories.length > 0 ? (
                  popularStories.map((article) => (
                    <div
                      key={article.id}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-lg bg-gray-700 flex-shrink-0 overflow-hidden">
                        <img
                          src={
                            article.image ||
                            "/placeholder.svg?height=200&width=200"
                          }
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {article.date}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">
                    No popular stories yet. Try liking some articles!
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h3 className="font-bold text-primary">Subscribe for Updates</h3>
              <p className="text-sm my-2 text-gray-300">
                Get the latest news delivered to your inbox!
              </p>
              <div className="flex gap-2 mt-3 h-8">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-white px-2 py-1 rounded-md font-medium hover:bg-primary/90 transition-colors text-xs h-8">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
