"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-6 py-4 lg:px-10 bg-background-dark sticky top-0 z-50">
      <div className="flex items-center gap-4 text-white">
        <div className="size-8 text-primary">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
          </svg>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] font-display">
          Biker Shop
        </h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a
            className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
            href="#"
          >
            Gear Search
          </a>
          <a
            className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
            href="/outfit-builder"
          >
            Outfit Builder
          </a>
          <a
            className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
            href="#"
          >
            Deals
          </a>
          <a
            className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
            href="#"
          >
            My Garage
          </a>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">
          {mobileMenuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card-dark border-b border-border-dark lg:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal py-2"
              href="#"
            >
              Gear Search
            </a>
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal py-2"
              href="/outfit-builder"
            >
              Outfit Builder
            </a>
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal py-2"
              href="#"
            >
              Deals
            </a>
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal py-2"
              href="#"
            >
              My Garage
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
