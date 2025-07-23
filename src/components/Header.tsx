import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, FolderOpen, Award, GraduationCap, Mail, Hash, MessageCircle, Users, Settings, FileText } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, id: 'hero' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Experience', icon: Briefcase, id: 'experience' },
    { name: 'Projects', icon: FolderOpen, id: 'projects' },
    { name: 'Skills', icon: Award, id: 'skills' },
    { name: 'Education', icon: GraduationCap, id: 'education' },
    { name: 'Resume', icon: FileText, id: 'resume' },
    { name: 'Contact', icon: Mail, id: 'contact' }
  ];

  const channels = [
    { name: 'general', active: false },
    { name: 'about-me', active: true },
    { name: 'experience', active: false },
    { name: 'projects', active: false },
    { name: 'skills', active: false },
    { name: 'education', active: false }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark ? 'bg-gray-900 border-b border-gray-700' : 'bg-white border-b border-gray-300'
      }`}>
        <div className="flex items-center justify-between h-12 px-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2 rounded transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 retro-border flex items-center justify-center bg-white text-black flex-shrink-0">
                <span className="newspaper-byline text-xs font-bold leading-none overflow-hidden">TR</span>
              </div>
              <span className={`newspaper-headline text-lg transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
                The Portfolio Times
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Slack-Inspired Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDark ? 'bg-gray-900 border-r border-gray-700' : 'bg-gray-50 border-r border-gray-300'}`}>
        
        {/* Sidebar Header */}
        <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 retro-border flex items-center justify-center bg-white text-black flex-shrink-0">
                <span className="newspaper-byline text-xs font-bold leading-none overflow-hidden">TR</span>
              </div>
              <div>
                <div className={`newspaper-headline text-sm transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
                  Portfolio Workspace
                </div>
                <div className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Talha Rizwan
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className={`p-1 rounded transition-colors ${
                isDark 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-black hover:bg-gray-200'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="p-3">
          {/* Threads */}
          <div className="mb-4">
            <div className={`flex items-center space-x-2 px-2 py-1 text-sm ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <MessageCircle className="w-4 h-4" />
              <span>Sections</span>
            </div>
          </div>

          {/* Channels */}
          <div className="mb-4">
            <div className={`flex items-center space-x-2 px-2 py-1 text-sm mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span>Channels</span>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-2 px-2 py-1 rounded text-sm transition-colors ${
                      isDark 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'text-gray-700 hover:text-black hover:bg-gray-200'
                    }`}
                  >
                    <Hash className="w-3 h-3" />
                    <span>{item.name.toLowerCase()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Direct Messages */}
          <div>
            <div className={`flex items-center space-x-2 px-2 py-1 text-sm mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Users className="w-4 h-4" />
              <span>Quick Links</span>
            </div>
            <div className="space-y-1">
              <a
                href="https://github.com/Cypher-Aura-19"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center space-x-2 px-2 py-1 rounded text-sm transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                }`}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/talha-rizwan-986552371/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center space-x-2 px-2 py-1 rounded text-sm transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                }`}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 border-t transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
          <div className={`vintage-card p-3 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="vintage-badge vintage-badge-dark mb-2 text-xs">
              Available for Opportunities
            </div>
            <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Open for full-time positions starting June 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;