"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", path: "/#home" },
  { name: "About Us", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Join Network", path: "/#register" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/#contact" },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.97L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.229h.005c5.505 0 9.988-4.479 9.99-9.985v-.002C22.007 6.478 17.521 2 12.012 2zm5.727 14.19c-.25.703-1.442 1.285-2.008 1.375-.54.086-1.246.126-3.21-.69-2.515-1.043-4.143-3.606-4.269-3.774-.127-.168-.94-1.25-.94-2.385 0-1.135.592-1.691.802-1.916.21-.225.46-.282.613-.282.153 0 .307.001.44.007.14.006.326-.053.51.393.189.46.647 1.579.704 1.694.057.116.095.25.018.403-.077.153-.153.25-.306.423-.153.174-.325.29-.479.46-.168.183-.346.38-.149.718.196.337.876 1.446 1.878 2.337.818.728 1.51 1.136 1.843 1.275.333.14.529.117.728-.112.199-.229.853-.996 1.082-1.338.229-.342.458-.285.767-.171.31.114 1.968.928 2.304 1.096.337.168.56.25.642.393.082.143.082.828-.168 1.531z" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/#home");

  useEffect(() => {
    const handleScroll = () => {
      // Background blur scroll check
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section scroll tracking
      const sections = [
        "home",
        "about",
        "services",
        "why-choose-us",
        "how-we-work",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`/#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Drawer Backdrop (Blurs the rest of the page and blocks interactions) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-all duration-300 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "glass-nav py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" className="flex items-center group">
            <Image
              src="/adfily-logo.jpeg"
              alt="Adfily Logo"
              width={60}
              height={60}
              className="rounded-lg object-cover shadow-[0_0_15px_rgba(37,99,235,0.35)] group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.path ||
                (pathname === "/" && activeSection === item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-accent-secondary font-semibold"
                      : "text-muted-silver hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full shadow-[0_0_10px_rgba(37,99,235,0.55)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/919307967995"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2.5 rounded-full border border-[#25D366] text-sm font-semibold text-foreground hover:text-[#25D366] hover:bg-[#25D366]/10 hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-accent-secondary transition-colors duration-300 p-1"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-slate-200 py-8 px-6 animate-fade-in-up">
            <div className="flex flex-col space-y-5">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.path ||
                  (pathname === "/" && activeSection === item.path);
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold tracking-wide py-2 border-b border-slate-100 transition-all duration-300 ${
                      isActive
                        ? "text-accent-secondary"
                        : "text-muted-silver hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <a
                href="https://wa.me/919307967995"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-center font-semibold text-white shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Let&apos;s Talk</span>
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
