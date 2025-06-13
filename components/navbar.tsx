"use client";

import { Home, Info, Mail, Menu, ShieldQuestion, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="text-xl font-bold hover:text-gray-300 transition-colors"
            >
              <img src={"/logo-light.svg"} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <Info className="h-4 w-4 mr-2" />
                About
              </Link>
              <Link
                href="/faqs"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <ShieldQuestion className="h-4 w-4 mr-2" />
                FAQs
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white  px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white  px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
              >
                <Info className="h-4 w-4 mr-2" />
                About
              </Link>
              <Link
                href="/faqs"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <ShieldQuestion className="h-4 w-4 mr-2" />
                Faqs
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white  px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
