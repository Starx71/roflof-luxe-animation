import React, { useEffect, useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particle trail
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setParticles(prev => [...prev.slice(-5), newParticle]);
    };

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Clean up old particles
  useEffect(() => {
    const timer = setInterval(() => {
      setParticles(prev => prev.slice(-3));
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--cream-bg)), hsl(51 100% 85%))',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 10s ease-in-out infinite'
      }}
    >
      {/* Particle Trail */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-trail"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
          }}
        />
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gold/20 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gold/30 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute bottom-32 left-32 w-20 h-20 rounded-full bg-gold/25 animate-float"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Geometric Lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-pulse" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-pulse" />
      </div>

      <div className="roflof-container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-hero text-primary mb-6 animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-gold mx-auto inline-block">
              Explore design — inspire your next interior model
            </h1>
          </div>

          {/* Decorative Star */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <Star 
                className="w-16 h-16 text-gold animate-sparkle" 
                fill="currentColor"
              />
              <div className="absolute inset-0 w-16 h-16 text-gold/30 animate-pulse">
                <Star className="w-full h-full" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <button className="roflof-button group">
              <span className="flex items-center gap-3">
                View Our Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-primary/70 mt-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp">
            Premium interior design services for luxury homes and commercial spaces
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;