"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CategoryTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "All" },
  { id: "world", name: "World" },
  { id: "politics", name: "Politics" },
  { id: "business", name: "Business" },
  { id: "tech", name: "Tech" },
  { id: "entertainment", name: "Entertainment" },
  { id: "sports", name: "Sports" },
  { id: "science", name: "Science" },
  { id: "health", name: "Health" },
];

export default function CategoryTabs({
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="mb-6 overflow-x-auto scrollbar-hide">
      <div className="flex space-x-2 pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              selectedCategory === category.id
                ? "text-white"
                : "text-gray-300 hover:text-primary hover:bg-gray-800"
            }`}
          >
            {selectedCategory === category.id && (
              <motion.div
                layoutId="activeCategoryBackground"
                className="absolute inset-0 bg-primary rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
