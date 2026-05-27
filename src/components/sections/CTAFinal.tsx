'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTAFinal() {
  const { ref, inView } = useScrollReveal(0.2);

  return (
    <section
      style={{ background: 'linear-gradient(to bottom, #080808, #0D0D0D)', paddingTop: '12rem', paddingBottom: '12rem' }}
    >
      <div className="section-container">
        <div ref={ref} className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.42, delay: 0.2 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Contacto
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.52, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 400, color: 'white', lineHeight: 1.05, letterSpacing: '0.02em' }}
          >
            PRONTO PARA
            <br />
            SENTIR A DIFERENÇA?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.42, delay: 0.35 }}
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 24px)', color: 'rgba(255,255,255,0.4)', marginTop: '2rem' }}
          >
            Agende o seu test drive. Sem compromisso.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.42, delay: 0.45 }}
            whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 280, damping: 28 } }}
            whileTap={{ scale: 0.98 }}
            style={{
              marginTop: '3.5rem',
              padding: '1.25rem 4rem',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
          >
            Agendar Test Drive
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.42, delay: 0.55 }}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.15)', marginTop: '2rem' }}
          >
            PORSCHE 911 · CARRERA · 2024
          </motion.p>
        </div>
      </div>
    </section>
  );
}
