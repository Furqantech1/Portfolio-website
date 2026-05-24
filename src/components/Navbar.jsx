import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href.replace('#', '#')));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-card shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-lg font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              <span style={{ color: 'var(--accent)' }}>F</span>urqan
              <span className="hidden sm:inline" style={{ color: 'var(--text-muted)' }}> .dev</span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? ''
                      : 'hover:bg-[var(--surface-alt)]'
                  }`}
                  style={{
                    color: activeSection === link.href.replace('#', '')
                      ? 'var(--accent)'
                      : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ backgroundColor: 'var(--accent-light)' }}
                      transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--surface-alt)' }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} style={{ color: 'var(--text-primary)' }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} style={{ color: 'var(--text-primary)' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2.5 rounded-xl transition-all duration-300"
                style={{ backgroundColor: 'var(--surface-alt)' }}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X size={18} style={{ color: 'var(--text-primary)' }} />
                ) : (
                  <Menu size={18} style={{ color: 'var(--text-primary)' }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-72 p-6 pt-20 glass-card"
              style={{ backgroundColor: 'var(--surface)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      activeSection === link.href.replace('#', '')
                        ? ''
                        : ''
                    }`}
                    style={{
                      color: activeSection === link.href.replace('#', '')
                        ? 'var(--accent)'
                        : 'var(--text-secondary)',
                      backgroundColor: activeSection === link.href.replace('#', '')
                        ? 'var(--accent-light)'
                        : 'transparent',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
