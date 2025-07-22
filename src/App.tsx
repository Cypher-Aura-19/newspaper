import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "The Portfolio Times - Talha Rizwan";
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header isDark={false} toggleTheme={() => {}} />
      <Hero isDark={false} />
      <About isDark={false} />
      <Experience isDark={false} />
      <Projects isDark={false} />
      <Skills isDark={false} />
      <Education isDark={false} />
      <Contact isDark={false} />
      <Footer isDark={false} />
    </div>
  );
}

export default App;