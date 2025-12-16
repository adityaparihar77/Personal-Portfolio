import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiLayers } from 'react-icons/fi';
import { HiOutlineLightningBolt, HiOutlineUsers, HiOutlineTrendingUp } from 'react-icons/hi';

const AboutNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: HiOutlineLightningBolt, value: '2+', label: 'Years Experience' },
    { icon: FiCode, value: '15+', label: 'Projects Completed' },
    { icon: HiOutlineTrendingUp, value: '10+', label: 'Technologies' },
    { icon: HiOutlineUsers, value: '5+', label: 'Happy Clients' },
  ];

  const techStacks = [
    {
      category: 'Frontend',
      icon: FiLayers,
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      icon: FiDatabase,
      techs: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Socket.io'],
    },
    {
      category: 'Tools & Others',
      icon: FiCode,
      techs: ['Git', 'VS Code', 'Figma', 'Postman', 'Firebase'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-accent-primary font-semibold mb-4 tracking-wider uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora">
            Turning Ideas Into{' '}
            <span className="bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
            I'm a passionate Full Stack Developer with expertise in building scalable, 
            performant web applications. I love creating seamless user experiences and 
            solving complex problems with elegant code.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-primary/50 transition-all duration-300 overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <stat.icon className="text-4xl text-accent-primary mb-4 mx-auto" />
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-primary/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors">
                  <stack.icon className="text-2xl text-accent-primary" />
                </div>

                {/* Category */}
                <h3 className="text-2xl font-bold mb-4 text-white">{stack.category}</h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-all cursor-default"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-transparent border border-accent-primary/20">
            <p className="text-lg text-white/70 leading-relaxed mb-4">
              "I believe great code is not just about solving problems — it's about 
              creating experiences that users love and remember."
            </p>
            <p className="text-accent-secondary font-semibold">- Aditya Parihar</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default AboutNew;
