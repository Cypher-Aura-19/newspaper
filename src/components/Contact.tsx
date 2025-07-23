import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Github, Linkedin, Send, CheckCircle, Radio, Megaphone, Clock, AlertCircle, Zap } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [state, handleSubmit] = useForm("mrblelvy");

  useEffect(() => {
    // Only enable animations on desktop (screen width > 768px)
    if (window.innerWidth <= 768) return;
    
    const ctx = gsap.context(() => {
      // Simple fade-in animations for desktop only
      gsap.fromTo(".contact-section",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  if (state.succeeded) {
    return (
      <section id="contact" className="newspaper-section py-20 bg-white contact-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 masthead relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
            <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
            <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
            
            <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
              Section G • Contact Information • Page 7 • {new Date().toLocaleDateString()}
            </div>
            <h2 className="newspaper-headline text-5xl mb-4 text-black">
              GET IN TOUCH
            </h2>
            <div className="newspaper-subhead text-lg text-gray-600">
              Ready to Collaborate? Let's Create Something Amazing
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="retro-border p-12 bg-gray-50">
              <div className="bg-green-700 text-white p-4 mb-6 animate-pulse border-2 border-black">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-8 h-8 text-white animate-bounce" />
                  <h3 className="newspaper-byline text-white">MESSAGE DELIVERED</h3>
                  <Radio className="w-6 h-6 animate-pulse" />
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="newspaper-headline text-4xl mb-6 text-black">
                  CORRESPONDENCE RECEIVED
                </h2>
                <p className="newspaper-body text-lg mb-8 text-gray-700">
                  Your message has been successfully transmitted to our editorial desk. 
                  We shall respond to your inquiry within 24 hours during business days.
                </p>
                
                <div className="ornament mb-8">❦</div>
                
                <div className="space-y-4">
                  <p className="newspaper-byline text-gray-500">
                    EXPECTED RESPONSE TIME: 24 HOURS
                  </p>
                  <p className="newspaper-body text-gray-700">
                    Thank you for your interest in collaboration. We look forward to discussing 
                    your project requirements and exploring potential opportunities.
                  </p>
                </div>
                
                <button 
                  onClick={() => window.location.reload()}
                  className="vintage-btn-dark vintage-btn mt-8"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="newspaper-section py-20 bg-white contact-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          
          <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Section G • Contact Information • Page 7 • {new Date().toLocaleDateString()}
          </div>
          <h2 className="newspaper-headline text-5xl mb-4 text-black">
            GET IN TOUCH
          </h2>
          <div className="newspaper-subhead text-lg text-gray-600">
            Ready to Collaborate? Let's Create Something Amazing
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="retro-border p-8 mb-8 bg-gray-50">
              <div className="bg-black text-white p-4 mb-6 animate-pulse">
                <div className="flex items-center justify-center gap-2">
                  <Radio className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                  <h3 className="newspaper-byline text-white text-center">CONTACT INFORMATION</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="retro-border p-3 bg-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="newspaper-byline text-black">TELEPHONE</h4>
                    <p className="newspaper-body text-gray-700">+92 334 0500725</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="retro-border p-3 bg-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="newspaper-byline text-black">ELECTRONIC MAIL</h4>
                    <p className="newspaper-body text-gray-700">work.talharizwan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="retro-border p-3 bg-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="newspaper-byline text-black">POSTAL ADDRESS</h4>
                    <p className="newspaper-body text-gray-700">
                      House No: B-141, Main street, Sector 1,<br />
                      Khayaban e sir syed, Islamabad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="retro-border p-6 mb-8 bg-gray-50">
              <div className="bg-black text-white p-4 mb-6 animate-pulse">
                <div className="flex items-center justify-center gap-2">
                  <Megaphone className="w-4 h-4 animate-bounce" />
                  <h4 className="newspaper-byline text-white text-center">PROFESSIONAL NETWORKS</h4>
                </div>
              </div>
              
              <div className="space-y-3">
                <a 
                  href="https://github.com/Cypher-Aura-19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vintage-btn w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5" />
                    <div>
                      <div className="newspaper-byline text-left text-black">GitHub</div>
                      <div className="newspaper-body text-xs text-left text-gray-600">
                        View code repositories
                      </div>
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/talha-rizwan-986552371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vintage-btn w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <div>
                      <div className="newspaper-byline text-left text-black">LinkedIn</div>
                      <div className="newspaper-body text-xs text-left text-gray-600">
                        Professional networking
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="retro-border p-6 bg-gray-50">
              <div className="bg-green-700 text-white p-4 mb-6 animate-pulse border-2 border-black">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 animate-spin" />
                  <h4 className="newspaper-byline text-white text-center">AVAILABILITY STATUS</h4>
                  <AlertCircle className="w-4 h-4 animate-bounce" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="vintage-badge vintage-badge-dark">Available for New Opportunities</div>
                <p className="newspaper-body text-sm text-gray-700">
                  Currently seeking full-time positions starting June 2025
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="retro-border p-8 bg-gray-50">
              <div className="bg-black text-white p-4 mb-6 animate-pulse">
                <div className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4 animate-bounce" />
                  <h3 className="newspaper-byline text-white text-center">SEND CORRESPONDENCE</h3>
                  <Zap className="w-4 h-4 animate-pulse" />
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block newspaper-byline mb-2 text-black">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your complete name"
                    className="w-full vintage-input bg-white text-black"
                    required
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block newspaper-byline mb-2 text-black">
                    ELECTRONIC MAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.address@domain.com"
                    className="w-full vintage-input bg-white text-black"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block newspaper-byline mb-2 text-black">
                    SUBJECT MATTER *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Brief description of inquiry"
                    className="w-full vintage-input bg-white text-black"
                    required
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block newspaper-byline mb-2 text-black">
                    DETAILED MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Please elaborate on your project requirements or opportunity details..."
                    rows={6}
                    className="w-full vintage-input resize-none bg-white text-black"
                    required
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full vintage-btn-dark vintage-btn flex items-center justify-center gap-2 ${
                    state.submitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="w-5 h-5" />
                  {state.submitting ? 'DISPATCHING...' : 'DISPATCH MESSAGE'}
                </button>
                
                {state.errors && state.errors.length > 0 && (
                  <div className="text-red-600 text-sm">
                    Please check the form for errors and try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;