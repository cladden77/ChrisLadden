import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/chrisladden-logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Debounce scroll events to prevent flickering
    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(timeoutId);
    };
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? "bg-white shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 flex items-center">
              <img 
                src={logoPath} 
                alt="Chris Ladden Logo" 
                className="h-full w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg hidden transition-colors duration-300 ${
                isScrolled ? "bg-brand-charcoal" : "bg-white bg-opacity-20"
              }`}>
                CL
              </div>
            </div>

          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-white hover:text-blue-200"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-white hover:text-blue-200"
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("process")}
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-white hover:text-blue-200"
              }`}
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-white hover:text-blue-200"
              }`}
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none transition-colors duration-200 ${
              isScrolled 
                ? "text-brand-graphite hover:text-brand-blue" 
                : "text-white hover:text-blue-200"
            }`}
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
