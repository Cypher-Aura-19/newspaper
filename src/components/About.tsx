import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    const ctx = gsap.context(() => {
      // Masthead animation
      gsap.fromTo(mastheadRef.current, 
        { 
          opacity: 0, 
          y: -50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mastheadRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Main article slide in from left
      gsap.fromTo(mainArticleRef.current,
        {
          opacity: 0,
          x: -100,
          rotationY: -15
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: mainArticleRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Sidebar slide in from right with stagger
      gsap.fromTo(sidebarRef.current?.children || [],
        {
          opacity: 0,
          x: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Philosophy section with typewriter effect
      gsap.fromTo(philosophyRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for ornament
      gsap.to(".ornament", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="newspaper-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Newspaper Section Header */}
        <div ref={mastheadRef} className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          
          <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Section B • Personal Profile • Page 2 • {new Date().toLocaleDateString()}
          </div>
          <h2 className="newspaper-headline text-5xl mb-4 text-black">
            ABOUT THE ENGINEER
          </h2>
          <div className="newspaper-subhead text-lg text-gray-600">
            An In-Depth Look at the Mind Behind the Code
          </div>
        </div>

        {/* Newspaper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Article */}
          <div className="lg:col-span-8">
            <div ref={mainArticleRef} className="retro-border p-8">
    <div className="bg-black text-white p-4 mb-6">
      <div className="flex items-center justify-between">
        <h3 className="newspaper-byline text-white">FEATURE STORY</h3>
        <div className="text-xs text-gray-300">
          Continued from Page 1
        </div>
      </div>
    </div>
              
              <h3 className="newspaper-headline text-3xl mb-4 text-black">
                THE MAKING OF A SOFTWARE ENGINEER
              </h3>
              
              <div className="newspaper-byline mb-4 text-gray-500">
                Special Correspondent • Technology Bureau • {new Date().toLocaleDateString()}
              </div>

              <div className="newspaper-columns-2">
                <p className="drop-cap newspaper-body mb-4 text-gray-700">
                  The journey of a passionate software engineering student began with curiosity 
                  about how digital experiences are crafted. What started as simple wonder has 
                  evolved into deep expertise in modern web technologies, marking the rise of 
                  a promising talent in the tech industry.
                </p>
                
                <p className="newspaper-body mb-4 text-gray-700">
                  Currently serving as a Frontend Developer at Galvan AI while completing his 
                  final year at FAST NUCES, this young professional has demonstrated remarkable 
                  ability to balance academic excellence with real-world application. His 
                  specialization in creating responsive, user-friendly applications using 
                  cutting-edge technologies like React, Next.js, and Three.js sets him apart 
                  in a competitive field.
                </p>

                <p className="newspaper-body mb-4 text-gray-700">
                  His final year project represents a significant contribution to educational 
                  technology, focusing on revolutionizing education through gamified 3D platforms. 
                  This innovative approach combines technical skills with a passion for creating 
                  meaningful learning experiences.
                </p>

                <p className="newspaper-body text-gray-700">
                  "I believe in creating intuitive user experiences that solve real-world problems," 
                  he explains. "My goal is to bridge the gap between design and functionality 
                  while continuously learning and staying updated with the latest technologies."
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div ref={sidebarRef} className="lg:col-span-4">
            <div className="retro-border p-6 mb-6 bg-gray-50">
              <div className="bg-black text-white p-4 mb-6">
                <h3 className="newspaper-byline text-white text-center">WHAT DRIVES HIM</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="newspaper-headline text-3xl text-black">1</span>
                  <p className="newspaper-body text-gray-700">
                    Creating intuitive user experiences that solve real-world problems
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="newspaper-headline text-3xl text-black">2</span>
                  <p className="newspaper-body text-gray-700">
                    Bridging the gap between design and functionality
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="newspaper-headline text-3xl text-black">3</span>
                  <p className="newspaper-body text-gray-700">
                    Continuous learning and staying updated with latest technologies
                  </p>
                </div>
              </div>
            </div>

            <div className="retro-border p-6 mb-6 bg-gray-50">
              <div className="bg-black text-white p-4 mb-6">
                <h3 className="newspaper-byline text-white text-center">INTERESTS & RESEARCH</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
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
            <div className="retro-border p-6 bg-gray-50">
              <div className="bg-black text-white p-4 mb-6">
                <h3 className="newspaper-byline text-white text-center">BY THE NUMBERS</h3>
              </div>
              <div className="space-y-3 text-center">
                <div>
                  <div className="newspaper-headline text-2xl text-black">3+</div>
                  <div className="text-xs text-gray-500">Years Coding</div>
                </div>
                <div>
                  <div className="newspaper-headline text-2xl text-black">10+</div>
                  <div className="text-xs text-gray-500">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={philosophyRef} className="mt-12 retro-border p-8">
          <div className="bg-black text-white p-4 mb-6">
            <h3 className="newspaper-byline text-white text-center">PHILOSOPHY</h3>
          </div>
          
          <blockquote className="newspaper-body text-xl italic text-center text-gray-700">
            "Code is not just about solving problems—it's about creating experiences that make people's 
            lives better. Every line of code should serve a purpose, every interface should tell a story."
          </blockquote>
          
          <div className="text-center mt-4 text-gray-500">
            <div className="newspaper-byline text-sm">- Talha Rizwan, Software Engineer</div>
          </div>
          
          <div className="ornament mt-6">❦</div>
        </div>
      </div>
    </section>
  );
};

export default About;