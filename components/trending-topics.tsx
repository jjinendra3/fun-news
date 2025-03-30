"use client"

import { useEffect, useRef } from "react"
import { Sparkles } from "lucide-react"

const trendingTopics = [
  "Climate Summit",
  "Olympic Games",
  "Tech Innovations",
  "Space Exploration",
  "Global Economy",
  "Health Breakthroughs",
  "Entertainment Awards",
  "Political Developments",
  "Sports Championships",
]

export default function TrendingTopics() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const scrollWidth = scrollElement.scrollWidth
    const clientWidth = scrollElement.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPosition = 0
    const scrollSpeed = 0.25

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }

      if (scrollElement) {
        scrollElement.scrollLeft = scrollPosition
      }

      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <div className="bg-gradient-to-r from-purple-900 to-primary/80 py-3 rounded-xl mb-8 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 flex items-center gap-2 text-white font-bold">
          <Sparkles className="h-4 w-4" />
          <span>TRENDING</span>
        </div>
        <div className="h-6 border-l border-white/30" />
        <div ref={scrollRef} className="flex-1 overflow-hidden whitespace-nowrap">
          <div className="inline-flex gap-6 px-4 animate-marquee">
            {[...trendingTopics, ...trendingTopics].map((topic, index) => (
              <div
                key={`${topic}-${index}`}
                className="inline-block px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

