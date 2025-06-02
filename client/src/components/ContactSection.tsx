import { Mail, Phone, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Start your journey with Chris Ladden and unlock your business potential today.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-brand-charcoal mb-6 text-center">
            Run Your First Loop
          </h3>
          <p className="text-brand-graphite text-center mb-8">
            Experience what it's like to run our collaborative development process and take the first step to understanding your digital future.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-charcoal mb-2">
                  First Name
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-charcoal mb-2">
                  Last Name  
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-charcoal mb-2">
                Email
              </label>
              <input 
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-charcoal mb-2">
                Company (Optional)
              </label>
              <input 
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-brand-blue hover:bg-brand-deep-blue text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
