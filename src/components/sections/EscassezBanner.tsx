'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function EscassezBanner() {
  const { ref, inView } = useScrollReveal(0.3);

  return (
    <section
      style={{
        background: 'rgba(201,168,76,0.08)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
      }}
    >
      <div className="section-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.42, delay: 0.2 }}
          className="flex items-center justify-center gap-4 text-center flex-wrap"
        >
          <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontSize: '10px' }}>◆</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
            Apenas 3 unidades disponíveis para entrega imediata em Portugal
          </span>
          <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontSize: '10px' }}>◆</span>
        </motion.div>
      </div>
    </section>
  );
}
