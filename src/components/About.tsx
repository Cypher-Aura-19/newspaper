import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Users, Target, Lightbulb, Award, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const mastheadRef = useRef<HTMLDivElement>(null);
  const mainArticleRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable animations on desktop (screen width > 768px)
    if (window.innerWidth <= 768) return;
    
    const ctx = gsap.context(() => {
      // Masthead animation - newspaper printing effect
      gsap.fromTo(mastheadRef.current, 
        { 
          opacity: 0, 
          scaleY: 0,
          transformOrigin: "top center"
        },
        {
          opacity: 1,
          scaleY: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: mastheadRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Main article - typewriter/printing press effect
      gsap.fromTo(mainArticleRef.current,
        {
          opacity: 0,
          x: -200,
          skewX: 10
        },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainArticleRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Sidebar - news ticker effect with stagger
      gsap.fromTo(sidebarRef.current?.children || [],
        {
          opacity: 0,
          x: 150,
          rotationY: 45
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.6)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Philosophy section - breaking news alert effect
      gsap.fromTo(philosophyRef.current,
        {
          opacity: 0,
          scale: 0.3,
          rotation: -5
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 2,
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Newspaper elements floating animation
      // Breaking news ticker effect
      gsap.to(".news-ticker", {
        x: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className={`newspaper-section py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newspaper Section Header */}
        <div ref={mastheadRef} className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-1 left-6 right-6 h-px bg-gray-400"></div>
          <div className="absolute bottom-1 left-6 right-6 h-px bg-gray-400"></div>
          
          <div className={`text-xs sm:text-sm uppercase tracking-widest mb-2 px-2 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span className="hidden sm:inline">Section B • Personal Profile • Page 2 • </span>
            {new Date().toLocaleDateString()}
          </div>
          <h2 className={`newspaper-headline text-3xl sm:text-4xl lg:text-5xl mb-4 px-2 transition-colors duration-300 ${
            isDark ? 'text-gray-100' : 'text-black'
          }`}>
            ABOUT THE ENGINEER
          </h2>
          <div className={`newspaper-subhead text-base sm:text-lg px-2 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            An In-Depth Look at the Mind Behind the Code
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-black"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-black"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-black"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-black"></div>
        </div>

        {/* Newspaper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Main Article */}
          <div className="lg:col-span-8 order-1">
            <div ref={mainArticleRef} className={`retro-border p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="bg-black text-white p-4 mb-6 border-2 border-gray-400 news-ticker">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 animate-pulse" />
                    <h3 className="newspaper-byline text-white text-sm sm:text-base">FEATURE STORY</h3>
                  </div>
                  <div className="text-xs text-gray-300 hidden sm:block">
                    Continued from Page 1
                  </div>
                </div>
              </div>
              
              <h3 className={`newspaper-headline text-xl sm:text-2xl lg:text-3xl mb-4 transition-colors duration-300 ${
                isDark ? 'text-gray-100' : 'text-black'
              }`}>
                THE MAKING OF A SOFTWARE ENGINEER
              </h3>
              
              <div className={`newspaper-byline mb-4 text-xs sm:text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Special Correspondent • Technology Bureau • {new Date().toLocaleDateString()}
              </div>

              <div className="hidden sm:block newspaper-columns-2">
                <p className={`drop-cap newspaper-body mb-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  The journey of a passionate software engineering student began with curiosity 
                  about how digital experiences are crafted. What started as simple wonder has 
                  evolved into deep expertise in modern web technologies, marking the rise of 
                  a promising talent in the tech industry.
                </p>
                
                <p className={`newspaper-body mb-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Currently serving as a Frontend Developer at Galvan AI while completing his 
                  final year at FAST NUCES, this young professional has demonstrated remarkable 
                  ability to balance academic excellence with real-world application. His 
                  specialization in creating responsive, user-friendly applications using 
                  cutting-edge technologies like React, Next.js, and Three.js sets him apart 
                  in a competitive field.
                </p>

                <p className={`newspaper-body mb-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  His final year project represents a significant contribution to educational 
                  technology, focusing on revolutionizing education through gamified 3D platforms. 
                  This innovative approach combines technical skills with a passion for creating 
                  meaningful learning experiences.
                </p>

                <p className={`newspaper-body transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "I believe in creating intuitive user experiences that solve real-world problems," 
                  he explains. "My goal is to bridge the gap between design and functionality 
                  while continuously learning and staying updated with the latest technologies."
                </p>
              </div>
              
              {/* Mobile single column version */}
              <div className="block sm:hidden space-y-4">
                <p className={`drop-cap newspaper-body transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  The journey of a passionate software engineering student began with curiosity 
                  about how digital experiences are crafted.
                </p>
                
                <p className={`newspaper-body transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Currently serving as a Frontend Developer at Galvan AI while completing his 
                  final year at FAST NUCES, this young professional has demonstrated remarkable 
                  ability to balance academic excellence with real-world application.
                </p>

                <p className={`newspaper-body italic transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "I believe in creating intuitive user experiences that solve real-world problems."
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div ref={sidebarRef} className="lg:col-span-4 order-2 space-y-4 sm:space-y-6">
            <div className={`retro-border p-4 sm:p-6 transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="bg-black text-white p-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Target className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
                  <h3 className="newspaper-byline text-white text-center text-sm sm:text-base">WHAT DRIVES HIM</h3>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-4">
                  <span className={`newspaper-headline text-2xl sm:text-3xl px-2 py-1 border-2 transition-colors duration-300 ${
                    isDark 
                      ? 'text-gray-100 bg-gray-700 border-gray-300' 
                      : 'text-black bg-gray-100 border-black'
                  }`}>1</span>
                  <p className={`newspaper-body text-sm sm:text-base transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Creating intuitive user experiences that solve real-world problems
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-4">
                  <span className={`newspaper-headline text-2xl sm:text-3xl px-2 py-1 border-2 transition-colors duration-300 ${
                    isDark 
                      ? 'text-gray-100 bg-gray-700 border-gray-300' 
                      : 'text-black bg-gray-100 border-black'
                  }`}>2</span>
                  <p className={`newspaper-body text-sm sm:text-base transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Bridging the gap between design and functionality
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-4">
                  <span className={`newspaper-headline text-2xl sm:text-3xl px-2 py-1 border-2 transition-colors duration-300 ${
                    isDark 
                      ? 'text-gray-100 bg-gray-700 border-gray-300' 
                      : 'text-black bg-gray-100 border-black'
                  }`}>3</span>
                  <p className={`newspaper-body text-sm sm:text-base transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Continuous learning and staying updated with latest technologies
                  </p>
                </div>
              </div>
            </div>

            <div className={`retro-border p-4 sm:p-6 transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="bg-black text-white p-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Lightbulb className="w-4 h-4 animate-bounce" />
                  <h3 className="newspaper-byline text-white text-center text-sm sm:text-base">INTERESTS & RESEARCH</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '3D Web Development',
                  'Gamified Learning',
                  'Software Quality Assurance',
                  'Full-Stack Development',
                  'UI/UX Design',
                  'Database Optimization'
                ].map((interest, index) => (
                  <div key={index} className={`vintage-badge text-center ${
                    index % 2 === 0 ? 'vintage-badge-dark' : ''
                  }`}>
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`retro-border p-4 sm:p-6 transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="bg-black text-white p-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4 animate-pulse" />
                  <h3 className="newspaper-byline text-white text-center text-sm sm:text-base">BY THE NUMBERS</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className={`newspaper-headline text-xl sm:text-2xl p-2 border-2 transition-colors duration-300 ${
                    isDark 
                      ? 'text-gray-100 bg-gray-700 border-gray-300' 
                      : 'text-black bg-gray-100 border-black'
                  }`}>3+</div>
                  <div className={`text-xs transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>Years Coding</div>
                </div>
                <div>
                  <div className={`newspaper-headline text-xl sm:text-2xl p-2 border-2 transition-colors duration-300 ${
                    isDark 
                      ? 'text-gray-100 bg-gray-700 border-gray-300' 
                      : 'text-black bg-gray-100 border-black'
                  }`}>10+</div>
                  <div className={`text-xs transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={philosophyRef} className={`mt-8 sm:mt-12 retro-border p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="bg-black text-white p-4 mb-6 animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 animate-bounce" />
              <h3 className="newspaper-byline text-white text-center text-sm sm:text-base">PHILOSOPHY</h3>
              <Award className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
          
          <blockquote className={`newspaper-body text-lg sm:text-xl italic text-center px-2 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            "Code is not just about solving problems—it's about creating experiences that make people's 
            lives better. Every line of code should serve a purpose, every interface should tell a story."
          </blockquote>
          
          <div className={`text-center mt-4 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <div className={`newspaper-byline text-xs sm:text-sm border-t-2 pt-2 transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-black'
            }`}>- Talha Rizwan, Software Engineer</div>
          </div>
          
          <div className="ornament newspaper-float mt-4 sm:mt-6 text-2xl sm:text-3xl">❦</div>
        </div>
      </div>
    </section>
  );
};

export default About;