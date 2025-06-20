import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import blackLogo from "@assets/chrisladden-logo.png";
import whiteLogo from "@assets/chrisladden-logo-white.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth < 1024 ? 0 : 10; // 0 for mobile, 10 for desktop
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Debounce scroll events to prevent flickering
    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true }); // Handle screen size changes
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home page with section anchor
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
      isScrolled ? "bg-white shadow-lg" : "bg-transparent lg:bg-transparent bg-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="h-10 flex items-center"
              onClick={() => {
                // Scroll to top when navigating to home
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
            >
              <img 
                src={isScrolled ? blackLogo : whiteLogo} 
                alt="Chris Ladden Logo" 
                className="h-full w-auto cursor-pointer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg hidden transition-colors duration-300 cursor-pointer ${
                isScrolled ? "bg-brand-charcoal" : "bg-white bg-opacity-20"
              }`}>
                CL
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-brand-charcoal lg:text-white hover:text-brand-blue lg:hover:text-blue-200"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-brand-charcoal lg:text-white hover:text-brand-blue lg:hover:text-blue-200"
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("process")}
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-brand-charcoal lg:text-white hover:text-brand-blue lg:hover:text-blue-200"
              }`}
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection("work")}
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-brand-charcoal lg:text-white hover:text-brand-blue lg:hover:text-blue-200"
              }`}
            >
              Work
            </button>
            <Link 
              href="/contact"
              className={`transition-colors duration-200 font-medium ${
                isScrolled 
                  ? "text-brand-graphite hover:text-brand-blue" 
                  : "text-brand-charcoal lg:text-white hover:text-brand-blue lg:hover:text-blue-200"
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none transition-colors duration-200 ${
              isScrolled 
                ? "text-brand-graphite hover:text-brand-blue" 
                : "text-brand-charcoal lg:text-white hover:text-brand-blue lg:hover:text-blue-200"
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
              onClick={() => scrollToSection("work")}
              className="block w-full text-left text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              Work
            </button>
            <Link 
              href="/contact"
              className="block w-full text-left text-brand-graphite hover:text-brand-blue transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
