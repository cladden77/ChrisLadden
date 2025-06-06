import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Palette } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyShareArizona() {
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
                  ShareArizona
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                ShareArizona is a real estate platform based in Northern Arizona, built to connect landowners with buyers through a clean brand identity and a dynamic, listing-ready website.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/cladden77/sharearizona"
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
                  <img src="/ShareArizona-Mockup-lg.jpg" alt="ShareArizona mockup" className="object-cover w-full h-full" />
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
                Steve launched ShareArizona with a mission to simplify real estate listings across Northern Arizona—but needed both a compelling brand and a user-friendly digital platform to bring the vision to life. The challenge was to create a trustworthy brand presence and a site that made listing and browsing properties intuitive for everyday users.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                The goal was to deliver a modern identity system and a functional website that could scale with the business, support property submissions, and make it easy for buyers to explore available listings.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Solution</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                We started with a full brand identity—from logo and color palette to typography—that captured the spirit of Arizona and the trustworthiness of a real estate platform. From there, we designed and developed a responsive, SEO-optimized website that allowed users to search, browse, and submit property listings with ease.
                </p>
                <p className="text-brand-graphite leading-relaxed mb-6">
                Built with a custom CMS and intuitive navigation, the site empowers the ShareArizona team to manage listings and content efficiently—no tech expertise required.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                The result is a cohesive brand and digital experience that positions ShareArizona as a go-to resource for property transactions in the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <div className="flex justify-center my-12">
          <img 
            src="/ShareArizona-Logo.jpeg" 
            alt="ShareArizona Logo" 
            className="max-w-full h-auto w-full md:w-3/4 lg:w-1/2 object-contain"
          />
        </div>

        {/* Project Image */}
        <div className="flex justify-center my-12">
          <img 
            src="/ShareArizona-Site-layout.jpg" 
            alt="ShareArizona layouts display" 
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