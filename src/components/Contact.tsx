import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', message: '', projectType: '' });
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef} 
      className="roflof-section relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--cream-bg)), hsl(51 100% 90%))',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 12s ease-in-out infinite'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold/10 rounded-full animate-pulse" />
      </div>

      <div className="roflof-container relative z-10">
        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-6 animate-pulse-gold">
              <MessageSquare className="w-10 h-10 text-gold" />
            </div>
            
            <h2 className="text-section text-primary mb-4">
              Let's create your <span className="text-gradient-gold">dream space</span>
            </h2>
            
            <p className="text-lg text-primary/70 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your space? Get in touch with our expert interior designers 
              and let's bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-primary mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Email Us</p>
                    <a href="mailto:hello@roflof.com" className="text-primary/70 hover:text-gold transition-colors">
                      hello@roflof.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Call Us</p>
                    <a href="tel:+13124568963" className="text-primary/70 hover:text-gold transition-colors">
                      (312) 456-8963
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Visit Our Studio</p>
                    <p className="text-primary/70">
                      Harlow Parker Inh. STE 30<br />
                      Chicago, IL 60607
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Business Hours</p>
                    <p className="text-primary/70">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Note */}
              <div className="mt-8 p-6 bg-white/60 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold text-primary mb-2">Our Services Include:</h4>
                <ul className="text-primary/70 space-y-1">
                  <li>• Residential Interior Design</li>
                  <li>• Commercial Space Planning</li>
                  <li>• Kitchen & Bathroom Renovations</li>
                  <li>• Custom Furniture Design</li>
                  <li>• Color Consultation</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-primary mb-6">Start Your Project</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-transparent bg-white/90 text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                        placeholder="Enter your full name"
                        disabled={isLoading || isSuccess}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-transparent bg-white/90 text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                        placeholder="Enter your email"
                        disabled={isLoading || isSuccess}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/40" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-transparent bg-white/90 text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                        placeholder="Enter your phone number"
                        disabled={isLoading || isSuccess}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-primary mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-transparent bg-white/90 text-primary focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                      disabled={isLoading || isSuccess}
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-transparent bg-white/90 text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, timeline, and budget..."
                      disabled={isLoading || isSuccess}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading || isSuccess}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      isSuccess 
                        ? 'bg-green-500 text-white' 
                        : 'roflof-button'
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : isSuccess ? (
                      <div className="flex items-center justify-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Message Sent!
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>

                {/* Success Message */}
                {isSuccess && (
                  <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg animate-scaleIn">
                    <p className="text-green-700 font-medium">
                      🎉 Thank you for your interest! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gold/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gold/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-gold/50 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Contact;