import { Clock, Rocket, MessageCircle } from "lucide-react";

export default function TrustSection() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "10+ Years of Experience",
      description: "Proven track record of delivering high-quality solutions across various industries and project scales."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Turnarounds",
      description: "Efficient workflows and streamlined processes mean your project launches on time, every time."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Clear Communication",
      description: "Regular updates, transparent processes, and clear communication from start to finish."
    }
  ];

  return (
    <section className="pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern web design mockups and branding elements" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6 lg:space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal">
              Why Work With Me
            </h2>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <div className="text-brand-blue">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-graphite">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
