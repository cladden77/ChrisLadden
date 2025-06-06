import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Palette } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyJfConsulting() {
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
                    Web Design & Development
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  JF Consulting
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                JF Consulting is a growing tax and bookkeeping firm that needed a modern, easy-to-navigate website to support client growth and streamline service access for both new and existing customers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/cladden77/JFCOKC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-deep-blue transition-colors duration-200"
                  >
                    View Github Code
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="rounded-2xl h-96 flex items-center justify-center overflow-hidden bg-gray-100">
                  <img src="/jfconsulting-mockup-lg.jpg" alt="JF Consulting mockup" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-charcoal mb-2">Timeline</h3>
                <p className="text-brand-graphite">1 Month</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-charcoal mb-2">Team</h3>
                <p className="text-brand-graphite">Solo project</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-charcoal mb-2">Technology</h3>
                <p className="text-brand-graphite">WordPress, PHP, ACF</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-charcoal mb-2">Design</h3>
                <p className="text-brand-graphite">Custom UI/UX</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Challenge</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                As JF Consulting expanded its client base, the original website lacked the polish and usability needed to support professional credibility and client onboarding. The site needed a modern design, clear structure, and easy access to services for both new and returning clients.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                The goal was to design a clean, trustworthy digital experience that made it simple to learn about services, get in touch, and access key resources—while setting the foundation for future growth.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Solution</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                I delivered a fully redesigned website with custom page templates, mobile responsiveness, and a streamlined layout tailored to JF Consulting’s brand and audience.
                </p>
                <p className="text-brand-graphite leading-relaxed mb-6">
                Each section was thoughtfully structured to guide users through the firm’s offerings, with intuitive navigation and clear calls to action. The development phase focused on performance, ease of maintenance, and client-ready functionality.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                The result is a professional, future-ready website that builds trust, improves usability, and supports the firm’s continued growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <div className="flex justify-center my-12">
          <img 
            src="/JFCO-Site-layouts-display.jpg" 
            alt="Xora site layouts display" 
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