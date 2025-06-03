import { ArrowRight } from "lucide-react";
import heroBackground from "@assets/chrisladden-hero-bg.jpg";

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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Smarter Design.<br />
          <span className="text-brand-blue">Faster Launches.</span><br />
          Real Results.
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          I create modern, responsive websites and applications that turn your vision into reality. From concept to launch, I deliver solutions that drive growth.
        </p>
        
        <div className="flex flex-col gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-deep-blue transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <p className="text-gray-400 text-sm text-center">
            Free consultation • Quick turnaround
          </p>
        </div>
      </div>
    </section>
  );
}