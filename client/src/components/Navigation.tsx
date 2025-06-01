import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "shadow-lg border-b border-gray-100" : "shadow-sm border-b border-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 flex items-center">
              <svg width="180" height="40" viewBox="0 0 500 100" className="h-full">
                <g transform="scale(0.2)">
                  <circle cx="250" cy="250" r="240" fill="none" stroke="#2c2c2c" strokeWidth="20"/>
                  <circle cx="250" cy="250" r="200" fill="none" stroke="#2c2c2c" strokeWidth="8"/>
                  <text x="250" y="200" textAnchor="middle" fontSize="120" fontFamily="serif" fontWeight="bold" fill="#2c2c2c">CL</text>
                  <text x="750" y="200" textAnchor="start" fontSize="140" fontFamily="serif" fontWeight="bold" fill="#2c2c2c">CHRIS</text>
                  <text x="750" y="320" textAnchor="start" fontSize="140" fontFamily="serif" fontWeight="bold" fill="#2c2c2c">LADDEN</text>
                </g>
              </svg>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("process")}
              className="text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-brand-graphite hover:text-brand-blue focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("process")}
              className="block w-full text-left text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
