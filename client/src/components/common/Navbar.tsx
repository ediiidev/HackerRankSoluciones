import React from "react";
import type { NavItem } from "../../types/navigation";
import { Button } from "../ui/Button";

//Array donde se encuentra las opciones del header
const NAV_LINKS: NavItem[] = [
  { label: "Sobre mi", href: "/#about" },
  { label: "React", href: "/category/react" },
  { label: "Python", href: "/category/python" },
  { label: "SQL", href: "/category/sql" },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/**LOGO */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">
            <svg
              className="w-5 h-5 text-[#b9ff66]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-black font-sans">
            EK
          </span>
        </a>
        {/**NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/**ACTION BUTTON */}
        <div className="hidden md:block">
          <Button variant="outline">Request a quote</Button>
        </div>
        {/**MOBILE MENU BUTTON */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-lg px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-neutral-800 hover:text-black py-2 border-b border-neutral-100"
            >
              {link.label}
            </a>
          ))}
          <div>
            <Button variant="outline" className="w-full">
              Request a quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
