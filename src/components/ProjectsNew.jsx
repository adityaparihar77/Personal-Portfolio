import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { HiOutlineCode, HiOutlineSparkles } from 'react-icons/hi';

const ProjectsNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Employee Management System',
      category: 'Full Stack',
      description: 'A comprehensive MERN stack application for managing employee data, attendance, and performance tracking.',
      problem: 'Companies struggle with manual employee tracking and performance evaluation processes.',
      solution: 'Built a scalable system with real-time updates, role-based access, and automated reporting.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      image: '/projects/ems.jpg',
      liveUrl: 'https://ems-demo.com',
      githubUrl: 'https://github.com/yourusername/ems',
      features: [
        'Role-based authentication system',
        'Real-time attendance tracking',
        'Performance analytics dashboard',
        'Automated salary calculations',
      ],
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      id: 2,
      title: 'Do Chat',
      category: 'Real-Time App',
      description: 'A modern real-time chat application with Socket.io, featuring rooms, typing indicators, and file sharing.',
      problem: 'Traditional communication tools lack real-time responsiveness and modern UI.',
      solution: 'Created an instant messaging platform with WebSocket technology for zero-latency communication.',
      tech: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
      image: '/projects/chat.jpg',
      liveUrl: 'https://dochat-demo.com',
      githubUrl: 'https://github.com/yourusername/dochat',
      features: [
        'Real-time messaging with Socket.io',
        'Private and group chat rooms',
        'Image and file sharing',
        'Online/offline status indicators',
      ],
      gradient: 'from-green-500/20 to-teal-500/20',
    },
    {
      id: 3,
      title: 'Portfolio Showcase',
      category: 'Frontend',
      description: 'An award-winning portfolio website with advanced animations, 3D elements, and smooth interactions.',
      problem: 'Generic portfolio templates fail to capture personality and technical expertise.',
      solution: 'Designed a cinematic, interactive experience using Framer Motion and Three.js.',
      tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Lenis'],
      image: '/projects/portfolio.jpg',
      liveUrl: 'https://yourportfolio.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      features: [
        '3D hero section with Three.js',
        'Smooth scroll animations',
        'Custom cursor effects',
        'Glassmorphism design',
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A modern e-commerce solution with payment integration, inventory management, and admin dashboard.',
      problem: 'Small businesses need affordable, feature-rich online stores.',
      solution: 'Built a scalable platform with Stripe integration and comprehensive admin tools.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Zustand'],
      image: '/projects/ecommerce.jpg',
      liveUrl: 'https://shop-demo.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      features: [
        'Stripe payment integration',
        'Product inventory management',
        'Order tracking system',
        'Admin analytics dashboard',
      ],
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      id: 5,
      title: 'Task Management App',
      category: 'Productivity',
      description: 'A Kanban-style task manager with drag-and-drop, labels, and team collaboration features.',
      problem: 'Teams need an intuitive way to organize and track project progress.',
      solution: 'Created a visual workflow tool with real-time collaboration capabilities.',
      tech: ['React', 'Redux Toolkit', 'DnD Kit', 'Firebase', 'Material UI'],
      image: '/projects/taskmanager.jpg',
      liveUrl: 'https://tasks-demo.com',
      githubUrl: 'https://github.com/yourusername/taskmanager',
      features: [
        'Drag-and-drop task boards',
        'Real-time collaboration',
        'Custom labels and filters',
        'Progress tracking',
      ],
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      category: 'API Integration',
      description: 'A beautiful weather application with forecasts, maps, and location-based suggestions.',
      problem: 'Weather apps often overwhelm users with too much data.',
      solution: 'Designed a clean, intuitive interface focusing on essential information.',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js', 'Tailwind CSS'],
      image: '/projects/weather.jpg',
      liveUrl: 'https://weather-demo.com',
      githubUrl: 'https://github.com/yourusername/weather',
      features: [
        '7-day weather forecast',
        'Interactive weather maps',
        'Location-based suggestions',
        'Beautiful data visualizations',
      ],
      gradient: 'from-sky-500/20 to-indigo-500/20',
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
    hidden: { y: 50, opacity: 0 },
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
      id="projects"
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />

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
            Featured Work
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora">
            Projects That{' '}
            <span className="bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">
              Make Impact
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto px-4">
            A showcase of my best work, from concept to deployment
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-primary/50 transition-all duration-300 overflow-hidden">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Category badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-xs font-medium text-accent-secondary mb-4">
                    <HiOutlineSparkles />
                    {project.category}
                  </div>

                  {/* Project image placeholder */}
                  <div className="relative h-48 rounded-xl bg-gradient-to-br from-white/10 to-white/5 mb-6 overflow-hidden flex items-center justify-center">
                    <HiOutlineCode className="text-6xl text-white/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent-secondary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/70">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary/20 hover:bg-accent-primary/30 border border-accent-primary/30 text-sm font-medium transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub />
                      Code
                    </a>
                  </div>
                </div>

                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-dark-bg-100 rounded-2xl border border-white/20 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            >
              <FiX className="text-xl" />
            </button>

            {/* Content */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-xs font-medium text-accent-secondary mb-4">
                {selectedProject.category}
              </span>
              <h2 className="text-4xl font-bold mb-4 text-white">
                {selectedProject.title}
              </h2>
              <p className="text-lg text-white/70 mb-6">
                {selectedProject.description}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold mb-2 text-red-400">
                  Problem
                </h3>
                <p className="text-white/70">{selectedProject.problem}</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold mb-2 text-green-400">
                  Solution
                </h3>
                <p className="text-white/70">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Key Features
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {selectedProject.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <span className="text-accent-primary mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-primary hover:bg-accent-primary/80 text-white font-semibold transition-all"
              >
                <FiExternalLink />
                View Live Project
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
              >
                <FiGithub />
                View Source Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default ProjectsNew;
