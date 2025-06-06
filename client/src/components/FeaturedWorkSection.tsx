import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

export default function FeaturedWorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Xora",
      description: "Xora is an AI-driven SaaS platform that needed a sleek, high-converting landing page to showcase its advanced tech and attract early adopters.",
      image: "/xora-mockup.jpg",
      link: "/case-study/xora"
    },
    {
      id: 2,
      title: "JF Consulting",
      description: "JF Consulting is a growing tax and bookkeeping firm that needed a modern, easy-to-navigate website to support client growth and streamline service access for both new and existing customers.",
      image: "/jfconsulting-mockup.jpg",
      link: "/case-study/jfconsulting"
    },
    {
      id: 3,
      title: "VibeCorp™",
      description: "A modern corporate website showcasing innovative business solutions with cutting-edge design.",
      gradient: "from-purple-600 to-blue-700",
      link: "/case-study/vibecorp"
    },
    {
      id: 4,
      title: "TechFlow™",
      description: "Enterprise software solution designed to streamline workflow management and boost productivity.",
      gradient: "from-emerald-500 to-teal-600",
      link: "/case-study/techflow"
    }
  ];

  return (
    <section id="work" className="pt-16 lg:pt-24 pb-8 lg:pb-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-brand-graphite max-w-2xl">
              Explore some of my recent projects that showcase innovation, creativity, and results-driven design.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full border border-gray-300 hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full border border-gray-300 hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        >
          {projects.map((project) => (
            <Link key={project.id} href={project.link} onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'auto' });
              }, 0);
            }}>
              <div className="flex-none w-80 sm:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                {project.image ? (
                  <div className="h-64 relative overflow-hidden">
                    <img src={project.image} alt={project.title + ' mockup'} className="object-cover w-full h-full" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-brand-graphite leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-6 md:hidden">
          <p className="text-sm text-brand-graphite">← Swipe to see more projects →</p>
        </div>

        {/* See More Work Button */}
        {/* <div className="flex justify-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-blue-50 text-brand-blue font-semibold rounded-lg border-2 border-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl">
            See More Work
          </button>
        </div> */}
      </div>


    </section>
  );
}