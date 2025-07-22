import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, GraduationCap, Award, BookOpen, Trophy, Star, Zap, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EducationProps {
  isDark: boolean;
}

const Education: React.FC<EducationProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const mastheadRef = useRef<HTMLDivElement>(null);
  const educationCardRef = useRef<HTMLDivElement>(null);
  const courseworkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Masthead - academic achievement announcement
      gsap.fromTo(mastheadRef.current,
        {
          opacity: 0,
          scale: 0.2,
          rotation: 360
        },
        {
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 2.5,
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: mastheadRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Education card - academic bulletin effect
      gsap.fromTo(educationCardRef.current,
        {
          opacity: 0,
          y: 150,
          rotationX: -60
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: educationCardRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Coursework table - academic records reveal
      gsap.fromTo(courseworkRef.current,
        {
          opacity: 0,
          x: -300,
          skewX: 20
        },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: courseworkRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Table rows - academic achievement cascade
      gsap.fromTo(".course-row",
        {
          opacity: 0,
          x: -50,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.12,
          scrollTrigger: {
            trigger: courseworkRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CGPA counter with academic achievement effect
      gsap.fromTo(".cgpa-number",
        { textContent: "0.00" },
        {
          textContent: "3.06",
          duration: 3,
          ease: "power3.out",
          snap: { textContent: 0.01 },
          scrollTrigger: {
            trigger: educationCardRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Academic badges floating animation
      gsap.to(".education-badge", {
        y: -4,
        rotation: 1,
        duration: 2.2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.15
      });

      // Breaking academic news flash
      gsap.to(".academic-flash", {
        opacity: 0.85,
        duration: 1.3,
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const courses = [
    { name: "Software Quality Assurance", credits: 3, grade: "B+" },
    { name: "Web Development", credits: 3, grade: "A-" },
    { name: "Data Structures", credits: 4, grade: "B+" },
    { name: "Object-Oriented Programming", credits: 4, grade: "A" },
    { name: "Database Management Systems", credits: 3, grade: "B+" },
    { name: "Human-Computer Interaction", credits: 3, grade: "A-" },
    { name: "Software Engineering", credits: 4, grade: "B+" },
    { name: "Computer Networks", credits: 3, grade: "B" },
    { name: "Operating Systems", credits: 4, grade: "B+" },
    { name: "Algorithms", credits: 4, grade: "A-" }
  ];

  return (
    <section ref={sectionRef} id="education" className="newspaper-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={mastheadRef} className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          
          <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Section F • Academic Record • Page 6 • {new Date().toLocaleDateString()}
          </div>
          <h2 className="newspaper-headline text-5xl mb-4 text-black">
            EDUCATION
          </h2>
          <div className="newspaper-subhead text-lg text-gray-600">
            Academic Excellence & Scholarly Pursuits
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div ref={educationCardRef} className="retro-border p-8 mb-8">
            <div className="bg-black text-white p-4 mb-6 academic-flash">
              <div className="flex items-center gap-3 justify-center">
                <BookOpen className="w-6 h-6 animate-pulse" />
                <h3 className="newspaper-byline text-white">HIGHER EDUCATION</h3>
                <Trophy className="w-5 h-5 animate-bounce" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="newspaper-headline text-3xl mb-2 text-black">
                  Bachelor of Software Engineering
                </h3>
                <p className="newspaper-subhead text-xl mb-4 text-gray-600">
                  FAST National University of Computer & Emerging Sciences
                </p>
                
                <div className="flex items-center gap-6 mb-6 newspaper-byline text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2022 - 2025</span>
                  </div>
                </div>

                <div className="newspaper-columns-2">
                  <div>
                    <h4 className="newspaper-byline mb-3 text-black">ACADEMIC HIGHLIGHTS</h4>
                    <ul className="newspaper-body space-y-2 text-gray-700">
                      <li>• Excelled in Software Quality Assurance with B+ grade</li>
                      <li>• Strong performance in Web Development and OOP</li>
                      <li>• Active participation in department society</li>
                      <li>• Leading innovative final year project</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="newspaper-byline mb-3 text-black">EXTRACURRICULAR</h4>
                    <ul className="newspaper-body space-y-2 text-gray-700">
                      <li>• Software Engineering Society Member</li>
                      <li>• Web Development Team Lead</li>
                      <li>• Tech Workshop Organizer</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="retro-border p-6">
                  <div className="newspaper-byline mb-2 text-gray-500">
                    Final Year Student
                  </div>
                  <div className="newspaper-byline mb-2 text-gray-500">
                    Current CGPA
                  </div>
                  <div className="cgpa-number newspaper-headline text-5xl text-black">
                    3.06
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="retro-border p-6">
                <div className="bg-black text-white p-4 mb-6 academic-flash">
                  <div className="flex items-center gap-3 justify-center">
                    <Star className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
                    <h4 className="newspaper-byline text-white">FINAL YEAR PROJECT</h4>
                    <Zap className="w-4 h-4 animate-bounce" />
                  </div>
                </div>
                
                <h5 className="newspaper-headline text-xl mb-2 text-black">
                  Gamified 3D Platform for Teaching SQA
                </h5>
                <p className="newspaper-body mb-4 text-gray-700">
                  Developing an innovative educational platform that combines 3D visualization 
                  with gamification to teach Software Quality Assurance concepts.
                </p>
                <div className="flex gap-2">
                  {['Three.js', 'Next.js', 'Blender'].map((tech, index) => (
                    <span key={index} className="vintage-badge vintage-badge-dark education-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div ref={courseworkRef} className="retro-border p-6">
            <div className="bg-black text-white p-4 mb-6 academic-flash">
              <div className="flex items-center justify-center gap-2">
                <Target className="w-4 h-4 animate-pulse" />
                <h3 className="newspaper-byline text-white text-center">RELEVANT COURSEWORK</h3>
                <Award className="w-4 h-4 animate-bounce" />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="vintage-table">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className="course-row">
                      <td className="newspaper-body text-gray-700">
                        {course.name}
                      </td>
                      <td className="newspaper-body text-center text-gray-700">
                        {course.credits}
                      </td>
                      <td className={`newspaper-byline text-center ${
                        course.grade.startsWith('A') ? 'text-green-600' : 
                        course.grade.startsWith('B') ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        {course.grade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;