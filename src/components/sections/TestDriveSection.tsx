'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const INCLUDES = [
  'Test drive de 30 minutos no modelo à sua escolha',
  'Apresentação técnica personalizada',
  'Proposta de financiamento à medida',
  'Sem compromisso de compra',
];

export default function TestDriveSection() {
  const left  = useScrollReveal(0.15);
  const right = useScrollReveal(0.15);
  const items = useScrollReveal(0.15);

  const titleLine1 = 'Sinta a Diferença'.split(' ');
  const titleLine2 = 'em Primeira Mão.'.split(' ');

  return (
    <section
      id="contacto"
      style={{ background: 'var(--surface-mid)', borderTop: '1px solid rgba(201,168,76,0.1)' }}
    >
      <div className="section-container grid-auto-2" style={{ paddingTop: '10rem', paddingBottom: '10rem', gap: '5rem' }}>

        {/* Coluna esquerda */}
        <div>
          <motion.div
            ref={left.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: left.inView ? 1 : 0, y: left.inView ? 0 : 20 }}
            transition={{ duration: 0.42, delay: 0.2 }}
          >
            <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Test Drive
              </span>
            </div>

            {/* Word-split título */}
            <h2>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'white', lineHeight: 1.05, letterSpacing: '0.03em', overflow: 'hidden' }}>
                {titleLine1.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: left.inView ? 1 : 0, y: left.inView ? 0 : 24 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word.toUpperCase()}
                  </motion.span>
                ))}
              </span>
              <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--gold)', lineHeight: 1.1, overflow: 'hidden' }}>
                {titleLine2.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: left.inView ? 1 : 0, y: left.inView ? 0 : 24 }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h2>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(16px, 1.7vw, 20px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: '1.5rem' }}>
              Uma experiência que não pode ser descrita — apenas vivida. Agende o seu test drive sem compromisso.
            </p>
          </motion.div>

          {/* Includes */}
          <div ref={items.ref} className="flex flex-col gap-4 mt-10">
            {INCLUDES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: items.inView ? 1 : 0, y: items.inView ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontSize: '12px', flexShrink: 0, marginTop: '1px' }}>→</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coluna direita — caixa CTA */}
        <motion.div
          ref={right.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: right.inView ? 1 : 0, y: right.inView ? 0 : 20 }}
          transition={{ duration: 0.52, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
          style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.3)', padding: '2.5rem' }}
        >
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 500 }}>
            Agendar Test Drive
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.8vw, 34px)', color: 'white', marginBottom: '0.5rem', letterSpacing: '0.03em' }}>
            PORSCHE 911 CARRERA
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(16px, 1.7vw, 20px)', color: 'rgba(201,168,76,0.7)', marginBottom: '2rem' }}>
            Disponibilidade limitada
          </div>

          <motion.button
            whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 280, damping: 28 } }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              padding: '1.25rem',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'background 0.3s ease, color 0.3s ease',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
          >
            Agendar Agora
          </motion.button>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', textAlign: 'center', marginTop: '1rem' }}>
            RESPOSTA EM ATÉ 24 HORAS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
