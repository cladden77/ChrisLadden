import { Mail, ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function ContactSection() {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/chris-ladden/30min", "_blank");
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss your project and see how I can help you achieve your goals. Book a free discovery call to get started.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-300 text-xs sm:text-sm">Email</p>
                  <a 
                    href="mailto:chris.ladden@gmail.com" 
                    className="text-white font-medium hover:text-brand-blue transition-colors duration-200 text-sm sm:text-base break-all"
                  >
                    chris.ladden@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Schedule a Discovery Call</p>
                  <a 
                    href="https://calendly.com/chris-ladden/30min" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-brand-blue transition-colors duration-200 text-sm sm:text-base"
                  >
                    Book a 30-minute call
                  </a>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center bg-brand-blue hover:bg-brand-deep-blue text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <span>Start Your Project</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
          
          <div className="order-first lg:order-last lg:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Creative branding and workspace elements" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
