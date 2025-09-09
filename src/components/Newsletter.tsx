import React, { useState, useEffect, useRef } from 'react';
import { Mail, Check, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
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
    
    if (!email || !email.includes('@')) {
      // Shake animation for invalid email
      const input = document.getElementById('newsletter-email');
      if (input) {
        input.classList.add('animate-shake');
        setTimeout(() => input.classList.remove('animate-shake'), 500);
      }
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setShowConfetti(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setShowConfetti(false);
      }, 3000);
    }, 1500);
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
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gold rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold/10 rounded-full animate-pulse" />
      </div>

      <div className="roflof-container relative z-10">
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-6 animate-pulse-gold">
              <Mail className="w-10 h-10 text-gold" />
            </div>
            
            <h2 className="text-section text-primary mb-4">
              Subscribe to our <span className="text-gradient-gold">newsletter</span>
            </h2>
            
            <p className="text-lg text-primary/70 leading-relaxed">
              To make your stay special and even more memorable. Get exclusive design tips, 
              project insights, and early access to our latest innovations.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className={`${isVisible ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white/80 backdrop-blur-sm text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                  disabled={isLoading || isSuccess}
                />
                
                {/* Focus Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100">
                  <div className="absolute inset-0 rounded-xl shadow-gold" />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 min-w-[120px] ${
                  isSuccess 
                    ? 'bg-green-500 text-white' 
                    : 'roflof-button'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : isSuccess ? (
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    Subscribed!
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Subscribe
                  </div>
                )}
              </button>
            </div>
            
            {/* Terms */}
            <p className={`text-sm text-primary/60 mt-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </form>

          {/* Success Message */}
          {isSuccess && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg animate-scaleIn">
              <p className="text-green-700 font-medium">
                🎉 Welcome to the Roflof family! Check your inbox for a special welcome gift.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gold/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gold/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-gold/50 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Newsletter;