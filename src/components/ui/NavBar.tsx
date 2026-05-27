'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { label: 'O Modelo',    href: '#autoridade' },
  { label: 'Versões',     href: '#versoes'     },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contacto',    href: '#contacto'    },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="section-container py-5 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="Porsche 911">
          <span
            className="gold-shimmer"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.35em', fontWeight: 500 }}
          >
            PORSCHE
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'white', lineHeight: 1, letterSpacing: '0.05em' }}>
            911
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-center w-6 h-6" style={{ gap: '5px' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px origin-center"
              style={{
                width: '20px',
                background: 'var(--gold)',
                transition: 'all 0.3s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                  : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(8,8,8,0.97)', borderTop: '1px solid rgba(201,168,76,0.1)' }}
          >
            <div className="flex flex-col items-center gap-8 py-10">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.65)' }}
                >
                  {l.label.toUpperCase()}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
