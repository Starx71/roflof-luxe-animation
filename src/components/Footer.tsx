import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Linkedin, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
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

  const footerColumns = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "#home" },
        { name: "Studio", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Blog", href: "#blog" }
      ]
    },
    {
      title: "Terms & Policies",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms", href: "#terms" },
        { name: "Cookies", href: "#cookies" },
        { name: "Accessibility", href: "#accessibility" }
      ]
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", href: "#", icon: Instagram },
        { name: "LinkedIn", href: "#", icon: Linkedin },
        { name: "YouTube", href: "#", icon: Youtube },
        { name: "Twitter", href: "#", icon: Twitter }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Harlow Parker Inh. STE 30\nChicago, IL 60607"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(312) 456-8963"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@example.com"
    }
  ];

  return (
    <footer ref={sectionRef} className="bg-primary text-white relative overflow-hidden" id="contact">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-white/20 h-full" />
          ))}
        </div>
      </div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="roflof-container relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Columns */}
            {footerColumns.map((column, columnIndex) => (
              <div 
                key={column.title}
                className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
                style={{ animationDelay: `${columnIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gold">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`group flex items-center gap-3 text-white/80 hover:text-gold transition-all duration-300 ${
                          isVisible ? 'animate-fadeInUp' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${columnIndex * 0.2 + linkIndex * 0.1}s` }}
                      >
                        {link.icon && (
                          <link.icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                        )}
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Information */}
            <div 
              className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gold">
                Contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className={`group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                        <info.icon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gold mb-1">
                          {info.label}
                        </div>
                        <div className="text-white/80 whitespace-pre-line group-hover:text-white transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
              <p className="text-white/60 text-sm">
                © turridesign24 - All rights reserved
              </p>
            </div>
            
            <div className={`flex items-center gap-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-white/60 text-sm">Crafted with passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gold/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
    </footer>
  );
};

export default Footer;