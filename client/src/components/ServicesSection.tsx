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
      icon: <Palette className="w-10 h-10" />,
      title: "Brand & Marketing Design",
      description: "Social graphics, email visuals, ads, and print materials—designed to keep your brand sharp and consistent.",
      features: [
        "Social media graphics, ads, and promos",
        "Email visuals and slide decks",
        "Marketing & print-ready materials",
        "Brand guidelines"
      ]
    },
    {
      icon: <SiWordpress className="text-4xl" />,
      title: "Web Design & Development",
      description: "Responsive websites and landing pages built with WordPress, React, and Next.js—fast, clean, and scalable.",
      features: [
        "Custom websites (WordPress, React, Next.js)",
        "Landing pages & UI components", 
        "Responsive design optimization",
        "SEO Optimization"
      ]
    },
    {
      icon: <SiReact className="text-4xl" />,
      title: "AI-Enhanced Systems & Automation", 
      description: "Custom Notion dashboards, Tally forms, and automations using tools like Zapier to save time and boost output.",
      features: [
        "Notion dashboards & workflows",
        "Tally + Zapier integrations",
        "Custom automation solutions"
      ]
    },
  ];

  return (
    <section id="services" className="pt-16 lg:pt-24 pb-8 lg:pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
          Ongoing Support That Moves Your Business Forward
          </h2>
          <p className="text-lg text-brand-graphite max-w-2xl mx-auto">
            From concept to launch, I provide comprehensive development and design solutions tailored to your unique needs.
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
              <div className="space-y-2 text-left mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-brand-graphite">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>
              {/* <button 
                onClick={scrollToContact}
                className="text-brand-blue font-medium hover:text-brand-deep-blue transition-colors duration-200 inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
