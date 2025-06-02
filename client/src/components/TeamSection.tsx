export default function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">
            Who's Propelling Their Potential?
          </h2>
          <p className="text-lg text-brand-graphite max-w-2xl mx-auto">
            See different teams and how we're helping them in supporting their mission, culture, and business impact.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl">
            {[1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index}
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}