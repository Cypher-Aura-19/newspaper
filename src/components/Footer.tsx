import React from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const quickLinks = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Resume', 'Contact'];
  const technologies = ['React', 'Next.js', 'Three.js', 'Node.js', 'MongoDB', 'TypeScript'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`py-16 masthead border-black transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Masthead */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 retro-border flex items-center justify-center bg-white text-black flex-shrink-0">
                <span className="newspaper-byline text-sm font-bold leading-none overflow-hidden">TR</span>
              </div>
              <div>
                <div className={`newspaper-headline text-xl transition-colors duration-300 ${
                  isDark ? 'text-gray-100' : 'text-black'
                }`}>
                  TALHA RIZWAN
                </div>
                <div className={`newspaper-subhead text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Software Engineer
                </div>
              </div>
            </div>
            <p className={`newspaper-body max-w-md transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Software Engineer passionate about creating innovative web solutions and 
              pushing the boundaries of technology through modern development practices.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`newspaper-byline mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-100' : 'text-black'
            }`}>
              NAVIGATION
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`block text-left newspaper-body hover:underline transition-all ${
                    isDark 
                      ? 'text-gray-300 hover:text-gray-100' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className={`newspaper-byline mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-100' : 'text-black'
            }`}>
              TECHNOLOGIES
            </h3>
            <div className="space-y-2">
              {technologies.map((tech) => (
                <div key={tech} className={`newspaper-body transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="newspaper-rule mb-8"></div>

        {/* Bottom */}
        <div className={`flex flex-col md:flex-row justify-between items-center transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <p className="newspaper-body mb-4 md:mb-0 transition-colors duration-300">
            © 2025 The Portfolio Times • All Rights Reserved • Talha Rizwan, Publisher
          </p>
          <p className="newspaper-byline text-xs transition-colors duration-300">
            Crafted with Next.js, Tailwind CSS & Vintage Typography
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;