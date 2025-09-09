import React, { useEffect, useRef, useState } from 'react';
import { Info, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import processAnalyticsImage from '@/assets/process-analytics.jpg';

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCharts, setAnimateCharts] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateCharts(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="roflof-section bg-white">
      <div className="roflof-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Data Visualization */}
          <div className={`relative ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-luxury group">
              <img
                src={processAnalyticsImage}
                alt="Professional analyzing design data and metrics"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Animated Data Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating Data Cards */}
              <div className={`absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg ${animateCharts ? 'animate-slideInLeft' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="text-sm font-semibold text-primary">Growth Rate</div>
                    <div className="text-lg font-bold text-green-500">+34%</div>
                  </div>
                </div>
              </div>

              <div className={`absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg ${animateCharts ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-blue-500" />
                  <div>
                    <div className="text-sm font-semibold text-primary">Projects</div>
                    <div className="text-lg font-bold text-blue-500">148</div>
                  </div>
                </div>
              </div>

              <div className={`absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg ${animateCharts ? 'animate-slideInLeft' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center gap-3">
                  <PieChart className="w-6 h-6 text-purple-500" />
                  <div>
                    <div className="text-sm font-semibold text-primary">Efficiency</div>
                    <div className="text-lg font-bold text-purple-500">92%</div>
                  </div>
                </div>
              </div>

              {/* Animated Progress Bars */}
              <div className={`absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg min-w-[200px] ${animateCharts ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-semibold text-primary mb-1">Design Quality</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gold h-2 rounded-full transition-all duration-2000"
                        style={{ 
                          width: animateCharts ? '95%' : '0%',
                          transitionDelay: '1.6s'
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-1">Client Satisfaction</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-2000"
                        style={{ 
                          width: animateCharts ? '98%' : '0%',
                          transitionDelay: '1.8s'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Breathing Effect Background */}
            <div className="absolute inset-0 -z-10 bg-gold/20 rounded-2xl animate-pulse" style={{ animationDuration: '4s' }} />
          </div>

          {/* Content Side */}
          <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <h2 className="text-section text-primary mb-8 leading-tight">
              See how we can help you <span className="text-gradient-gold">progress</span>
            </h2>
            
            <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <p className="text-lg text-primary/70 leading-relaxed mb-6">
                We add a layer of fearless insights and action that allows change makers to 
                accelerate their progress in areas such as brand, design digital, comms and social research.
              </p>
              
              <p className="text-lg text-primary/70 leading-relaxed">
                Our data-driven approach ensures every design decision is backed by research, 
                analytics, and proven methodologies that deliver measurable results.
              </p>
            </div>

            {/* Capability List */}
            <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Strategic Planning',
                  'Data Analytics',
                  'Design Research',
                  'Performance Metrics',
                  'User Experience',
                  'Market Analysis'
                ].map((capability, index) => (
                  <div 
                    key={capability}
                    className={`flex items-center gap-3 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-primary/80">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className={`roflof-button-secondary group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <span className="flex items-center gap-3">
                <Info className="w-5 h-5" />
                Read More
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Stream */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-pulse" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default ProcessSection;