import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiJavascript,
  
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiSocketdotio,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      name: 'React',
      icon: SiReact,
      level: 90,
      color: '#61DAFB',
      category: 'Frontend',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      level: 88,
      color: '#F7DF1E',
      category: 'Frontend',
    },
   
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      level: 85,
      color: '#FFFFFF',
      category: 'Frontend',
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      level: 85,
      color: '#339933',
      category: 'Backend',
    },
    {
      name: 'Express',
      icon: SiExpress,
      level: 82,
      color: '#FFFFFF',
      category: 'Backend',
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      level: 80,
      color: '#47A248',
      category: 'Backend',
    },
    {
      name: 'Socket.io',
      icon: SiSocketdotio,
      level: 78,
      color: '#FFFFFF',
      category: 'Backend',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      level: 92,
      color: '#06B6D4',
      category: 'Tools',
    },
    {
      name: 'Redux',
      icon: SiRedux,
      level: 75,
      color: '#764ABC',
      category: 'Tools',
    },
    {
      name: 'Git',
      icon: SiGit,
      level: 85,
      color: '#F05032',
      category: 'Tools',
    },
    {
      name: 'Figma',
      icon: SiFigma,
      level: 70,
      color: '#F24E1E',
      category: 'Tools',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-secondary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-accent-primary font-semibold mb-4 tracking-wider uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Skills & Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto px-4">
            A comprehensive toolkit to bring your ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-primary/50 transition-all duration-300 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-primary/0 group-hover:from-accent-primary/10 group-hover:to-transparent transition-all duration-300" />

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${skill.color}15`,
                    }}
                  >
                    <skill.icon
                      className="text-3xl"
                      style={{ color: skill.color }}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-white mb-2 text-center relative z-10">
                  {skill.name}
                </h3>

                {/* Category badge */}
                <div className="text-xs text-white/50 text-center mb-3 relative z-10">
                  {skill.category}
                </div>

                {/* Progress bar */}
                <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                  />
                </div>

                {/* Percentage */}
                <motion.div
                  className="text-xs text-white/60 text-center mt-2 font-medium relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
                >
                  {skill.level}%
                </motion.div>

                {/* Animated corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-primary/0 group-hover:border-accent-primary transition-all duration-300 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-primary/0 group-hover:border-accent-primary transition-all duration-300 rounded-br-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-6">
            Always learning and exploring new technologies to stay ahead
          </p>
          <motion.div
            className="inline-flex gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 font-medium text-sm">
              🚀 Currently exploring: AI Integration, Web3, Advanced Animations
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative blurs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Skills;
