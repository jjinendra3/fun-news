"use client"

import type React from "react"

import { useState } from "react"
import { Search, X } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  const clearSearch = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <div className="mb-6">
      <form
        onSubmit={handleSearch}
        className={`flex items-center bg-gray-800 rounded-full border transition-all ${
          isFocused ? "border-primary shadow-sm ring-2 ring-primary/20" : "border-gray-700"
        }`}
      >
        <div className="pl-4">
          <Search className={`h-5 w-5 ${isFocused ? "text-primary" : "text-gray-400"}`} />
        </div>
        <input
          type="text"
          placeholder="Search for news, topics, or authors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 py-3 px-4 bg-transparent outline-none text-sm text-white"
        />
        {query && (
          <button type="button" onClick={clearSearch} className="p-2 text-gray-400 hover:text-gray-200">
            <X className="h-4 w-4" />
          </button>
        )}
        <button
          type="submit"
          className="ml-2 mr-1 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  )
}

