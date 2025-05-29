import { MessageCircle, Search, Target, PenTool, Code, RefreshCw, Rocket, BarChart3, Headphones } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "We start with a deep dive into your goals, target audience, and project requirements. This ensures we're aligned from day one.",
      features: [
        { icon: <MessageCircle className="w-4 h-4" />, text: "Strategy consultation" },
        { icon: <Search className="w-4 h-4" />, text: "Market research" },
        { icon: <Target className="w-4 h-4" />, text: "Goal definition" }
      ]
    },
    {
      number: 2,
      title: "Design & Build",
      description: "I create beautiful designs and develop them into functional, high-performing websites with regular updates and feedback loops.",
      features: [
        { icon: <PenTool className="w-4 h-4" />, text: "Wireframes & mockups" },
        { icon: <Code className="w-4 h-4" />, text: "Development & testing" },
        { icon: <RefreshCw className="w-4 h-4" />, text: "Regular check-ins" }
      ]
    },
    {
      number: 3,
      title: "Launch & Support",
      description: "Your website goes live with full testing, optimization, and ongoing support to ensure everything runs smoothly post-launch.",
      features: [
        { icon: <Rocket className="w-4 h-4" />, text: "Site deployment" },
        { icon: <BarChart3 className="w-4 h-4" />, text: "Performance monitoring" },
        { icon: <Headphones className="w-4 h-4" />, text: "Ongoing support" }
      ]
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
            My Process
          </h2>
          <p className="text-xl text-brand-graphite max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-charcoal">{step.title}</h3>
                </div>
                <p className="text-brand-graphite mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-brand-light-gray">
                      <div className="text-brand-teal mr-3">
                        {feature.icon}
                      </div>
                      {feature.text}
                    </div>
                  ))}
                </div>
              </div>
              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-brand-teal"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
