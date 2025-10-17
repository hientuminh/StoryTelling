'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">📚</span>
            <span className="text-xl font-display font-bold text-primary-600">
              Kể Chuyện Cho Bé
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Trang Chủ
            </Link>
            <Link
              href="/stories"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Truyện
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Thể Loại
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Giới Thiệu
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang Chủ
            </Link>
            <Link
              href="/stories"
              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Truyện
            </Link>
            <Link
              href="/categories"
              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Thể Loại
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Giới Thiệu
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
