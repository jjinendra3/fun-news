import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              FunNews
            </h3>
            <p className="text-gray-400 mb-4">Your source for vibrant, playful, and modern news coverage.</p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">World</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">Politics</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">Business</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">Tech</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">Entertainment</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">About Us</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">Careers</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">Terms of Service</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-primary transition-colors">Contact Us</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Get the latest news delivered to your inbox.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FunNews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

