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
    "📰 Frontend Developer Joins Galvan AI",
    "🎓 Final Year Student Excels in Software Engineering",
    "🚀 3D Gamified Learning Platform in Development",
    "💼 Available for Full-Time Opportunities June 2025",
    "⚡ React & Next.js Expert Ready for Collaboration"
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
      <div className="max-w-4xl w-full mx-auto px-4">
        {/* Newspaper Header */}
        <div className="text-center mb-8 border-t-4 border-b-4 border-black py-4 relative">
          <div className="absolute top-2 left-0 right-0 h-px bg-black"></div>
          <div className="absolute bottom-2 left-0 right-0 h-px bg-black"></div>
          
          <div className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Special Edition • Loading Issue • {new Date().toLocaleDateString()} • Price: Free
          </div>
          <h1 className="newspaper-headline text-6xl lg:text-8xl mb-2 text-black">
            THE PORTFOLIO TIMES
          </h1>
          <div className="newspaper-subhead text-lg text-gray-600">
            "All the Code That's Fit to Print" • Breaking News Alert
          </div>
        </div>

        {/* Breaking News Banner */}
        <div className="bg-red-600 text-white py-2 px-4 mb-6 relative overflow-hidden">
          <div className="flex items-center justify-center">
            <span className="newspaper-byline text-white mr-4 animate-pulse">🚨 BREAKING NEWS</span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap newspaper-body">
                {newsItems.join(' • ')} • {newsItems.join(' • ')}
              </div>
            </div>
          </div>
        </div>

        {/* Main Loading Content */}
        <div className="vintage-card p-8 bg-gray-50">
          <div className="vintage-card-header -m-8 mb-6">
            <div className="flex items-center justify-center">
              <h2 className="newspaper-byline text-red-600">URGENT DISPATCH</h2>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="newspaper-headline text-4xl mb-4 text-black">
              PORTFOLIO LOADING IN PROGRESS
            </h3>
            <div className="newspaper-subhead text-xl text-gray-600 mb-6">
              Our Editorial Team is Preparing Your Digital Experience
            </div>

            {/* Typewriter Effect */}
            <div className="mb-6 h-8">
              <p className="newspaper-body text-lg text-black">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Progress Bar */}
            {showProgress && (
              <div className="mb-6">
                <div className="vintage-progress mb-2">
                  <div 
                    className="vintage-progress-fill transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="newspaper-byline text-sm text-gray-500">
                  Loading Progress: {Math.round(progress)}% Complete
                </p>
              </div>
            )}

            {/* Loading Animation */}
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>

            {/* News Ticker */}
            <div className="border-t-2 border-b-2 border-black py-3">
              <div className="newspaper-byline text-xs mb-1">LATEST UPDATES</div>
              <div className="overflow-hidden">
                <div className="animate-scroll newspaper-body text-sm">
                  📊 Skills Database: 95% Loaded • 🎯 Projects Archive: Ready • 
                  💼 Experience Records: Compiled • 🎓 Education History: Verified • 
                  📞 Contact Information: Active
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 newspaper-body">
            <p>Please stand by while we prepare the most comprehensive software engineering portfolio...</p>
            <p className="mt-2">© 2025 The Portfolio Times • Talha Rizwan, Chief Technology Officer</p>
          </div>
        </div>
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