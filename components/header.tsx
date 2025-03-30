"use client"

import { useState } from "react"
import { Menu, X, Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  onNavigate: (sectionId: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              FunNews
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate("world")}
              className="text-gray-300 hover:text-primary font-bold transition-colors"
            >
              World
            </button>
            <button
              onClick={() => onNavigate("business")}
              className="text-gray-300 hover:text-primary font-bold transition-colors"
            >
              Business
            </button>
            <button
              onClick={() => onNavigate("entertainment")}
              className="text-gray-300 hover:text-primary font-bold transition-colors"
            >
              Entertainment
            </button>
            <button
              onClick={() => onNavigate("sports")}
              className="text-gray-300 hover:text-primary font-bold transition-colors"
            >
              Sports
            </button>
            <button
              onClick={() => onNavigate("science")}
              className="text-gray-300 hover:text-primary font-bold transition-colors"
            >
              Science
            </button>
            <button
              onClick={() => onNavigate("tech")}
              className="text-gray-300 hover:text-primary font-bold transition-colors"
            >
              Tech
            </button>
            <button
              onClick={() => onNavigate("politics")}
              className="text-gray-300 hover:text-primary font-bold transition-colors"
            >
              Politics
            </button>
            <button
              onClick={() => onNavigate("health")}
              className="text-gray-300 hover:text-primary font-bold transition-colors"
            >
              Health
            </button>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 text-primary hover:bg-gray-700">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-800 border-gray-700 text-gray-200">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">Profile</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">Favorites</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">Settings</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container flex flex-row items-center justify-center px-4 py-3">
            <div className="flex items-center space-x-4 border-gray-800">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 text-primary hover:bg-gray-700">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

