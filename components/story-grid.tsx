"use client"

import { useState } from "react"
import type { Article } from "@/lib/types"
import { Heart, Share2, MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface StoryGridProps {
  articles: Article[]
  likedArticles: string[]
  onLikeArticle: (articleId: string) => void
}

export default function StoryGrid({ articles, likedArticles, onLikeArticle }: StoryGridProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<{ [key: string]: string[] }>({})

  const handleAddComment = (articleId: string) => {
    if (!comment.trim()) return

    setComments((prev) => ({
      ...prev,
      [articleId]: [...(prev[articleId] || []), comment],
    }))

    setComment("")
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      world: "bg-blue-500",
      politics: "bg-red-500",
      business: "bg-green-500",
      tech: "bg-purple-500",
      entertainment: "bg-pink-500",
      sports: "bg-orange-500",
      science: "bg-teal-500",
      health: "bg-emerald-500",
    }

    return colors[category] || "bg-gray-500"
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-bold text-gray-300">No articles found</h3>
        <p className="text-gray-400 mt-2">Try adjusting your search or category filters</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            onClick={() => setSelectedArticle(article)}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.image || "/placeholder.svg?height=400&width=600"}
                alt={article.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
             
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2 text-white">{article.title}</h3>
              <p className="text-gray-300 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-400">
                  By {article.author} • {article.date}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onLikeArticle(article.id)
                    }}
                    className={`p-1.5 rounded-full ${
                      likedArticles.includes(article.id)
                        ? "text-red-500 bg-red-900/30"
                        : "text-gray-400 hover:text-red-500 hover:bg-red-900/30"
                    } transition-colors`}
                  >
                    <Heart className="h-4 w-4" fill={likedArticles.includes(article.id) ? "currentColor" : "none"} />
                  </button>
                  {/* <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-900/30 transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                  </button> */}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900 rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedArticle.image || "/placeholder.svg?height=600&width=1200"}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                {/* <div
                  className={`absolute bottom-4 left-4 ${getCategoryColor(selectedArticle.category)} text-white text-sm font-bold px-3 py-1 rounded-full`}
                >
                  {selectedArticle.category}
                </div> */}
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-white">{selectedArticle.title}</h2>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>By {selectedArticle.author}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedArticle.date}</span>
                </div>

                <div className="prose prose-invert max-w-none mb-6">
                  <p className="mb-4 text-gray-300">{selectedArticle.content}</p>
                  <p className="mb-4 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => onLikeArticle(selectedArticle.id)}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-full ${
                        likedArticles.includes(selectedArticle.id)
                          ? "text-red-500 bg-red-900/30"
                          : "text-gray-400 hover:text-red-500 hover:bg-red-900/30"
                      } transition-colors`}
                    >
                      <Heart
                        className="h-4 w-4"
                        fill={likedArticles.includes(selectedArticle.id) ? "currentColor" : "none"}
                      />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-900/30 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-bold text-lg mb-4 flex items-center text-white">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Comments
                  </h3>

                  <div className="flex items-center mb-4">
                    <input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="flex-1 border border-gray-700 bg-gray-800 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    />
                    <button
                      onClick={() => handleAddComment(selectedArticle.id)}
                      className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors"
                    >
                      Post
                    </button>
                  </div>

                  <div className="space-y-4">
                    {comments[selectedArticle.id]?.map((text, index) => (
                      <div key={index} className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            U
                          </div>
                          <div className="ml-2">
                            <div className="font-medium text-sm text-white">User</div>
                            <div className="text-xs text-gray-400">Just now</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{text}</p>
                      </div>
                    ))}

                    {!comments[selectedArticle.id]?.length && (
                      <div className="text-center py-4 text-gray-400">No comments yet. Be the first to comment!</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

