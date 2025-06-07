import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Palette } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudySeasons() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link 
                href="/"
                className="inline-flex items-center text-brand-blue hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="py-1 bg-brand-blue/20 text-brand-blue text-sm rounded-full">
                    Graphic Design
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Seasons Performance
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Seasons Performance is a custom JDM automotive shop that needed bold, street-ready apparel to reflect its performance-driven culture and connect with its enthusiast community.
                </p>
                
              </div>
              <div className="order-first lg:order-last">
                <div className="rounded-2xl h-96 flex items-center justify-center overflow-hidden bg-gray-100">
                  <img src="/seasons-logo.jpg" alt="Seasons Performance logo" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Challenge</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                Seasons Performance wanted to expand its brand beyond the garage by launching custom apparel that resonated with its JDM audience. The goal was to create designs that blended car culture, streetwear aesthetics, and brand identity—while maintaining a high-quality, print-ready format.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                The challenge was balancing performance-inspired visuals with everyday wearability, giving fans gear they’d be proud to rep both at meets and on the street.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Solution</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                We developed a series of apparel designs—from bold logo tees to concept-driven graphics—that captured the raw energy of the JDM scene. Each piece was created with print process and fabric type in mind, ensuring clean execution and a consistent brand feel across garments.
                </p>
                <p className="text-brand-graphite leading-relaxed mb-6">
                The result is a cohesive apparel line that amplifies Seasons Performance’s identity and gives the community a new way to engage with the brand beyond builds and parts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Images */}
        <div className="flex justify-center my-12">
          <img 
            src="/seasons-1-front.png" 
            alt="Seasons Performance front shirt one" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>

        <div className="flex justify-center my-12">
        <img 
            src="/seasons-1-back.png" 
            alt="Seasons Performance back shirt one" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>

        <div className="flex justify-center my-12">
        <img 
            src="/seasons-2-front.png" 
            alt="Seasons Performance back shirt two" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>

        <div className="flex justify-center my-12">
        <img 
            src="/seasons-2-back.png" 
            alt="Seasons Performance back shirt two" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>

        <div className="flex justify-center my-12">
        <img 
            src="/seasons-3-front.png" 
            alt="Seasons Performance back shirt three" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>

        <div className="flex justify-center my-12">
        <img 
            src="/seasons-3-back.png" 
            alt="Seasons Performance back shirt three" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
              Ready to start your next project?
            </h2>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-deep-blue transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}