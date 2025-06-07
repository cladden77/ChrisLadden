import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Palette } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyUnitedRealEstateGroup() {
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
                  <span className="py-1 bg-brand-blue/20 text-white text-sm rounded-full">
                    |
                  </span>
                  <span className="py-1 bg-brand-blue/20 text-brand-blue text-sm rounded-full">
                    Branding
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                United Real Estate Group
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                United Real Estate Group is a fast-growing real estate company that needed a cohesive brand identity, marketing materials, and signage to establish a polished, professional presence across every client touchpoint.
                </p>
                
              </div>
              <div className="order-first lg:order-last">
                <div className="rounded-2xl h-96 flex items-center justify-center overflow-hidden bg-gray-100">
                  <img src="/united-real-estate-group-mockup-lg.jpg" alt="United Real Estate Group logo" className="object-cover w-full h-full" />
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
                As United Real Estate Group expanded its operations, the team needed a full visual identity system that would instill trust, stand out in a crowded market, and translate across everything from print to signage.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                The goal was to create a strong, unified brand experience—from business cards and brochures to yard signs and seller materials—that elevated their professionalism and supported their growth.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Solution</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                We developed a complete brand package, including logo design, typography, color system, and brand guidelines to ensure consistency across all media. This identity was then extended into high-impact print collateral: business cards, listing signage, brochures, and a fully custom Seller’s Guide.
                </p>
                <p className="text-brand-graphite leading-relaxed mb-6">
                The result is a bold and trustworthy brand system that strengthens client confidence, improves recognition, and empowers the United Real Estate Group team with high-quality tools for every stage of the sales process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Images */}
        <div className="flex justify-center my-0">
          <img 
            src="/united-real-estate-group-logo.png" 
            alt="United Real Estate Group logo" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>

        <div className="flex justify-center my-12">
        <img 
            src="/united-real-estate-group-signage.jpg" 
            alt="United Real Estate Group signage" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>
        <div className="flex justify-center my-12">
        <img 
            src="/united-real-estate-group-cards.jpg" 
            alt="United Real Estate Group cards" 
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