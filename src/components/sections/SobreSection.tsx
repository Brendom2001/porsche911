'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SPECS = [
  { label: 'Cilindrada',   valor: '2.981cc'  },
  { label: 'Potência',     valor: '450 cv'   },
  { label: 'Torque',       valor: '530 Nm'   },
  { label: '0–100',        valor: '3,3 s'    },
  { label: 'Vel. Máx.',    valor: '308 km/h' },
  { label: 'Arquitectura', valor: 'Boxer 6'  },
];

const TIMELINE = [
  { year: '1963', desc: 'Nascimento',     highlight: true  },
  { year: '1973', desc: 'Carrera RS 2.7', highlight: false },
  { year: '1989', desc: '964 AWD',        highlight: false },
  { year: '2011', desc: '991 PDK',        highlight: false },
  { year: '2019', desc: '992 PASM',       highlight: false },
  { year: '2026', desc: 'Série atual',    highlight: true  },
];

export default function SobreSection() {
  const label    = useScrollReveal(0.1);
  const left     = useScrollReveal(0.1);
  const right    = useScrollReveal(0.1);
  const timeline = useScrollReveal(0.1);

  return (
    <section
      id="sobre"
      className="relative overflow-hidden"
      style={{ background: 'var(--black)', borderTop: '1px solid rgba(201,168,76,0.08)' }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        style={{ position: 'absolute', right: 0, bottom: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(180px, 20vw, 280px)', color: 'transparent', WebkitTextStroke: '2px rgba(201,168,76,0.05)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '0.05em' }}
      >
        911
      </div>

      <div className="section-container relative" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>

        {/* Label */}
        <motion.div
          ref={label.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: label.inView ? 1 : 0, y: label.inView ? 0 : 20 }}
          transition={{ duration: 0.42, delay: 0.2 }}
          className="mb-16"
          style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1rem' }}
        >
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            O Modelo
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid-auto-2" style={{ gap: '5rem' }}>

          {/* Coluna esquerda */}
          <div ref={left.ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: left.inView ? 1 : 0, y: left.inView ? 0 : 20 }}
              transition={{ duration: 0.52, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              <h2>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'white', lineHeight: 1, letterSpacing: '0.03em' }}>
                  911 CARRERA S
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--gold)', marginTop: '0.5rem' }}>
                  992.2 · 2024
                </span>
              </h2>
            </motion.div>

            {/* Timeline */}
            <div ref={timeline.ref} className="mt-12 relative">
              {/* Linha fantasma */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(1em + 8px)', height: '1px', background: 'rgba(201,168,76,0.1)' }} />
              {/* Linha dourada animada */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: timeline.inView ? 1 : 0 }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                style={{ position: 'absolute', left: 0, right: 0, top: 'calc(1em + 8px)', height: '1px', background: 'linear-gradient(to right, var(--gold), rgba(201,168,76,0.5))', transformOrigin: 'left', zIndex: 0 }}
              />

              {/* Dot viajante — width 0%→100%, dot fica no flex-end */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(1em + 4px)', height: '9px', zIndex: 3, overflow: 'visible', display: 'flex', alignItems: 'center' }}>
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: timeline.inView ? '100%' : '0%' }}
                  transition={{ duration: 1.4, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  style={{ height: '1px', overflow: 'visible', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
                >
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, boxShadow: '0 0 14px rgba(201,168,76,0.9)' }} />
                </motion.div>
              </div>

              <div className="flex justify-between">
                {TIMELINE.map(({ year, desc, highlight }, i) => {
                  const dotDelay = 0.3 + (i / (TIMELINE.length - 1)) * 1.4;
                  return (
                    <div key={year} className="flex flex-col items-center" style={{ gap: '8px' }}>
                      <motion.span
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: timeline.inView ? 1 : 0, y: timeline.inView ? 0 : -8 }}
                        transition={{ duration: 0.35, delay: dotDelay }}
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', lineHeight: 1, color: highlight ? 'var(--gold)' : 'rgba(201,168,76,0.5)', fontWeight: 500 }}
                      >
                        {year}
                      </motion.span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: timeline.inView ? 1 : 0 }}
                        transition={{ duration: 0.25, delay: dotDelay, ease: 'easeOut' }}
                        style={{ width: highlight ? '6px' : '4px', height: highlight ? '6px' : '4px', borderRadius: '50%', background: highlight ? 'var(--gold)' : 'rgba(201,168,76,0.6)', position: 'relative', zIndex: 1, boxShadow: highlight ? '0 0 8px rgba(201,168,76,0.5)' : 'none' }}
                      />
                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: timeline.inView ? 1 : 0, y: timeline.inView ? 0 : 8 }}
                        transition={{ duration: 0.35, delay: dotDelay + 0.1 }}
                        className="hidden sm:block text-center"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.4 }}
                      >
                        {desc}
                      </motion.span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Coluna direita */}
          <div ref={right.ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: right.inView ? 1 : 0, y: right.inView ? 0 : 20 }}
              transition={{ duration: 0.42, delay: 0.2 }}
              className="grid grid-cols-3"
              style={{ border: '1px solid rgba(201,168,76,0.15)' }}
            >
              {SPECS.map(({ label: lbl, valor }, i) => (
                <div
                  key={lbl}
                  style={{
                    padding: '1.25rem',
                    borderRight: i % 3 !== 2 ? '1px solid rgba(201,168,76,0.12)' : 'none',
                    borderBottom: i < 3 ? '1px solid rgba(201,168,76,0.12)' : 'none',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', marginBottom: '0.4rem' }}>
                    {lbl}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2vw, 24px)', color: 'white', lineHeight: 1, letterSpacing: '0.03em' }}>
                    {valor}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: right.inView ? 1 : 0, y: right.inView ? 0 : 20 }}
              transition={{ duration: 0.42, delay: 0.35 }}
              style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem', marginTop: '2rem' }}
            >
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(17px, 1.8vw, 22px)', color: 'var(--cream)', lineHeight: 1.65 }}>
                "Mais de 60 anos a aperfeiçoar a mesma ideia. Porque algumas ideias simplesmente não precisam de ser substituídas."
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
