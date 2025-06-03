import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Palette } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyTechFlow() {
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
                    UI/UX Design
                  </span>
                  <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-sm rounded-full">
                    Full-Stack Development
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  TechFlow™
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Enterprise software solution designed to streamline workflow management and boost productivity. Built to handle complex business processes with intuitive user interfaces and powerful automation capabilities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-deep-blue transition-colors duration-200">
                    View Live Demo
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                  <button className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200">
                    View Documentation
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl h-96 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">TechFlow™</h3>
                    <p className="text-emerald-200">Streamline Your Workflow</p>
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
                <p className="text-brand-graphite">6 months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-charcoal mb-2">Team</h3>
                <p className="text-brand-graphite">Full-stack lead</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-charcoal mb-2">Technology</h3>
                <p className="text-brand-graphite">React, Node.js, PostgreSQL</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-charcoal mb-2">Design</h3>
                <p className="text-brand-graphite">Enterprise UX/UI</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Challenge</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                  Large enterprises were struggling with fragmented workflow systems that created bottlenecks, reduced productivity, and made it difficult to track project progress across departments.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                  The goal was to create a unified platform that could handle complex enterprise workflows while maintaining simplicity and ease of use for all team members.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">The Solution</h2>
                <p className="text-brand-graphite leading-relaxed mb-6">
                  Built a comprehensive workflow management system with drag-and-drop workflow builder, real-time collaboration features, automated reporting, and integration capabilities with existing enterprise tools.
                </p>
                <p className="text-brand-graphite leading-relaxed">
                  The platform features role-based permissions, advanced analytics, and scalable architecture to support growing enterprise needs.
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
                TechFlow successfully transformed how enterprises manage their workflows, resulting in significant productivity improvements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">45%</div>
                <p className="text-brand-graphite">Reduction in process time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">98%</div>
                <p className="text-brand-graphite">User adoption rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">60%</div>
                <p className="text-brand-graphite">Improvement in team efficiency</p>
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