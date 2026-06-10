import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080809] border-t border-white/5 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Branding column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpeg"
              alt="Adfily Logo"
              width={24}
              height={24}
              className="rounded-md object-cover"
            />
            <span className="font-syne font-extrabold tracking-wide uppercase text-white">
              Adfily
            </span>
          </div>
          <p className="text-muted-silver text-sm leading-relaxed max-w-xs">
            A full-spectrum digital marketing and talent management agency scaling brands through hyper-targeted strategies and disruptive content.
          </p>
        </div>

        {/* Services column */}
        <div>
          <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wider mb-5">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/services" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                SEO & Content Strategy
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                Video Shoot & Editing
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                UGC & Influencer Marketing
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                Website Development & UI/UX
              </Link>
            </li>
          </ul>
        </div>

        {/* Agency column */}
        <div>
          <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wider mb-5">
            Agency
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                Blog Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                Contact & Scale
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect column */}
        <div>
          <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wider mb-5">
            Connect
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                TikTok
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-silver hover:text-accent-purple-light transition-colors duration-200">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-muted-silver">
        <span>&copy; {currentYear} Adfily Agency. All rights reserved.</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
