export default function DashboardSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-6">
              The Mindset OS & Movement
            </h2>
            <p className="text-lg text-brand-graphite mb-8 leading-relaxed">
              Get insights into your project progress and performance with comprehensive analytics. 
              Track key metrics, monitor growth, and make data-driven decisions that propel your business forward.
            </p>
            <p className="text-brand-graphite mb-8">
              Performance monitoring and optimization tools help ensure sustainable optimization efforts 
              that drive long-term success for your digital presence.
            </p>
            <div className="flex items-center text-sm text-brand-graphite">
              <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
              Real-time performance tracking
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-brand-charcoal rounded-xl p-6 shadow-xl">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm">Analytics Dashboard</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="h-px bg-gray-600"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="h-20 bg-gradient-to-r from-brand-blue to-blue-400 rounded opacity-80"></div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded opacity-80"></div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-xs">Performance Metrics</span>
                  <span className="text-brand-blue text-xs">Live Data</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">Load Time</span>
                    <span className="text-white text-xs">0.8s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">SEO Score</span>
                    <span className="text-green-400 text-xs">95/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}