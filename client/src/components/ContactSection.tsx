import { Mail, Phone, Calendar } from "lucide-react";

export default function ContactSection() {
  const handleScheduleCall = () => {
    // This would link to Calendly or another scheduling platform
    window.open("https://calendly.com/chrisladden", "_blank");
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss your project and see how I can help you achieve your goals. Book a free discovery call to get started.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:chris.ladden@gmail.com" 
                    className="text-white font-medium hover:text-brand-teal transition-colors duration-200"
                  >
                    chris.ladden@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a 
                    href="tel:+16026176749" 
                    className="text-white font-medium hover:text-brand-teal transition-colors duration-200"
                  >
                    (602) 617-6749
                  </a>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={handleScheduleCall}
              className="inline-flex items-center bg-brand-teal hover:bg-brand-deep-teal text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Schedule a Call</span>
              <Calendar className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="lg:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Creative branding and workspace elements" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
