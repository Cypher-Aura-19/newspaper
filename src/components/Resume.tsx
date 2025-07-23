import React, { useRef } from 'react';
import { Download, FileText, Calendar, MapPin, Phone, Mail, Github, Linkedin, Award, Briefcase, GraduationCap, Code, Target, Star, Newspaper, AlertTriangle } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResumeProps {
  isDark: boolean;
}

const Resume: React.FC<ResumeProps> = ({ isDark }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      // Create canvas from the resume content
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: resumeRef.current.scrollWidth,
        height: resumeRef.current.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      // Download the PDF
      pdf.save('Talha_Rizwan_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <section id="resume" className="newspaper-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          
          <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Section H • Professional Document • Page 8 • {new Date().toLocaleDateString()}
          </div>
          <h2 className="newspaper-headline text-3xl sm:text-4xl lg:text-5xl mb-4 text-black">
            CURRICULUM VITAE
          </h2>
          <div className="newspaper-subhead text-base sm:text-lg text-gray-600">
            Professional Resume & Career Summary
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mb-8">
          <button
            onClick={downloadPDF}
            className="vintage-btn-dark vintage-btn inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            DOWNLOAD RESUME
          </button>
        </div>

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto">
          <div ref={resumeRef} className="retro-border p-6 sm:p-8 lg:p-12 bg-white" style={{ minHeight: '297mm' }}>
            
            {/* Resume Header */}
            <div className="text-center mb-8 border-t-4 border-b-4 border-black py-4 relative bg-gray-50">
              <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
              <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
              
              <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
                Professional Resume • {new Date().getFullYear()} Edition
              </div>
              <h1 className="newspaper-headline text-4xl sm:text-5xl lg:text-6xl mb-2 text-black">
                TALHA RIZWAN
              </h1>
              <div className="newspaper-subhead text-lg sm:text-xl text-gray-600 mb-4">
                Software Engineer • Frontend Developer • 3D Web Specialist
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm newspaper-body">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>+92 334 0500725</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>work.talharizwan@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <div className="bg-black text-white p-3 mb-4">
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  <h2 className="newspaper-byline text-white">PROFESSIONAL SUMMARY</h2>
                </div>
              </div>
              <p className="newspaper-body text-gray-700 leading-relaxed">
                Passionate Software Engineering student with 3+ years of hands-on experience in modern web development. 
                Currently serving as Frontend Developer at Galvan AI while completing final year at FAST NUCES. 
                Specialized in React.js, Next.js, and Three.js with a strong focus on creating innovative 3D web experiences 
                and gamified learning platforms. Seeking full-time opportunities starting June 2025.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Experience */}
                <div>
                  <div className="bg-black text-white p-3 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <h2 className="newspaper-byline text-white">PROFESSIONAL EXPERIENCE</h2>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-black pl-4 mb-6">
                    <h3 className="newspaper-headline text-xl mb-1 text-black">Frontend Web Developer</h3>
                    <p className="newspaper-subhead text-gray-600 mb-2">Galvan AI, Innovista Rawal</p>
                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Mar 2025 – Present
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Islamabad, Pakistan
                      </span>
                    </div>
                    <ul className="newspaper-body text-sm text-gray-700 space-y-1">
                      <li>• Building responsive UIs using Next.js, React.js, and Tailwind CSS</li>
                      <li>• Integrating frontend with REST APIs for dynamic content delivery</li>
                      <li>• Enhancing user experience with reusable components and clean layouts</li>
                      <li>• Collaborating in agile development sprints and feature planning</li>
                      <li>• Improved application performance by 30% through optimization</li>
                    </ul>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <div className="bg-black text-white p-3 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <Code className="w-4 h-4" />
                      <h2 className="newspaper-byline text-white">KEY PROJECTS</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-black pl-4">
                      <h3 className="newspaper-headline text-lg mb-1 text-black">Gamified 3D Platform for Teaching SQA</h3>
                      <p className="newspaper-subhead text-gray-600 mb-2">Final Year Project • 2025</p>
                      <p className="newspaper-body text-sm text-gray-700 mb-2">
                        Revolutionary educational platform combining 3D visualization with gamification for Software Quality Assurance learning.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {['Next.js', 'Three.js', 'Blender', 'TypeScript', 'MongoDB'].map((tech, index) => (
                          <span key={index} className="vintage-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-l-4 border-black pl-4">
                      <h3 className="newspaper-headline text-lg mb-1 text-black">Software Engineering Society Website</h3>
                      <p className="newspaper-subhead text-gray-600 mb-2">Department Contribution • 2024-2025</p>
                      <p className="newspaper-body text-sm text-gray-700 mb-2">
                        Led frontend development for official department society website with modern responsive design.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech, index) => (
                          <span key={index} className="vintage-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-l-4 border-black pl-4">
                      <h3 className="newspaper-headline text-lg mb-1 text-black">E-Commerce Platform</h3>
                      <p className="newspaper-subhead text-gray-600 mb-2">Personal Project • 2024</p>
                      <p className="newspaper-body text-sm text-gray-700 mb-2">
                        Full-stack e-commerce solution with secure payment integration and admin dashboard.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {['React.js', 'Node.js', 'MySQL', 'Stripe API'].map((tech, index) => (
                          <span key={index} className="vintage-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                
                {/* Education */}
                <div>
                  <div className="bg-black text-white p-3 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <h2 className="newspaper-byline text-white text-center">EDUCATION</h2>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-black pl-4">
                    <h3 className="newspaper-headline text-lg mb-1 text-black">Bachelor of Software Engineering</h3>
                    <p className="newspaper-subhead text-sm text-gray-600 mb-2">FAST NUCES</p>
                    <div className="text-xs text-gray-500 mb-2">2022 - 2025 • CGPA: 3.06</div>
                    <p className="newspaper-body text-xs text-gray-700">
                      Final Year Student specializing in web development and software quality assurance.
                    </p>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <div className="bg-black text-white p-3 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <Target className="w-4 h-4" />
                      <h2 className="newspaper-byline text-white text-center">TECHNICAL SKILLS</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="newspaper-byline text-sm mb-2 text-black">Frontend</h4>
                      <div className="flex flex-wrap gap-1">
                        {['React.js', 'Next.js', 'Three.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'].map((skill, index) => (
                          <span key={index} className="vintage-badge text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="newspaper-byline text-sm mb-2 text-black">Backend</h4>
                      <div className="flex flex-wrap gap-1">
                        {['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'GraphQL'].map((skill, index) => (
                          <span key={index} className="vintage-badge text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="newspaper-byline text-sm mb-2 text-black">Database</h4>
                      <div className="flex flex-wrap gap-1">
                        {['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'].map((skill, index) => (
                          <span key={index} className="vintage-badge text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="newspaper-byline text-sm mb-2 text-black">Tools & Others</h4>
                      <div className="flex flex-wrap gap-1">
                        {['Git', 'Docker', 'SonarQube', 'Cypress', 'Jest', 'Python'].map((skill, index) => (
                          <span key={index} className="vintage-badge text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div className="bg-black text-white p-3 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4" />
                      <h2 className="newspaper-byline text-white text-center">ACHIEVEMENTS</h2>
                    </div>
                  </div>
                  
                  <ul className="newspaper-body text-xs text-gray-700 space-y-2">
                    <li>• Led frontend development for department society website</li>
                    <li>• Improved application performance by 30% at Galvan AI</li>
                    <li>• Developing innovative 3D gamified learning platform</li>
                    <li>• Active contributor to open-source projects</li>
                    <li>• Strong academic performance in SQA and web development</li>
                  </ul>
                </div>

                {/* Professional Links */}
                <div>
                  <div className="bg-black text-white p-3 mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      <h2 className="newspaper-byline text-white text-center">PROFESSIONAL LINKS</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Github className="w-3 h-3" />
                      <span className="newspaper-body text-gray-700">github.com/Cypher-Aura-19</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Linkedin className="w-3 h-3" />
                      <span className="newspaper-body text-gray-700">linkedin.com/in/talha-rizwan-986552371</span>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <div className="bg-red-700 text-white p-3 mb-4 border-2 border-black">
                    <div className="flex items-center justify-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <h2 className="newspaper-byline text-white text-center">AVAILABILITY</h2>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="vintage-badge vintage-badge-dark mb-2 text-xs">
                      Available June 2025
                    </div>
                    <p className="newspaper-body text-xs text-gray-700">
                      Seeking full-time opportunities in software development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t-2 border-black text-center">
              <p className="newspaper-body text-xs text-gray-500">
                © 2025 Talha Rizwan • Software Engineer • This document was generated from The Portfolio Times
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;