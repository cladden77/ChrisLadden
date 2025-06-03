import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = () => {
      // Initialize Tally embeds after script loads
      if (typeof window !== 'undefined' && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      } else {
        // Fallback: manually load embeds for iframes with data-tally-src
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: any) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };
    script.onerror = () => {
      // Fallback: manually load embeds if script fails
      document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: any) => {
        iframe.src = iframe.dataset.tallySrc;
      });
    };
    
    // Only add script if it doesn't already exist
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      document.head.appendChild(script);
    }
    
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-charcoal mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg text-brand-graphite max-w-2xl mx-auto leading-relaxed">
              Ready to start your project? Fill out the form below and I'll get back to you within 24 hours to discuss your needs and how we can bring your vision to life.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                data-tally-src="https://tally.so/embed/melXr0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
                className="min-h-[600px]"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Alternative Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
              Prefer to reach out directly?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-brand-charcoal mb-4">Email Me</h3>
                <a 
                  href="mailto:chris.ladden@gmail.com"
                  className="text-brand-blue hover:text-brand-deep-blue font-medium transition-colors duration-200"
                >
                  chris.ladden@gmail.com
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-brand-charcoal mb-4">Schedule a Call</h3>
                <a 
                  href="https://calendly.com/chris-ladden/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-brand-deep-blue font-medium transition-colors duration-200"
                >
                  Book a 30-minute discovery call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Tally Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.head.appendChild(s);}
          `
        }}
      />
    </div>
  );
}