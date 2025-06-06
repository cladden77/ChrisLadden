import { MessageCircle, Search, Target, PenTool, RefreshCw, Headphones } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Kickoff + Strategy Alignment",
      description: "We align on your top priorities for the month and set clear expectations.",
      features: [
        { icon: <MessageCircle className="w-4 h-4" />, text: "Shared Notion workspace" },
        { icon: <Target className="w-4 h-4" />, text: "Clear goals & deliverables" }
      ]
    },
    {
      number: 2,
      title: "Weekly Check-ins & Creative Output",
      description: "You get consistent updates, fast turnarounds, and deliverables sent weekly.",
      features: [
        { icon: <PenTool className="w-4 h-4" />, text: "Design & dev tasks prioritized" },
        { icon: <RefreshCw className="w-4 h-4" />, text: "Ongoing communication & feedback" }
      ]
    },
    {
      number: 3,
      title: "Wrap-Up & Planning Ahead",
      description: "We recap what was delivered, track hours used, and plan next month’s focus.",
      features: [
        { icon: <Headphones className="w-4 h-4" />, text: "Monthly summary" },
        { icon: <Search className="w-4 h-4" />, text: "Adjust scope as needed" }
      ]
    }
  ];

  return (
    <section id="process" className="pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
            My Process
          </h2>
          <p className="text-xl text-brand-graphite max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-charcoal">{step.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-brand-graphite mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-brand-light-gray">
                      <div className="text-brand-blue mr-3">
                        {feature.icon}
                      </div>
                      {feature.text}
                    </div>
                  ))}
                </div>
              </div>
              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-brand-blue"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
