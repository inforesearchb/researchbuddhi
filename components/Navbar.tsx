"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center h-16 shrink-0">
  <img
    src="/logo.png"
    alt="ResearchBuddhi Logo"
    className="h-12 w-auto object-contain"
  />
</Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-primary-50 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"}`}>
          <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-1 border border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg font-medium text-sm ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-white hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-primary text-white text-sm mt-2 w-full text-center py-2 rounded-md">
              Get Free Consultation
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
}