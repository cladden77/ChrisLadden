import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Palette } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyVinyl() {
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
                  <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-sm rounded-full">
                    Product Design
                  </span>
                  <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-sm rounded-full">
                    Web Design & Development
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Vinyl™
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  An AI-powered web application designed to capture, organize, and utilize conversations like never before. Built to revolutionize how teams collaborate and extract insights from their communications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-deep-blue transition-colors duration-200">
                    View Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                  <button className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200">
                    View Prototype
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Vinyl™</h3>
                    <p className="text-gray-600">AI-powered conversation platform</p>
                  </div>
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
                <p className="text-brand-graphite">3 months</p>
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
                <p className="text-brand-graphite">React, Node.js, AI APIs</p>
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
                  Teams struggle to extract meaningful insights from their daily conversations and meetings. Important decisions and ideas get lost in chat threads, emails, and video calls, making it difficult to track progress and maintain alignment.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                  The goal was to create an intelligent platform that could automatically capture, categorize, and surface key insights from team communications, making collaboration more effective and strategic.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Solution</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                  Vinyl™ leverages advanced AI to automatically process conversations, extract key themes, and provide intelligent summaries. The platform features real-time collaboration tools, smart search capabilities, and actionable insights dashboard.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                  The result is a comprehensive solution that transforms scattered conversations into organized, searchable knowledge that drives better decision-making and team alignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-6">
                Project Results
              </h2>
              <p className="text-lg text-brand-graphite max-w-2xl mx-auto">
                The platform successfully launched with positive user feedback and measurable improvements in team productivity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">85%</div>
                <p className="text-brand-graphite">Reduction in meeting time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">92%</div>
                <p className="text-brand-graphite">User satisfaction rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">3x</div>
                <p className="text-brand-graphite">Faster insight discovery</p>
              </div>
            </div>
          </div>
        </section>

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