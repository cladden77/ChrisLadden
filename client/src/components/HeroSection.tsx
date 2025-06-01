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
    <section id="home" className="relative bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-[600px]">
          <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-charcoal leading-tight mb-6">
              Smarter Design. <span className="text-brand-blue">Faster Launches.</span> Real Results.
            </h1>
            
            <p className="text-lg lg:text-xl text-brand-graphite mb-8 leading-relaxed">
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
              className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-deep-blue transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Free Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          {/* Hero Image */}
          <div className="lg:pl-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace with dual monitors showing code and design" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              
              {/* Floating card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
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
        </div>
      </div>
    </section>
  );
}