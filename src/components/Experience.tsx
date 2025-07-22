import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const mastheadRef = useRef<HTMLDivElement>(null);
  const currentJobRef = useRef<HTMLDivElement>(null);
  const opportunitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Masthead slide down with bounce
      gsap.fromTo(mastheadRef.current,
        {
          opacity: 0,
          y: -80,
          rotationX: -90
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.4,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: mastheadRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Current job card with 3D flip effect
      gsap.fromTo(currentJobRef.current,
        {
          opacity: 0,
          rotationY: -180,
          scale: 0.5
        },
        {
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: currentJobRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Opportunities section with elastic entrance
      gsap.fromTo(opportunitiesRef.current,
        {
          opacity: 0,
          scale: 0.3,
          rotation: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.8,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: opportunitiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating badges animation
      gsap.to(".vintage-badge", {
        y: -5,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="newspaper-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={mastheadRef} className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          
          <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Section C • Professional Record • Page 3 • {new Date().toLocaleDateString()}
          </div>
          <h2 className="newspaper-headline text-5xl mb-4 text-black">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="newspaper-subhead text-lg text-gray-600">
            Career Journey & Professional Achievements
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div ref={currentJobRef} className="retro-border p-8 mb-8">
            <div className="bg-black text-white p-4 mb-6">
              <div className="flex items-center gap-3 justify-center">
                <Briefcase className="w-6 h-6" />
                <h3 className="newspaper-byline text-white">CURRENT POSITION</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="newspaper-headline text-3xl mb-2 text-black">
                  Frontend Web Developer
                </h3>
                <p className="newspaper-subhead text-xl mb-4 text-gray-600">
                  Galvan AI, Innovista Rawal
                </p>
                
                <div className="flex items-center gap-6 mb-6 newspaper-byline text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Mar 2025 – Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                </div>

                <div className="newspaper-columns-2">
                  <div>
                    <h4 className="newspaper-byline mb-3 text-black">KEY RESPONSIBILITIES</h4>
                    <ul className="newspaper-body space-y-2 text-gray-700">
                      <li>• Building responsive UIs using Next.js, React.js, and Tailwind CSS</li>
                      <li>• Integrating frontend with REST APIs for dynamic content</li>
                      <li>• Enhancing UX with reusable components and clean layouts</li>
                      <li>• Collaborating in agile sprints and feature planning</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="newspaper-byline mb-3 text-black">ACHIEVEMENTS</h4>
                    <ul className="newspaper-body space-y-2 text-gray-700">
                      <li>• Improved application performance by 30%</li>
                      <li>• Implemented responsive design across all platforms</li>
                      <li>• Contributed to agile development processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="retro-border p-6 bg-white">
                  <div className="bg-black text-white p-4 mb-6">
                    <h4 className="newspaper-byline text-white text-center">TECHNOLOGIES</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'REST APIs', 'Git'].map((tech, index) => (
                      <div key={index} className={`vintage-badge text-center ${
                        index % 2 === 0 ? 'vintage-badge-dark' : ''
                      }`}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={opportunitiesRef} className="mt-8 retro-border p-8">
            <div className="bg-black text-white p-4 mb-6">
              <h3 className="newspaper-byline text-white text-center">SEEKING NEW OPPORTUNITIES</h3>
            </div>
            
            <div className="text-center">
              <h4 className="newspaper-headline text-2xl mb-4 text-black">
                OPEN FOR FULL-TIME POSITIONS
              </h4>
              <p className="newspaper-body mb-6 text-gray-700">
                Available for full-time positions in software development, particularly in frontend, 
                full-stack, or 3D web development roles starting June 2025.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['Full-Stack Development', 'Frontend Specialist', '3D Web Development', 'React/Next.js Expert'].map((role, index) => (
                  <span key={index} className="vintage-badge vintage-badge-dark">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;