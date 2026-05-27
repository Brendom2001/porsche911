'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CounterProps {
  display: string;
  value: number | null;
  decimals?: number;
  suffix?: string;
}

function AnimatedCounter({ display, value, decimals = 0, suffix = '' }: CounterProps) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count  = useMotionValue(0);
  const formatted = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : String(Math.round(v))
  );

  useEffect(() => {
    if (inView && value !== null) {
      animate(count, value, { duration: 2, ease: 'easeOut' });
    }
  }, [inView, count, value]);

  if (value === null) return <span ref={ref}>{display}</span>;
  return (
    <span ref={ref}>
      <motion.span>{formatted}</motion.span>{suffix}
    </span>
  );
}

const NUMEROS = [
  { display: '60+',   value: 60,  decimals: 0, suffix: '+',  label: 'Anos de herança'          },
  { display: '1.1M+', value: 1.1, decimals: 1, suffix: 'M+', label: 'Unidades produzidas'      },
  { display: '#1',    value: null, decimals: 0, suffix: '',   label: 'Sports car mais icónico'  },
];

export default function AutoridadeSection() {
  const label   = useScrollReveal(0.2);
  const headline = useScrollReveal(0.2);
  const text    = useScrollReveal(0.2);
  const numeros = useScrollReveal(0.15);
  const quote   = useScrollReveal(0.2);

  return (
    <section
      id="autoridade"
      style={{ background: 'var(--black)' }}
    >
      <div className="section-container" style={{ paddingTop: 'clamp(4rem, 8vw, 10rem)', paddingBottom: 'clamp(4rem, 8vw, 10rem)' }}>

        {/* Label */}
        <motion.div
          ref={label.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: label.inView ? 1 : 0, y: label.inView ? 0 : 20 }}
          transition={{ duration: 0.42, delay: 0.2 }}
          style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1rem' }}
        >
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Desde 1963
          </span>
        </motion.div>

        {/* Linha dourada reveal */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: label.inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
          className="origin-left w-24 h-px mt-6 mb-12"
          style={{ background: 'var(--gold)' }}
        />

        {/* Grid */}
        <div className="grid-auto-2" style={{ gap: 'clamp(2rem, 5vw, 5rem)' }}>

          {/* Esquerda */}
          <div>
            <motion.div
              ref={headline.ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: headline.inView ? 1 : 0, y: headline.inView ? 0 : 20 }}
              transition={{ duration: 0.52, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              <h2>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 80px)', color: 'white', lineHeight: 1, letterSpacing: '0.03em' }}>
                  UMA LENDA
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 64px)', fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px var(--gold)', lineHeight: 1.1, marginTop: '0.25rem' }}>
                  Intemporal.
                </span>
              </h2>
            </motion.div>

            <motion.p
              ref={text.ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: text.inView ? 1 : 0, y: text.inView ? 0 : 20 }}
              transition={{ duration: 0.42, delay: 0.2 }}
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.75, color: 'rgba(240,237,230,0.65)', marginTop: '2rem' }}
            >
              Desde 1963, o Porsche 911 define o que significa conduzir.
              Uma silhueta que não precisou de revolução — precisou de
              evolução milimétrica, geração após geração.
            </motion.p>

            <div style={{ width: '64px', height: '1px', background: 'var(--gold)', marginTop: '2.5rem' }} />
          </div>

          {/* Direita */}
          <div className="flex flex-col justify-between">
            <div ref={numeros.ref} className="flex flex-col" style={{ gap: '2rem' }}>
              {NUMEROS.map(({ display, value, decimals, suffix, label: lbl }, i) => (
                <motion.div
                  key={lbl}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: numeros.inView ? 1 : 0, y: numeros.inView ? 0 : 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 6vw, 76px)', color: 'var(--gold)', lineHeight: 1, letterSpacing: '0.03em' }}>
                    <AnimatedCounter display={display} value={value} decimals={decimals} suffix={suffix} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '0.4rem' }}>
                    {lbl}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              ref={quote.ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: quote.inView ? 1 : 0, y: quote.inView ? 0 : 20 }}
              transition={{ duration: 0.42, delay: 0.2 }}
              style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem', marginTop: '2.5rem' }}
            >
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(17px, 1.8vw, 22px)', color: 'var(--cream)', lineHeight: 1.6 }}>
                "Não redesenhamos o 911. Simplesmente deixamos que ele se tornasse perfeito."
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
