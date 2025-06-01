import { ArrowRight } from "lucide-react";
import { SiWordpress, SiReact } from "react-icons/si";
import { Palette } from "lucide-react";

export default function ServicesSection() {
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

  const services = [
    {
      icon: <SiWordpress className="text-4xl" />,
      title: "WordPress Development",
      description: "Custom WordPress solutions that are fast, secure, and easy to manage. From simple blogs to complex business sites with e-commerce capabilities.",
      features: [
        "Custom theme development",
        "SEO optimization",
        "E-commerce integration",
        "Performance optimization"
      ]
    },
    {
      icon: <SiReact className="text-4xl" />,
      title: "React Development",
      description: "Modern, interactive web applications built with React. Scalable, maintainable, and performant solutions for complex business needs.",
      features: [
        "Modern JavaScript frameworks",
        "API integration",
        "Performance optimization",
        "Mobile-responsive design"
      ]
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Brand Design",
      description: "Complete brand identity packages including logos, color schemes, typography, and comprehensive brand guidelines for consistent marketing.",
      features: [
        "Logo & identity design",
        "UI/UX design",
        "Marketing materials",
        "Brand guidelines"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
            Services That Drive Results
          </h2>
          <p className="text-xl text-brand-graphite max-w-3xl mx-auto">
            From concept to launch, I provide comprehensive development and design solutions tailored to your unique needs.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 pt-16 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-3xl text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-brand-graphite mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-brand-light-gray">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <button 
                onClick={scrollToContact}
                className="text-brand-blue font-medium hover:text-brand-deep-blue transition-colors duration-200 inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
