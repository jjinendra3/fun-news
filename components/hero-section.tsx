"use client";

import { useState, useEffect } from "react";
import type { Article } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  articles: Article[];
}

export default function HeroSection({ articles }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play effect to rotate through articles every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [articles.length, isAutoPlaying, currentIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + articles.length) % articles.length;
      return newIndex;
    });
    
    // Reset transition lock after a short delay
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % articles.length;
      return newIndex;
    });
    
    // Reset transition lock after a short delay
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    
    setCurrentIndex(index);
    
    // Reset transition lock after a short delay
    setTimeout(() => setIsTransitioning(false), 300);
  };

  if (articles.length === 0) return null;

  const currentArticle = articles[currentIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8 group">
      {/* Main image and overlay */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10" />
        <img
          src={currentArticle.image}
          alt={currentArticle.title}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isTransitioning ? 0.8 : 1 }}
        />

        {/* Text content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 text-white">
          <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-primary rounded-full">
            {currentArticle.category.toUpperCase()}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            {currentArticle.title}
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-3xl opacity-90">
            {currentArticle.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Read More
            </Button>
            <div className="text-sm opacity-75">
              By {currentArticle.author} • {currentArticle.date}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Previous Article"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 z-30 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handlePrev}
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        aria-label="Next Article"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 z-30 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleNext}
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {articles.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            onClick={() => handleDotClick(index)}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
}