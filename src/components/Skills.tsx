import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Wrench, TestTube, Zap, TrendingUp, Award, Target, Cpu, Monitor } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const mastheadRef = useRef<HTMLDivElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const additionalSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Masthead - special skills edition announcement
      gsap.fromTo(mastheadRef.current,
        {
          opacity: 0,
          y: -100,
          rotationX: -90
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: mastheadRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills cards - breaking news cascade
      gsap.fromTo(".skill-card",
        {
          opacity: 0,
          scale: 0.3,
          rotation: 45
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.8,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Progress bars - news ticker filling effect
      gsap.fromTo(".vintage-progress-fill",
        { width: "0%" },
        {
          width: (i, target) => target.style.width,
          duration: 3,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Additional skills - urgent bulletin effect
      gsap.fromTo(".additional-skill",
        {
          opacity: 0,
          x: 200,
          rotationY: 90
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: additionalSkillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skill badges news ticker animation
      // Breaking news flash for headers
      gsap.to(".skills-flash", {
        opacity: 0.9,
        duration: 1.2,
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "FRONTEND DEVELOPMENT",
      icon: <Monitor className="w-6 h-6 animate-pulse" />,
      skills: [
        { name: "React.js", experience: "2+ years", level: 90 },
        { name: "Next.js", experience: "1.5+ years", level: 85 },
        { name: "Three.js", experience: "1+ year", level: 75 },
        { name: "TypeScript", experience: "1.5+ years", level: 85 },
        { name: "Tailwind CSS", experience: "2+ years", level: 90 },
        { name: "HTML/CSS", experience: "3+ years", level: 95 },
        { name: "JavaScript", experience: "2.5+ years", level: 90 },
        { name: "Angular", experience: "1+ year", level: 70 }
      ]
    },
    {
      title: "BACKEND DEVELOPMENT",
      icon: <Database className="w-6 h-6 animate-spin" style={{ animationDuration: '4s' }} />,
      skills: [
        { name: "Node.js", experience: "2+ years", level: 85 },
        { name: "Express.js", experience: "2+ years", level: 85 },
        { name: "Spring Boot", experience: "1+ year", level: 70 },
        { name: "REST APIs", experience: "2+ years", level: 85 },
        { name: "GraphQL", experience: "6+ months", level: 65 },
        { name: "Microservices", experience: "1+ year", level: 70 }
      ]
    },
    {
      title: "DATABASE & TOOLS",
      icon: <Cpu className="w-6 h-6 animate-bounce" />,
      skills: [
        { name: "MongoDB", experience: "1.5+ years", level: 80 },
        { name: "MySQL", experience: "2+ years", level: 85 },
        { name: "PostgreSQL", experience: "1+ year", level: 75 },
        { name: "Redis", experience: "6+ months", level: 65 },
        { name: "Git", experience: "2.5+ years", level: 90 },
        { name: "Docker", experience: "1+ year", level: 70 }
      ]
    },
    {
      title: "QUALITY ASSURANCE",
      icon: <Target className="w-6 h-6 animate-pulse" />,
      skills: [
        { name: "Black-box Testing", experience: "1.5+ years", level: 85 },
        { name: "White-box Testing", experience: "1.5+ years", level: 80 },
        { name: "SonarQube", experience: "1+ year", level: 75 },
        { name: "Cypress", experience: "1+ year", level: 70 },
        { name: "Jest", experience: "1+ year", level: 75 },
        { name: "Python Scripting", experience: "2+ years", level: 80 }
      ]
    }
  ];

  const designTools = ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Blender", "Canva"];
  const softSkills = ["Problem Solving", "Team Collaboration", "Agile Development", "Project Management", "Technical Writing", "Code Review"];

  return (
    <section ref={sectionRef} id="skills" className="newspaper-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={mastheadRef} className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          
          <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Section E • Technical Expertise • Page 5 • {new Date().toLocaleDateString()}
          </div>
          <h2 className="newspaper-headline text-5xl mb-4 text-black">
            SKILLS & EXPERTISE
          </h2>
          <div className="newspaper-subhead text-lg text-gray-600">
            Technical Proficiency & Professional Capabilities
          </div>
        </div>

        <div ref={skillsGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card retro-border p-6 bg-gray-50">
              <div className="bg-black text-white p-4 mb-6 skills-flash">
                <div className="flex items-center gap-3 justify-center">
                  {category.icon}
                  <h3 className="newspaper-byline text-white">{category.title}</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="newspaper-body font-semibold text-black">
                        {skill.name}
                      </span>
                      <span className="newspaper-byline text-xs text-gray-500">
                        {skill.experience}
                      </span>
                    </div>
                    <div className="vintage-progress">
                      <div 
                        className="vintage-progress-fill transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={additionalSkillsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="additional-skill retro-border p-6 bg-gray-50">
            <div className="bg-black text-white p-4 mb-6 skills-flash">
              <div className="flex items-center justify-center gap-2">
                <Award className="w-4 h-4 animate-bounce" />
                <h3 className="newspaper-byline text-white text-center">DESIGN TOOLS</h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool, index) => (
                <span key={index} className={`vintage-badge ${
                  index % 2 === 0 ? 'vintage-badge-dark' : ''
                }`}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="additional-skill retro-border p-6 bg-gray-50">
            <div className="bg-black text-white p-4 mb-6 skills-flash">
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4 animate-pulse" />
                <h3 className="newspaper-byline text-white text-center">SOFT SKILLS</h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className={`vintage-badge ${
                  index % 2 === 0 ? 'vintage-badge-dark' : ''
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="additional-skill retro-border p-6 bg-gray-50">
            <div className="bg-black text-white p-4 mb-6 skills-flash">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 animate-spin" />
                <h3 className="newspaper-byline text-white text-center">CURRENTLY LEARNING</h3>
              </div>
            </div>
            <ul className="newspaper-body space-y-2 text-gray-700">
              <li>• Advanced Three.js & WebGL</li>
              <li>• Machine Learning Basics</li>
              <li>• Cloud Technologies (AWS)</li>
              <li>• Advanced React Patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;