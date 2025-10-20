"use client";

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-primary">BC</span>
            </div>
            <div className="text-2xl font-bold gradient-text">
              Blessings Chilemba
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-bold text-lg">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-bold text-lg">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-bold text-lg">Services</a>
            <a href="#apps" className="text-foreground hover:text-primary transition-colors font-bold text-lg">Apps</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-bold text-lg">Contact</a>
          </div>
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
