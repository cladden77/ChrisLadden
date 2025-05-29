import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/chrisladden", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/chrisladden", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/chrisladden", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-brand-graphite py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            {/* Logo */}
            <div className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">CL</span>
            </div>
            <span className="text-white font-medium">Chris Ladden</span>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-brand-teal transition-colors duration-200"
              >
                {link.icon}
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
