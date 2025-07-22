import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Briefcase } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section className={`min-h-screen pt-12 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Newspaper Masthead */}
        <div className="text-center mb-12 masthead relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
          <div className="absolute top-1 left-8 right-8 h-px bg-gray-400"></div>
          <div className="absolute bottom-1 left-8 right-8 h-px bg-gray-400"></div>
          
          <div className={`text-xs sm:text-sm uppercase tracking-widest mb-2 px-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="hidden sm:inline">Est. 2022 • Islamabad Edition • Vol. III, No. 1 • </span>
            {new Date().toLocaleDateString()} • Price: Free
          </div>
          <h1 className={`newspaper-headline text-4xl sm:text-6xl lg:text-8xl xl:text-9xl mb-3 tracking-tight px-2 ${isDark ? 'text-gray-100' : 'text-black'}`}>
            THE PORTFOLIO TIMES
          </h1>
          <div className={`newspaper-subhead text-sm sm:text-lg lg:text-xl italic px-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="hidden sm:inline">"All the Code That's Fit to Print" • Daily Circulation: ∞ • </span>
            Weather: Perfect for Coding
          </div>
          
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-black"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-black"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-black"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-black"></div>
        </div>

        {/* Main Newspaper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Left Column - Breaking News */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className={`retro-border mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="vintage-card-header">
                <div className="bg-red-700 text-white p-3 -m-3 mb-4 border-2 border-black">
                  <h3 className="newspaper-byline text-white text-center text-sm sm:text-base">⚡ BREAKING NEWS ⚡</h3>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="bg-black text-white px-2 py-1 inline-block mb-4 text-xs uppercase tracking-wide border border-gray-400">
                  AVAILABLE FOR HIRE
                </div>
                <h4 className={`newspaper-headline text-base sm:text-lg mb-3 ${isDark ? 'text-gray-100' : 'text-black'}`}>
                  ENGINEER SEEKS POSITION
                </h4>
                <p className={`newspaper-body text-xs sm:text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  ISLAMABAD - A talented software engineer specializing in modern web technologies 
                  and 3D development is actively seeking full-time employment opportunities 
                  beginning June 2025.
                </p>
                <div className={`text-xs border-t-2 border-black pt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  LAST UPDATED: {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Contact Info Box */}
            <div className={`retro-border mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="vintage-card-header">
                <h4 className="newspaper-byline bg-black text-white p-3 -m-3 mb-4 text-center text-sm sm:text-base">CONTACT BUREAU</h4>
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                  <Phone className="w-3 h-3" />
                  <div>
                    <div className={`newspaper-byline text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>TELEPHONE</div>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>+92 334 0500725</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                  <Mail className="w-3 h-3" />
                  <div>
                    <div className={`newspaper-byline text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>TELEGRAPH</div>
                    <span className={`break-all ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>work.talharizwan@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                  <MapPin className="w-3 h-3" />
                  <div>
                    <div className={`newspaper-byline text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>BUREAU</div>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Islamabad, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className={`retro-border ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="vintage-card-header">
                <h4 className="newspaper-byline bg-black text-white p-3 -m-3 mb-4 text-center text-sm sm:text-base">CURRENT ASSIGNMENTS</h4>
              </div>
              <div className="p-4 sm:p-6 space-y-3 text-xs sm:text-sm">
                <div className={`flex items-start gap-2 sm:gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Briefcase className="w-3 h-3" />
                  <div>
                    <div className={`newspaper-byline text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>POSITION</div>
                    <span>Frontend Developer at Galvan AI</span>
                  </div>
                </div>
                <div className={`flex items-start gap-2 sm:gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Calendar className="w-3 h-3" />
                  <div>
                    <div className={`newspaper-byline text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>EDUCATION</div>
                    <span>Final Year SE Student at FAST NUCES</span>
                  </div>
                </div>
                <div className={`flex items-start gap-2 sm:gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span>🔬</span>
                  <div>
                    <div className={`newspaper-byline text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>RESEARCH</div>
                    <span>3D Gamified Learning Platform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Main Story */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className={`retro-border ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="vintage-card-header">
                <div className="flex items-center justify-between bg-black text-white p-3 -m-3 mb-6">
                  <h2 className="newspaper-byline text-white text-sm sm:text-base">FRONT PAGE EXCLUSIVE</h2>
                  <div className="text-xs text-gray-300">
                    Page 1 of 1
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8 pt-2">
                <h1 className={`newspaper-headline text-3xl sm:text-4xl lg:text-6xl xl:text-7xl mb-4 text-center leading-none ${isDark ? 'text-gray-100' : 'text-black'}`}>
                  TALHA RIZWAN
                </h1>
                <h2 className={`newspaper-subhead text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-center italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Local Software Engineer Revolutionizes Digital Development
                </h2>
                
                <div className={`newspaper-byline mb-4 sm:mb-6 text-center text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  By Staff Reporter • Technology Bureau • {new Date().toLocaleDateString()}
                </div>

                <div className="border-t-4 border-b-4 border-black my-4 sm:my-6 py-1 relative">
                  <div className="border-t border-b border-gray-400"></div>
                  <div className="absolute left-0 top-0 w-4 h-full bg-black"></div>
                  <div className="absolute right-0 top-0 w-4 h-full bg-black"></div>
                </div>

                <div className="hidden sm:block newspaper-columns-2">
                  <p className={`drop-cap newspaper-body mb-4 text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    ISLAMABAD - In a remarkable display of technical prowess and innovative thinking, 
                    a young software engineer has emerged as a leading figure in the digital 
                    transformation space. Currently building cutting-edge solutions at Galvan AI 
                    while pursuing his degree, this professional represents the new generation 
                    of tech innovators.
                  </p>
                  
                  <p className={`newspaper-body mb-4 text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    With expertise spanning React, Next.js, Three.js, and modern web technologies, 
                    he has consistently delivered exceptional results in both academic and 
                    professional environments. His current focus on gamified 3D learning platforms 
                    demonstrates a commitment to educational innovation that could reshape how 
                    we approach software quality assurance training.
                  </p>

                  <p className={`newspaper-body mb-4 text-justify italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    "Code is not just about solving problems—it's about creating experiences 
                    that make people's lives better," he states in an exclusive interview. 
                    "Every line of code should serve a purpose, every interface should tell a story."
                  </p>

                  <p className={`newspaper-body text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    As he approaches graduation in 2025, industry experts predict a bright 
                    future for this rising talent in the software engineering field.
                  </p>
                </div>
                
                {/* Mobile single column version */}
                <div className="block sm:hidden space-y-4">
                  <p className={`drop-cap newspaper-body text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    ISLAMABAD - In a remarkable display of technical prowess and innovative thinking, 
                    a young software engineer has emerged as a leading figure in the digital 
                    transformation space.
                  </p>
                  
                  <p className={`newspaper-body text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Currently building cutting-edge solutions at Galvan AI while pursuing his degree, 
                    this professional represents the new generation of tech innovators.
                  </p>

                  <p className={`newspaper-body text-justify italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    "Code is not just about solving problems—it's about creating experiences 
                    that make people's lives better."
                  </p>

                  <p className={`newspaper-body text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    As he approaches graduation in 2025, industry experts predict a bright 
                    future for this rising talent in the software engineering field.
                  </p>
                </div>

                <div className="text-center my-6 sm:my-8">
                  <div className="inline-block border-t-4 border-b-4 border-black px-4 py-2 bg-gray-50">
                    <span className="text-xl sm:text-2xl">❦ ❦ ❦</span>
                  </div>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 border-3 border-black hover:bg-white hover:text-black transition-all duration-300 newspaper-byline tracking-wide text-sm sm:text-base"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
                    CONTACT THE NEWSROOM
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Social & Additional Info */}
          <div className="lg:col-span-3 order-3">
            <div className={`retro-border mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="vintage-card-header">
                <h4 className="newspaper-byline bg-black text-white p-3 -m-3 mb-4 text-center text-sm sm:text-base">TELEGRAPH LINES</h4>
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <a 
                  href="https://github.com/Cypher-Aura-19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-3 border-black p-3 hover:bg-black hover:text-white transition-all duration-300 bg-white"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Github className="w-5 h-5" />
                    <div>
                      <div className="newspaper-byline text-xs sm:text-sm">CODE REPOSITORY</div>
                      <div className="text-xs">GitHub Archives</div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/talha-rizwan-986552371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-3 border-black p-3 hover:bg-black hover:text-white transition-all duration-300 bg-white"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Linkedin className="w-5 h-5" />
                    <div>
                      <div className="newspaper-byline text-xs sm:text-sm">PROFESSIONAL NETWORK</div>
                      <div className="text-xs">LinkedIn Connection</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Weather Box (Fun Addition) */}
            <div className={`retro-border mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="vintage-card-header">
                <h4 className="newspaper-byline bg-black text-white p-3 -m-3 mb-4 text-center text-sm sm:text-base">WEATHER REPORT</h4>
              </div>
              <div className="p-4 sm:p-6">
                <div className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="text-4xl mb-3">☀️</div>
                  <div className="newspaper-byline text-xs sm:text-sm mb-2">ISLAMABAD</div>
                  <div className="newspaper-body text-xs sm:text-sm mb-2">
                    Perfect Coding Conditions
                  </div>
                  <div className="text-xs border-t-2 border-black pt-2">
                    Productivity Index: Maximum
                  </div>
                </div>
              </div>
            </div>

            {/* Quote of the Day */}
            <div className={`retro-border ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="vintage-card-header">
                <h4 className="newspaper-byline bg-black text-white p-3 -m-3 mb-4 text-center text-sm sm:text-base">DAILY WISDOM</h4>
              </div>
              <div className="p-4 sm:p-6">
                <blockquote className={`newspaper-body text-xs sm:text-sm italic text-center leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "The best way to predict the future is to create it."
                </blockquote>
                <div className={`text-xs text-center mt-3 border-t-2 border-black pt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  - Peter Drucker
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;