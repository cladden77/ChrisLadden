import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Palette } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyXora() {
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
                  Xora
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Xora is an AI-driven SaaS platform that needed a sleek, high-converting landing page to showcase its advanced tech and attract early adopters.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-deep-blue transition-colors duration-200">
                    View Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="rounded-2xl h-96 flex items-center justify-center overflow-hidden bg-gray-100">
                  <img src="/xora-mockup-lg.jpg" alt="Xora mockup large" className="object-cover w-full h-full" />
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
                <p className="text-brand-graphite">1 Week</p>
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
                <p className="text-brand-graphite">React, Vite, Tailwind CSS</p>
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
                Xora needed a sleek, high-impact web presence to match the sophistication of its AI-driven SaaS offering. The team's main priority was to turn complex AI capabilities into a clear, compelling story that would resonate with potential users and drive conversions.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                The goal was to create a fast, modern landing page that balanced sleek design with performance, showcasing the product while encouraging sign-ups and future integration opportunities.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Solution</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                We designed and developed a high-performance React landing page with conversion-focused UX, custom animations, and a modern aesthetic that reflects Xora's innovative brand.
                </p>
                <p className="text-brand-graphite leading-relaxed">
The site features SEO-optimized architecture, smooth scroll interactions, and mobile responsiveness—delivering a seamless experience across devices and setting the stage for future AI integrations.
</p>
<p className="text-brand-graphite leading-relaxed">
The result is a polished, scalable digital presence that positions Xora as a leader in AI innovation while driving early user engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <div className="flex justify-center my-12">
          <img 
            src="/Xora-Site-layouts-display.jpg" 
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