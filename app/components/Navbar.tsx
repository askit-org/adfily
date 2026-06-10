'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'glass-nav py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/logo.jpeg"
            alt="Adfily Logo"
            width={32}
            height={32}
            className="rounded-lg object-cover shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform duration-300"
          />
          <span className="font-syne font-extrabold text-xl tracking-wider uppercase text-white group-hover:text-glow transition-all duration-300">
            Adfily
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-accent-purple-light font-semibold'
                    : 'text-muted-silver hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple to-accent-purple-light rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn-glow px-6 py-2.5 rounded-full border border-accent-purple text-sm font-semibold text-white hover:bg-accent-purple/10 transition-all duration-300 flex items-center gap-2"
          >
            <span>Let’s Elevate</span>
            <ArrowUpRight className="w-4 h-4 text-accent-purple-light" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-accent-purple-light transition-colors duration-300 p-1"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 py-8 px-6 animate-fade-in-up">
          <div className="flex flex-col space-y-5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold tracking-wide py-2 border-b border-white/5 transition-all duration-300 ${
                    isActive ? 'text-accent-purple-light' : 'text-muted-silver hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-purple-light text-center font-semibold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Let’s Elevate</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
