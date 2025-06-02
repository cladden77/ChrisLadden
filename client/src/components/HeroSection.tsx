import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-blue-600 to-brand-charcoal">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 190, 255, 0.8)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(37, 99, 235, 0.4)" />
              </linearGradient>
              <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 190, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="150" r="120" fill="url(#grad1)" opacity="0.6" />
            <circle cx="900" cy="200" r="180" fill="url(#grad2)" opacity="0.4" />
            <circle cx="600" cy="600" r="150" fill="url(#grad1)" opacity="0.3" />
            <path d="M300,400 Q500,200 700,350 T1000,300" stroke="rgba(0, 190, 255, 0.2)" strokeWidth="3" fill="none" />
            <path d="M100,600 Q400,300 600,500 T900,450" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 relative z-10">
          Smarter Design. <span className="text-white drop-shadow-lg">Faster Launches.</span> Real Results.
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
          I create modern, responsive websites and applications that turn your vision into reality. From concept to launch, I deliver solutions that drive growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <p className="text-gray-300 text-sm">
            Free consultation • Quick turnaround
          </p>
        </div>
      </div>
    </section>
  );
}