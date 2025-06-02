export default function StatsSection() {
  const stats = [
    { number: "5,500+", label: "Projects Completed" },
    { number: "320+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
            Join the Movement
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-blue mb-2">
                {stat.number}
              </div>
              <div className="text-brand-graphite font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-brand-graphite">
            Trusted by innovative teams worldwide
          </p>
        </div>
      </div>
    </section>
  );
}