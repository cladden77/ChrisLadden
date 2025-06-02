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
      description: "Custom WordPress solutions that are fast, secure, and easy to manage. From simple blogs to complex business sites.",
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
      description: "Modern, interactive web applications built with React. Scalable, maintainable solutions for complex business needs.",
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
      description: "Complete brand identity packages including logos, color schemes, typography, and comprehensive brand guidelines.",
      features: [
        "Logo & identity design",
        "UI/UX design",
        "Marketing materials",
        "Brand guidelines"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
            Our Three Loops at a Glance
          </h2>
          <p className="text-lg text-brand-graphite max-w-2xl mx-auto">
            Build a strong foundation and boost your business 
            to reach sustainable scale and breakthrough.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="text-brand-blue text-2xl">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-brand-graphite mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2 text-left">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-brand-graphite">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
