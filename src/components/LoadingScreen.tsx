import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [showProgress, setShowProgress] = useState(false);

  const loadingSteps = [
    "BREAKING: Software Engineer Portfolio Loading...",
    "URGENT: Fetching Latest Projects...",
    "DEVELOPING: Compiling Experience Data...",
    "EXCLUSIVE: Loading Skills Database...",
    "FINAL EDITION: Portfolio Ready for Publication..."
  ];

  const newsItems = [
    "FRONTEND DEVELOPER JOINS GALVAN AI",
    "FINAL YEAR STUDENT EXCELS IN SOFTWARE ENGINEERING",
    "3D GAMIFIED LEARNING PLATFORM IN DEVELOPMENT",
    "AVAILABLE FOR FULL-TIME OPPORTUNITIES JUNE 2025",
    "REACT & NEXT.JS EXPERT READY FOR COLLABORATION"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showProgress) return;

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        } else {
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(stepTimer);
  }, [showProgress, onLoadingComplete]);

  useEffect(() => {
    if (!showProgress) return;

    const text = loadingSteps[currentStep];
    let index = 0;
    setTypewriterText('');

    const typeTimer = setInterval(() => {
      if (index < text.length) {
        setTypewriterText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 50);

    return () => clearInterval(typeTimer);
  }, [currentStep, showProgress]);

  const progress = ((currentStep + 1) / loadingSteps.length) * 100;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newspaper Header */}
        <div className="text-center mb-6 sm:mb-8 border-t-4 border-b-4 border-black py-3 sm:py-4 relative bg-gray-50">
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute top-1 left-4 right-4 h-px bg-gray-400"></div>
          <div className="absolute bottom-1 left-4 right-4 h-px bg-gray-400"></div>
          
          <div className="text-xs sm:text-sm uppercase tracking-widest mb-2 text-gray-600 px-2">
            <span className="hidden sm:inline">Special Edition • Loading Issue • </span>
            {new Date().toLocaleDateString()} • Price: Free
          </div>
          <h1 className="newspaper-headline text-4xl sm:text-6xl lg:text-8xl mb-2 text-black px-2">
            THE PORTFOLIO TIMES
          </h1>
          <div className="newspaper-subhead text-sm sm:text-lg text-gray-600 px-2">
            <span className="hidden sm:inline">"All the Code That's Fit to Print" • </span>Breaking News Alert
          </div>
          
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-black"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-black"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-black"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-black"></div>
        </div>

        {/* Breaking News Banner */}
        <div className="bg-red-700 text-white py-2 px-2 sm:px-4 mb-4 sm:mb-6 relative overflow-hidden border-2 border-black">
          <div className="flex items-center justify-center">
            <span className="newspaper-byline text-white mr-2 sm:mr-4 animate-pulse text-xs sm:text-sm">
              ⚡ URGENT
            </span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap newspaper-body text-xs sm:text-sm">
                {newsItems.join(' • ')} • {newsItems.join(' • ')}
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
        </div>

        {/* Main Loading Content */}
        <div className="vintage-card p-4 sm:p-6 lg:p-8 bg-gray-50 shadow-lg">
          <div className="vintage-card-header -m-4 sm:-m-6 lg:-m-8 mb-4 sm:mb-6 bg-black text-white">
            <div className="flex items-center justify-center">
              <h2 className="newspaper-byline text-white text-sm sm:text-base p-3">URGENT DISPATCH</h2>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="newspaper-headline text-2xl sm:text-3xl lg:text-4xl mb-4 text-black px-2">
              PORTFOLIO LOADING IN PROGRESS
            </h3>
            <div className="newspaper-subhead text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 px-2">
              Our Editorial Team is Preparing Your Digital Experience
            </div>

            {/* Typewriter Effect */}
            <div className="mb-4 sm:mb-6 h-6 sm:h-8">
              <p className="newspaper-body text-sm sm:text-base lg:text-lg text-black px-2">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Progress Bar */}
            {showProgress && (
              <div className="mb-4 sm:mb-6 px-2">
                <div className="vintage-progress mb-2 border-2 border-black">
                  <div 
                    className="vintage-progress-fill transition-all duration-300 bg-black"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="newspaper-byline text-xs sm:text-sm text-gray-500">
                  Loading Progress: {Math.round(progress)}% Complete
                </p>
              </div>
            )}

            {/* Loading Animation */}
            <div className="flex justify-center items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>

            {/* News Ticker */}
            <div className="border-t-2 border-b-2 border-black py-2 sm:py-3 bg-white mx-2">
              <div className="newspaper-byline text-xs sm:text-sm mb-1">LATEST UPDATES</div>
              <div className="overflow-hidden">
                <div className="animate-scroll newspaper-body text-xs sm:text-sm">
                  SKILLS DATABASE: 95% LOADED • PROJECTS ARCHIVE: READY • 
                  EXPERIENCE RECORDS: COMPILED • EDUCATION HISTORY: VERIFIED • 
                  CONTACT INFORMATION: ACTIVE
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs sm:text-sm text-gray-500 newspaper-body px-2">
            <p className="mb-2">Please stand by while we prepare the most comprehensive software engineering portfolio...</p>
            <div className="border-t border-gray-300 pt-2 mt-2">
              <p>© 2025 The Portfolio Times • Talha Rizwan, Chief Technology Officer</p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden sm:block absolute top-4 left-4 w-8 h-8 border-2 border-black bg-white transform rotate-45"></div>
        <div className="hidden sm:block absolute top-4 right-4 w-8 h-8 border-2 border-black bg-white transform rotate-45"></div>
        <div className="hidden sm:block absolute bottom-4 left-4 w-8 h-8 border-2 border-black bg-white transform rotate-45"></div>
        <div className="hidden sm:block absolute bottom-4 right-4 w-8 h-8 border-2 border-black bg-white transform rotate-45"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;