import { ArrowRight, Check, ChevronDown } from "lucide-react";

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

  const scrollToServices = () => {
    const element = document.getElementById("services");
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
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 w-full min-h-screen">
        {/* Left side with white background */}
        <div className="bg-white flex items-center justify-center px-4 sm:px-6 lg:px-16 py-12 lg:py-0">
          <div className="max-w-lg w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-charcoal leading-tight mb-6">
              Smarter Design. <span className="text-brand-blue">Faster Launches.</span> Real Results.
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-brand-graphite mb-8 leading-relaxed">
              Hi, I'm Chris Ladden—a creative developer blending strategy, design, and AI to help founders, creators, and small teams launch powerful brands and websites that perform from day one.
            </p>
            
            {/* Key Benefits */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-brand-graphite">AI-enhanced visuals and copywriting</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-brand-graphite">Mobile-first, SEO-friendly, scalable websites</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-brand-graphite">Delivered fast—ready to launch</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-deep-blue transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Book a Free Discovery Call
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        
        {/* Right side with full image */}
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000" 
            alt="Creative team collaborating on digital projects" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToServices}
          className="w-12 h-12 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300"
          aria-label="Scroll to services section"
        >
          <ChevronDown className="w-6 h-6 text-brand-charcoal" />
        </button>
      </div>
    </section>
  );
}
