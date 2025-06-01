import { ArrowRight, Check } from "lucide-react";

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
    <section id="home" className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="lg:pr-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Smarter Design. <span className="text-yellow-300">Faster Launches.</span> Real Results.
            </h1>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Hi, I'm Chris Ladden—a creative developer blending strategy, design, and AI to help founders, creators, and small teams launch powerful brands and websites that perform from day one.
            </p>
            
            {/* Key Benefits */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-blue-100">AI-enhanced visuals and copywriting</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-blue-100">Mobile-first, SEO-friendly, scalable websites</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-blue-100">Delivered fast—ready to launch</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Free Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          {/* Hero Image */}
          <div className="lg:pl-8 relative">
            <div className="relative">
              {/* Large circular background */}
              <div className="absolute inset-0 w-96 h-96 bg-white/20 rounded-full -z-10 transform translate-x-12 -translate-y-8"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Professional developer portrait" 
                className="relative z-10 w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white/30" 
              />
              
              {/* Floating stats card */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">10+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Years</p>
                    <p className="text-xs text-gray-600">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
