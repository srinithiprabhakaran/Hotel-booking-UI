import { Link } from "react-router";
import { Hotel, User, Globe, Heart, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Hotel className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">StayHub</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/hotels" className="text-gray-700 hover:text-blue-600 transition-colors">
              Explore Hotels
            </Link>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="w-5 h-5" />
              Wishlist
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Globe className="w-5 h-5" />
              USD
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              to="/hotels"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore Hotels
            </Link>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors w-full">
              <Heart className="w-5 h-5" />
              Wishlist
            </button>
            <button className="w-full px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors text-left">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
