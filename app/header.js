'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

  const headerRightArray = [
    { label: 'Call Now', variant: 'outlined', href: 'tel:+911234567890' },
    { label: 'Get in touch', variant: 'contained', href: 'mailto:contact@renusehgalco.com' }
  ];

    return (
      <header className="fixed w-full z-50 bg-indigo-800 text-emerald-100 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                        <div className="flex items-center gap-3">
          <div className="rounded-md bg-emerald-900/20 p-2">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.08" />
              <path d="M6 16L10 8L14 16" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-lg text-emerald-100 font-semibold">Renu Sehgal & Co.</div>
            <div className="text-xs text-emerald-200">GST • Company Compliance • Tax</div>
          </div>
        </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-emerald-100 font-medium hover:text-blue-600 transition-all duration-300 relative group px-3 py-2 rounded-lg"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Right Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {headerRightArray.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    btn.variant === 'contained'
                      ? 'rounded-md bg-white px-3 py-1 text-sm font-medium text-indigo-900 hover:brightness-95'
                      : 'items-center rounded-md bg-emerald-900/20 px-3 py-1 text-sm sm:inline-flex hover:bg-emerald-900/30'
                  }`}
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="md:hidden flex flex-col items-center bg-emerald-900/20 justify-center w-8 h-8 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded transition-all duration-300"
            >
              <span
                className={`w-6 h-0.5 bg-emerald-100 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-emerald-100 mt-1.5 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-emerald-100 mt-1.5 transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Absolute Overlay */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0  text-emerald-100 bg-indigo-900   z-40 transform transition-all duration-300 origin-top ${
            isOpen
              ? 'opacity-100 translate-y-0 visible animate-in slide-in-from-top-2 fade-in'
              : 'opacity-0 -translate-y-2 invisible animate-out slide-out-to-top-2 fade-out'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
        >
          <div className="px-4 py-4">
            {/* Mobile Auth Buttons on Top */}
            <div className="flex gap-2 pb-4 border-b border-gray-800/30 mb-4">
              {headerRightArray.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  className={`flex-1 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    btn.variant === 'contained'
                      ? 'rounded-md bg-white px-3 py-1 text-sm font-medium text-indigo-900 hover:brightness-95'
                      : 'items-center text-emerald-100 rounded-md bg-emerald-900/20 px-3 py-1 text-sm sm:inline-flex hover:bg-emerald-900/30'
                  }`}
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-emerald-100 font-medium hover:bg-blue-50 hover:text-blue-600 hover:pl-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
  );
}
