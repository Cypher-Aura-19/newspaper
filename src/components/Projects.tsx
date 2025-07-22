import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Calendar, Award, Newspaper, Rocket, Code, Lightbulb, Star, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const mastheadRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const futureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Masthead - special edition announcement effect
      gsap.fromTo(mastheadRef.current,
        {
          opacity: 0,
          scale: 0.3,
          rotation: 180
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 2.5,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: mastheadRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Projects - breaking news cascade effect
      gsap.fromTo(".project-card",
        {
          opacity: 0,
          x: -400,
          rotationY: 90,
          scale: 0.5
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Future projects - urgent bulletin effect
      gsap.fromTo(futureRef.current,
        {
          opacity: 0,
          y: 200,
          rotationX: -90
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 2.5,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: futureRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Project badges floating animation
      gsap.to(".project-badge", {
        y: -5,
        rotation: 2,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

      // Technology badges news ticker effect
      gsap.to(".tech-badge", {
        x: 2,
        duration: 1.8,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.1
      });

      // Breaking news flash for project headers
      gsap.to(".project-flash", {
        opacity: 0.8,
        duration: 1.5,
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Gamified 3D Platform for Teaching SQA",
      status: "In Development",
      type: "Final Year Project • 2025",
      description: "An innovative educational platform that revolutionizes Software Quality Assurance learning through interactive 3D models and gamified experiences.",
      features: [
        "Interactive 3D models built with Three.js and Blender",
        "Gamified learning modules with progress tracking",
        "Real-time collaboration features",
        "Comprehensive testing methodology coverage",
        "Automated assessment system"
      ],
      technologies: ["Next.js", "Three.js", "Blender", "TypeScript", "Node.js", "MongoDB"],
      impact: "Revolutionizing education through interactive 3D learning experiences"
    },
    {
      title: "Software Engineering Society Website",
      status: "Completed",
      type: "Department Contribution • 2024-2025",
      description: "Led the frontend development for the official department society website, creating a modern, responsive platform.",
      features: [
        "Responsive design optimized for all devices",
        "Event management and registration system",
        "Student portal with authentication",
        "News and announcements system",
        "Gallery and media management"
      ],
      technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      impact: "Enhanced student engagement and streamlined society operations"
    },
    {
      title: "E-Commerce Platform",
      status: "Completed",
      type: "Personal Project • 2024",
      description: "A full-stack e-commerce solution with modern UI/UX, secure payment integration, and comprehensive admin dashboard.",
      features: [
        "Product catalog with search and filtering",
        "Shopping cart and checkout system",
        "User authentication and profiles",
        "Admin dashboard for inventory management",
        "Order tracking and management"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Stripe API"],
      impact: "Demonstrated full-stack development capabilities"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="newspaper-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={mastheadRef} className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          
          <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Section D • Technical Portfolio • Page 4 • {new Date().toLocaleDateString()}
          </div>
          <h2 className="newspaper-headline text-5xl mb-4 text-black">
            PROJECT SHOWCASE
          </h2>
          <div className="newspaper-subhead text-lg text-gray-600">
            Portfolio of Technical Excellence & Innovation
          </div>
        </div>

        <div ref={projectsRef} className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="project-card retro-border p-8">
              <div className="bg-black text-white p-4 mb-6 project-flash">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 animate-pulse" />
                    <h3 className="newspaper-byline text-white">PROJECT SPOTLIGHT</h3>
                    <Star className="w-5 h-5 animate-spin" style={{ animationDuration: '4s' }} />
                  </div>
                  <div className="flex gap-2">
                    <button className="vintage-btn p-2 bg-white text-black border-2 border-white hover:bg-black hover:text-white">
                      <a href="https://github.com/Cypher-Aura-19" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </button>
                    <button className="vintage-btn p-2 bg-white text-black border-2 border-white hover:bg-black hover:text-white">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="newspaper-headline text-2xl text-black">
                      {project.title}
                    </h3>
                    <span className={`vintage-badge project-badge ${
                      project.status === 'In Development' ? 'vintage-badge-dark' : ''
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="newspaper-subhead mb-4 text-gray-600">
                    {project.type}
                  </p>

                  <p className="newspaper-body mb-6 text-gray-700">
                    {project.description}
                  </p>

                  <div className="newspaper-columns-2">
                    <div>
                      <h4 className="newspaper-byline mb-3 text-black">KEY FEATURES</h4>
                      <ul className="newspaper-body space-y-1 text-gray-700">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="newspaper-byline mb-3 text-black">PROJECT IMPACT</h4>
                      <p className="newspaper-body text-gray-700">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="retro-border p-6">
                    <div className="bg-black text-white p-4 mb-6 animate-pulse">
                      <div className="flex items-center justify-center gap-2">
                        <Code className="w-4 h-4 animate-bounce" />
                        <h4 className="newspaper-byline text-white text-center">TECHNOLOGIES</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.technologies.map((tech, idx) => (
                        <div key={idx} className={`vintage-badge tech-badge text-center ${
                          idx % 2 === 0 ? 'vintage-badge-dark' : ''
                        }`}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div ref={futureRef} className="mt-12 text-center retro-border p-8">
          <div className="bg-red-700 text-white p-4 mb-6 animate-pulse border-2 border-black">
            <div className="flex items-center justify-center gap-2">
              <Lightbulb className="w-5 h-5 animate-bounce" />
              <h3 className="newspaper-byline text-white text-center">FUTURE DEVELOPMENTS</h3>
              <Zap className="w-5 h-5 animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
          <h3 className="newspaper-headline text-3xl mb-4 text-black">
            MORE PROJECTS COMING SOON
          </h3>
          <p className="newspaper-body mb-6 text-gray-700">
            I'm constantly working on new projects and exploring emerging technologies. 
            Stay tuned for updates on my latest work!
          </p>
          <a 
            href="https://github.com/Cypher-Aura-19"
            target="_blank"
            rel="noopener noreferrer"
            className="vintage-btn-dark vintage-btn inline-block"
          >
            VIEW ALL ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;