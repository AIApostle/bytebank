import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-mint to-emerald">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-navy-midnight">Bytebank</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm text-slate hover:text-main transition-colors font-medium">
              Product
            </a>
            <a href="#how-it-works" className="text-sm text-slate hover:text-main transition-colors font-medium">
              How it works
            </a>
            <a href="#developers" className="text-sm text-slate hover:text-main transition-colors font-medium">
              Developers
            </a>
            <a href="#about" className="text-sm text-slate hover:text-main transition-colors font-medium">
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block text-sm font-medium text-slate hover:text-main transition-colors">
              Sign in
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-mint hover:bg-emerald text-white text-sm font-semibold transition-colors">
              Get started
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-cloud transition-colors"
            >
              <svg className="w-6 h-6 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <a href="#product" className="block px-4 py-2 text-sm font-medium text-slate hover:text-main">
              Product
            </a>
            <a href="#how-it-works" className="block px-4 py-2 text-sm font-medium text-slate hover:text-main">
              How it works
            </a>
            <a href="#developers" className="block px-4 py-2 text-sm font-medium text-slate hover:text-main">
              Developers
            </a>
            <a href="#about" className="block px-4 py-2 text-sm font-medium text-slate hover:text-main">
              About
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
