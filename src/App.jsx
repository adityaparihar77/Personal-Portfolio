import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function App() {
  const scrollY = useScrollAnimation();

  return (
    <>
      <div className="min-h-screen bg-gradient-purple-black relative overflow-hidden">
        {/* Animated background particles */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-dark-purple-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-dark-purple-300 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-80 left-1/4 w-1.5 h-1.5 bg-dark-purple-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-dark-purple-400 rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-dark-purple-300 rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Parallax background gradient */}
        <div 
          className="fixed inset-0 opacity-20 animate-gradient"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>

        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Contact />
        <Footer />
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#ffffff',
            border: '1px solid #7c3aed',
          },
        }}
      />
    </>
  );
}

export default App;
