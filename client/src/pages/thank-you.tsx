import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-charcoal">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Thank You
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <p className="text-xl text-brand-graphite leading-relaxed">
                Thanks for submitting your project details! 🎉<br />
                I'll review everything and reach out soon.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-brand-charcoal mb-6">
                  In the meantime, feel free to book a quick discovery call:
                </h2>
                <a 
                  href="https://calendly.com/chrisladden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-deep-blue transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  calendly.com/chrisladden
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 