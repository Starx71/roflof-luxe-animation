import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import aboutTeamImage from '@/assets/about-team.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [starRating, setStarRating] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counter
          let start = 0;
          const end = 64739;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCounter(end);
              clearInterval(timer);
            } else {
              setCounter(Math.floor(start));
            }
          }, 16);

          // Animate star rating
          let stars = 0;
          const starTimer = setInterval(() => {
            stars += 0.1;
            if (stars >= 4.8) {
              setStarRating(4.8);
              clearInterval(starTimer);
            } else {
              setStarRating(stars);
            }
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const profileImages = [
    'https://images.unsplash.com/photo-1494790108755-2616b612e29f?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
  ];

  return (
    <section ref={sectionRef} className="roflof-section bg-white" id="about">
      <div className="roflof-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-luxury group">
              <img
                src={aboutTeamImage}
                alt="Professional interior design team in consultation"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Stats Card */}
            <div className={`absolute -bottom-8 -right-8 bg-white rounded-xl shadow-luxury p-6 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {counter.toLocaleString()}
                </div>
                <div className="text-sm text-primary/60">
                  Satisfied Clients
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <h2 className="text-section text-primary mb-8 leading-tight">
              We are a team of <span className="text-gradient-gold">strategists</span>, designers, communicators, researchers.
            </h2>
            
            <p className="text-lg text-primary/70 mb-8 leading-relaxed">
              Together, We believe that progress only happens when you refuse to play things safe. 
              Our approach combines innovation with timeless design principles to create spaces that 
              inspire and transform.
            </p>

            {/* Star Rating */}
            <div className={`flex items-center gap-4 mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 transition-colors duration-300 ${
                      star <= Math.floor(starRating) ? 'text-gold' : 'text-gray-300'
                    }`}
                    fill={star <= Math.floor(starRating) ? 'currentColor' : 'none'}
                  />
                ))}
                <span className="ml-2 text-primary font-semibold">{starRating.toFixed(1)}/5</span>
              </div>
              
              {/* Profile Pictures */}
              <div className="flex -space-x-2">
                {profileImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Client ${index + 1}`}
                    className={`w-8 h-8 rounded-full border-2 border-white shadow-md ${
                      isVisible ? 'animate-scaleIn' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className={`roflof-button-secondary group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <span className="flex items-center gap-3">
                VIEW PROJECT
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;