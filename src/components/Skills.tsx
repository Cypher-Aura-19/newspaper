import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Wrench, TestTube, TrendingUp, Award, Target, Cpu, Monitor } from 'lucide-react';

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
    // Only enable animations on desktop (screen width > 768px)
    if (window.innerWidth <= 768) return;
    
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
        { name: "Angular", experience: "1+ year", level: 70 },
        { name: "Vue.js", experience: "8+ months", level: 65 },
        { name: "SASS/SCSS", experience: "2+ years", level: 85 }
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
        { name: "Microservices", experience: "1+ year", level: 70 },
        { name: "FastAPI", experience: "8+ months", level: 70 },
        { name: "Django", experience: "1+ year", level: 75 }
      ]
    },
    {
      title: "DATABASE & CLOUD",
      icon: <Cpu className="w-6 h-6 animate-bounce" />,
      skills: [
        { name: "MongoDB", experience: "1.5+ years", level: 80 },
        { name: "MySQL", experience: "2+ years", level: 85 },
        { name: "PostgreSQL", experience: "1+ year", level: 75 },
        { name: "Redis", experience: "6+ months", level: 65 },
        { name: "Firebase", experience: "1+ year", level: 80 },
        { name: "AWS Services", experience: "8+ months", level: 70 },
        { name: "Google Cloud", experience: "6+ months", level: 65 }
      ]
    },
    {
      title: "TESTING & QA",
      icon: <Target className="w-6 h-6 animate-pulse" />,
      skills: [
        { name: "Black-box Testing", experience: "1.5+ years", level: 85 },
        { name: "White-box Testing", experience: "1.5+ years", level: 80 },
        { name: "Integration Testing", experience: "1+ year", level: 80 },
        { name: "Performance Testing", experience: "1+ year", level: 75 },
        { name: "SonarQube", experience: "1+ year", level: 75 },
        { name: "Cypress", experience: "1+ year", level: 70 },
        { name: "Jest", experience: "1+ year", level: 75 },
        { name: "Selenium", experience: "1+ year", level: 70 },
        { name: "Postman", experience: "2+ years", level: 85 }
      ]
    },
    {
      title: "UI/UX DESIGN",
      icon: <Award className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />,
      skills: [
        { name: "Figma", experience: "2+ years", level: 85 },
        { name: "Adobe XD", experience: "1.5+ years", level: 80 },
        { name: "Sketch", experience: "1+ year", level: 70 },
        { name: "Wireframing", experience: "2+ years", level: 85 },
        { name: "Prototyping", experience: "2+ years", level: 80 },
        { name: "User Research", experience: "1+ year", level: 75 },
        { name: "Design Systems", experience: "1.5+ years", level: 80 },
        { name: "Responsive Design", experience: "2+ years", level: 90 }
      ]
    },
    {
      title: "DEVOPS & TOOLS",
      icon: <Wrench className="w-6 h-6 animate-bounce" />,
      skills: [
        { name: "Git", experience: "2.5+ years", level: 90 },
        { name: "Docker", experience: "1+ year", level: 70 },
        { name: "CI/CD Pipelines", experience: "1+ year", level: 75 },
        { name: "GitHub Actions", experience: "1+ year", level: 75 },
        { name: "Jenkins", experience: "8+ months", level: 65 },
        { name: "Linux/Unix", experience: "2+ years", level: 80 },
        { name: "Nginx", experience: "1+ year", level: 70 },
        { name: "PM2", experience: "1+ year", level: 75 }
      ]
    }
  ];

  const designTools = ["Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Blender", "Canva", "InVision", "Principle", "Framer"];
  const softSkills = ["Problem Solving", "Team Collaboration", "Agile Development", "Project Management", "Technical Writing", "Code Review", "User Experience Research", "Cross-functional Communication"];
  const certifications = ["AWS Cloud Practitioner (In Progress)", "Google UX Design Certificate (Planned)", "Certified Scrum Master (Planned)", "ISTQB Foundation Level (Completed)"];

  return (
    <section ref={sectionRef} id="skills" className={`newspaper-section py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div ref={mastheadRef} className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          
          <div className={`text-xs uppercase tracking-widest mb-2 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Section E • Technical Expertise • Page 5 • {new Date().toLocaleDateString()}
          </div>
          <h2 className={`newspaper-headline text-5xl mb-4 transition-colors duration-300 ${
            isDark ? 'text-gray-100' : 'text-black'
          }`}>
            SKILLS & EXPERTISE
          </h2>
          <div className={`newspaper-subhead text-lg transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technical Proficiency & Professional Capabilities
          </div>
        </div>

        <div ref={skillsGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-card retro-border p-6 transition-colors duration-300 ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
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
                      <span className={`newspaper-body font-semibold transition-colors duration-300 ${
                        isDark ? 'text-gray-100' : 'text-black'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`newspaper-byline text-xs transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
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
          <div className={`additional-skill retro-border p-6 transition-colors duration-300 ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
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

          <div className={`additional-skill retro-border p-6 transition-colors duration-300 ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
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

          <div className={`additional-skill retro-border p-6 transition-colors duration-300 ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <div className="bg-black text-white p-4 mb-6 skills-flash">
              <div className="flex items-center justify-center gap-2">
                <TestTube className="w-4 h-4 animate-pulse" />
                <h3 className="newspaper-byline text-white text-center">CERTIFICATIONS</h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span key={index} className={`vintage-badge text-xs ${
                  index % 2 === 0 ? 'vintage-badge-dark' : ''
                }`}>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;