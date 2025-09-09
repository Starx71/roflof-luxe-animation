import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, MessageCircle, Target } from 'lucide-react';

const ServicesMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const services = [
    {
      icon: Users,
      title: "Collaborative & partnership",
      subtitle: "Office of multiple interest content",
      description: "Building strategic partnerships with our clients for long-term success and innovation in interior design.",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "We talk about our weight",
      subtitle: "The hanger US Air Force digital experimental",
      description: "Comprehensive communication strategies that ensure every project detail is transparent and accessible.",
      color: "bg-green-500"
    },
    {
      icon: Target,
      title: "Piloting digital confidence",
      subtitle: "Delta faucet content, social, digital",
      description: "Leading the industry with cutting-edge digital tools and technologies for superior design outcomes.",
      color: "bg-purple-500",
      hasProfile: true
    }
  ];

  return (
    <section ref={sectionRef} className="roflof-section bg-cream" id="services">
      <div className="roflof-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-section text-primary mb-4">
            What we can <span className="text-gradient-gold">offer you!</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Services Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group cursor-pointer transition-all duration-500 ${
                isVisible ? 'animate-slideInLeft' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                background: hoveredCard === index 
                  ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 255, 255, 0.9))'
                  : 'white'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-primary/60 mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-primary/70 text-sm max-w-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Profile Image for last service */}
                  {service.hasProfile && (
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face"
                        alt="Team member"
                        className="w-14 h-14 rounded-full border-3 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                  )}

                  {/* Arrow */}
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                    <ArrowRight 
                      className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-gold" />
              </div>

              {/* 3D Tilt Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), transparent)',
                  transform: hoveredCard === index ? 'rotateY(2deg) rotateX(1deg)' : 'none',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          ))}
        </div>

        {/* Background Animation Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gold/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default ServicesMenu;