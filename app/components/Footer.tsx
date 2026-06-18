import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F0F5FA] border-t border-accent-primary/30 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Branding column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-syne font-extrabold tracking-wide uppercase text-foreground">
              Adfily
            </span>
          </div>
          <p className="text-muted-silver text-sm leading-relaxed max-w-xs">
            At Adfily, we help businesses increase their online visibility, generate quality leads, build brand authority, and drive measurable growth through strategic digital marketing solutions.
          </p>
        </div>

        {/* Quick Links column */}
        <div>
          <h4 className="font-syne font-bold text-sm text-foreground uppercase tracking-wider mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/#about" className="text-muted-silver hover:text-accent-primary transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-muted-silver hover:text-accent-primary transition-colors duration-200">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/#why-choose-us" className="text-muted-silver hover:text-accent-primary transition-colors duration-200">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link href="/#how-we-work" className="text-muted-silver hover:text-accent-primary transition-colors duration-200">
                How We Work
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-silver hover:text-accent-primary transition-colors duration-200">
                Blog Insights
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info column */}
        <div>
          <h4 className="font-syne font-bold text-sm text-foreground uppercase tracking-wider mb-5">
            Contact Details
          </h4>
          <ul className="space-y-3 text-sm text-muted-silver">
            <li>
              <span className="block text-foreground font-semibold text-xs uppercase">Email Us:</span>
              <a href="mailto:info@adfily.com" className="hover:text-accent-primary transition-colors duration-200">
                info@adfily.com
              </a>
            </li>
            <li>
              <span className="block text-foreground font-semibold text-xs uppercase">Call Us:</span>
              <a href="tel:+919307967995" className="hover:text-accent-primary transition-colors duration-200">
                +91 9307967995
              </a>
            </li>
            <li>
              <span className="block text-foreground font-semibold text-xs uppercase">Address:</span>
              <span className="leading-relaxed">
                Office no.141 Bizzbay Mall, NIBM Undri Road Pune-48, India
              </span>
            </li>
          </ul>
        </div>

        {/* Connect column */}
        <div>
          <h4 className="font-syne font-bold text-sm text-foreground uppercase tracking-wider mb-5">
            Connect
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a 
                href="https://www.instagram.com/adfily?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-silver hover:text-accent-primary transition-colors duration-200"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/share/1DsmWfvy3F/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-silver hover:text-accent-primary transition-colors duration-200"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/company/adfily/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-silver hover:text-accent-primary transition-colors duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/919307967995" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent-secondary hover:text-foreground transition-colors duration-200 font-semibold flex items-center gap-1"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-accent-primary/20 flex flex-col md:flex-row items-center justify-between text-xs text-muted-silver">
        <span>&copy; {currentYear} Adfily. All rights reserved.</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
