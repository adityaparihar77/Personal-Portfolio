import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import NavbarNew from './components/NavbarNew';
import Hero from './components/Hero';
import AboutNew from './components/AboutNew';
import Skills from './components/Skills';
import ProjectsNew from './components/ProjectsNew';
import Experience from './components/Experience';
import ContactNew from './components/ContactNew';
import FooterNew from './components/FooterNew';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  // Initialize smooth scroll
  useSmoothScroll();

  // Hide default cursor on desktop
  useEffect(() => {
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
      document.querySelectorAll('a, button').forEach((el) => {
        el.style.cursor = 'none';
      });
    }
  }, []);

  return (
    <>
      {/* Custom cursor (desktop only) */}
      {window.innerWidth > 768 && <CustomCursor />}
      
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Main app container */}
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated mesh gradient background */}
        <div 
          className="fixed inset-0 bg-gradient-mesh opacity-30 animate-gradient pointer-events-none"
          style={{ backgroundSize: '400% 400%' }}
        />

        {/* Animated particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Components */}
        <NavbarNew />
        <Hero />
        <AboutNew />
        <Skills />
        <ProjectsNew />
        <Experience />
        <ContactNew />
        <FooterNew />
      </div>

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(26, 26, 46, 0.9)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#a855f7',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </>
  );
}

export default App;

