import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const FooterNew = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Quick: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
    ],
    Work: [
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ],
    Connect: [
      { name: 'GitHub', href: 'https://github.com/adityaparihar77' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-parihar-939922226' },
      { name: 'Twitter', href: 'https://twitter.com' },
    ],
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/adityaparihar77', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aditya-parihar-939922226', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:adityaparihar450@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark-bg-100 border-t border-white/10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-20 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              className="text-2xl font-bold font-sora mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white">Aditya</span>
              <span className="text-accent-primary">.</span>
            </motion.div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital
              experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-accent-primary/20 hover:border-accent-primary transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={
                        link.href.startsWith('#')
                          ? (e) => scrollToSection(e, link.href)
                          : undefined
                      }
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="text-white/60 hover:text-accent-primary transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Aditya Parihar. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              Built with{' '}
              <FiHeart className="text-red-500 animate-pulse" />{' '}
              using React & Framer Motion
            </p>
          </div>
        </div>
      </div>

      {/* Decorative blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default FooterNew;
