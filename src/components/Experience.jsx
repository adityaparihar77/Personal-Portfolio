import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiAward, FiTrendingUp } from 'react-icons/fi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
     {
       type: 'education',
      title: 'Masters in Computer Science',
      company: 'UIT RGPV',
      period: '2025-27',
      description: 'Focused on web development, algorithms, and software engineering.',
      achievements: [
        'Led multiple college projects',
        'Active member of coding club',
      
      ],
      icon: FiAward,
      color: 'from-green-500 to-emerald-500',
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Parihar Sons (Startup Idea)',
      period: '2025 - Present',
      description: 'Leading the development of a comprehensive business management platform.',
      achievements: [
        'Architected scalable MERN stack application',
        'Implemented real-time features with Socket.io',
        'Improved application performance by 40%',
      ],
      icon: FiBriefcase,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'work',
      title: 'Frontend Developer Intern',
      company: 'Devfrend Web Solutions',
      period: '2024',
      description: 'Contributed to multiple client projects with focus on React and modern UI/UX.',
      achievements: [
        'Developed responsive web applications',
        'Collaborated with design team on UI components',
        'Reduced page load time by 30%',
      ],
      icon: FiBriefcase,
      color: 'from-purple-500 to-pink-500',
    },
   
    {
      type: 'education',
      title: 'Bachelor in Computer Science',
      company: 'Orienta College of Technology',
      period: '2021 - 2025',
      description: 'Focused on web development, algorithms, and software engineering.',
      achievements: [
        'CGPA: 7/10',
        'Led multiple college projects',
        'Active member of coding club',
      ],
      icon: FiTrendingUp,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-secondary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
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
            Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora">
            My Professional{' '}
            <span className="bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto px-4">
            A timeline of my career milestones and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary border-4 border-black z-10">
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent-primary"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>

              {/* Content card */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <motion.div
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} mb-4`}
                    >
                      <exp.icon className="text-2xl text-white" />
                    </div>

                    {/* Period */}
                    <div className="text-accent-secondary text-sm font-semibold mb-2">
                      {exp.period}
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-white/70 mb-3">{exp.company}</p>

                    {/* Description */}
                    <p className="text-white/60 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-white/70"
                        >
                          <span className="text-accent-primary mt-0.5">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-10">
            Certifications & Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'React Developer Certification',
                issuer: 'Udemy',
                icon: '🎓',
              },
              {
                title: 'Hackathon Winner',
                issuer: 'College Tech Fest',
                icon: '🏆',
              },
              {
                title: 'Full Stack Web Development',
                issuer: 'Coursera',
                icon: '📜',
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-primary/50 transition-all text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-white/60">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Experience;
