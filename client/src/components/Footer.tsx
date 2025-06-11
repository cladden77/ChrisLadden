import { Instagram, Linkedin } from "lucide-react";
import whiteLogo from "@assets/chrisladden-logo-white.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/chrisladden", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/chris-ladden", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-brand-graphite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            {/* Logo */}
            <img 
              src={whiteLogo} 
              alt="Chris Ladden Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 sm:space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-brand-blue transition-colors duration-200"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Chris Ladden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
