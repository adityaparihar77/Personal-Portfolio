import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import Background3D from './Background3D';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60 animate-gradient" 
           style={{ backgroundSize: '400% 400%' }} />
      
      {/* 3D Background */}
      <Background3D />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 lg:px-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            {/* Glow ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary blur-xl opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Main photo container */}
            <motion.div
              className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-[3px] border-accent-primary/40 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 p-1.5"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black/50">
                <img
                  src="/Aditya.jpeg"
                  alt="Aditya Parihar"
                  className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition-transform duration-700"
                />
              </div>
              
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent-primary/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating particles around photo */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-primary rounded-full"
                style={{
                  top: `${20 + i * 25}%`,
                  left: i % 2 === 0 ? '-10%' : 'auto',
                  right: i % 2 !== 0 ? '-10%' : 'auto',
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-sora leading-tight"
        >
          <span className="text-white/90">Hi, I'm </span>
          <br className="sm:hidden" />
          <span className="relative inline-block">
            <span className="relative z-10 text-accent-primary font-extrabold">
              Aditya
            </span>
            <motion.span
              className="absolute -inset-2 bg-accent-primary/20 blur-xl -z-10 rounded-lg"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </span>
          {' '}
          <span className="text-white font-extrabold">Parihar</span>
        </motion.h1>

        {/* Animated role text */}
        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-white/80 font-medium h-16 sm:h-20 flex items-center justify-center"
        >
          <ReactTyped
            strings={[
              'React Developer',
              'Full Stack Developer',
              'Frontend Engineer',
              'MERN Stack Developer',
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="text-accent-secondary font-medium"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4"
        >
          Crafting exceptional digital experiences with modern web technologies.
          Passionate about creating performant, accessible, and beautiful interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-accent-primary rounded-full font-semibold text-white overflow-hidden text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ type: 'tween' }}
            />
          </motion.button>

          <motion.a
            href="/Aditya Resume.pdf"
            download
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-md rounded-full font-semibold text-white border-2 border-white/20 hover:border-accent-primary transition-all flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload className="text-xl" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:your@email.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-accent-primary/20 hover:border-accent-primary transition-all"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="text-xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-accent-primary/20 hover:border-accent-primary transition-all"
            aria-label="Scroll to about section"
          >
            <FiArrowDown className="text-xl" />
          </button>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
