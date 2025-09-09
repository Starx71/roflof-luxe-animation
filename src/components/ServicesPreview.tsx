import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import servicesWorkspaceImage from '@/assets/services-workspace.jpg';

const ServicesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="roflof-section bg-cream">
      <div className="roflof-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <h2 className="text-section text-primary mb-8 leading-tight">
              Tomorrow should be <span className="text-gradient-gold">better than today</span>
            </h2>
            
            <div className="mb-8">
              <p className="text-lg text-primary/70 leading-relaxed">
                We are a team of strategists, designers, communicators, researchers. 
                Together, we believe that progress only happens when you refuse to play things safe.
              </p>
            </div>

            <div className={`mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <p className="text-lg text-primary/70 leading-relaxed">
                Our comprehensive approach combines market research, user experience design, 
                and cutting-edge technology to deliver spaces that don't just meet expectations—they exceed them.
              </p>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute -left-20 top-1/2 w-40 h-40 bg-gold/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute -left-32 top-1/4 w-24 h-24 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />

            <button className={`roflof-button group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <span className="flex items-center gap-3">
                Read More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Image Side */}
          <div className={`relative ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-luxury group">
              <img
                src={servicesWorkspaceImage}
                alt="Modern luxury office workspace with contemporary design"
                className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating design elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gold/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-8 h-8 bg-white rounded-full animate-pulse" />
              </div>
            </div>

            {/* Additional floating elements */}
            <div className={`absolute -top-8 -left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="w-6 h-6 bg-gold rounded-full animate-pulse" />
            </div>
            
            <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full shadow-lg flex items-center justify-center ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <div className="w-8 h-8 bg-gold rounded-full animate-sparkle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;