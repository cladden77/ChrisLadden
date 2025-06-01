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
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 w-full h-screen">
        {/* Left side with gradient background */}
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 flex items-center justify-center px-8 lg:px-16">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Smarter Design. <span className="text-blue-300">Faster Launches.</span> Real Results.
            </h1>
            
            <p className="text-lg lg:text-xl text-purple-100 mb-8 leading-relaxed">
              Hi, I'm Chris Ladden—a creative developer blending strategy, design, and AI to help founders, creators, and small teams launch powerful brands and websites that perform from day one.
            </p>
            
            {/* Key Benefits */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-100">AI-enhanced visuals and copywriting</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-100">Mobile-first, SEO-friendly, scalable websites</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-100">Delivered fast—ready to launch</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Free Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Right side with full image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000" 
            alt="Creative team collaborating on digital projects" 
            className="w-full h-full object-cover" 
          />
          
          {/* Floating card overlay */}
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">10+</span>
              </div>
              <div>
                <p className="font-semibold text-brand-charcoal">Years</p>
                <p className="text-sm text-brand-light-gray">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
