'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const DEPOIMENTOS = [
  {
    texto: 'Depois de 20 anos a conduzir o 911, percebo que não é um carro. É uma extensão de quem sou.',
    autor: 'Miguel R.',
    detalhe: '911 Carrera S owner · 8 anos',
  },
  {
    texto: 'A primeira vez que entrei numa curva rápida percebi o que a Porsche quis dizer com \'performance pura\'.',
    autor: 'Ana L.',
    detalhe: '911 Turbo owner · 3 anos',
  },
  {
    texto: 'Já conduzi muitos desportivos. O 911 é o único que me faz sorrir em cada semáforo.',
    autor: 'Carlos M.',
    detalhe: '911 Carrera owner · 5 anos',
  },
];

export default function DepoimentosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const header     = useScrollReveal(0.1);
  const cards      = useScrollReveal(0.1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax pré-calculado
  const card0Y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const cardYs = [card0Y, card1Y, card2Y];

  const titleWords = 'Quem Já Conduziu, Não Esquece.'.split(' ');

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--black)' }}
    >
      <div className="section-container" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>

        {/* Header */}
        <div ref={header.ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: header.inView ? 1 : 0, y: header.inView ? 0 : 20 }}
            transition={{ duration: 0.42, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Experiências
              </span>
              <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
            </div>
          </motion.div>

          {/* Word-split title */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 52px)', color: 'white', letterSpacing: '0.03em', overflow: 'hidden', textAlign: 'center' }}>
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: header.inView ? 1 : 0, y: header.inView ? 0 : 24 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word.toUpperCase()}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Cards com parallax */}
        <div ref={cards.ref} className="grid-auto-3" style={{ gap: '1.5rem', alignItems: 'start' }}>
          {DEPOIMENTOS.map(({ texto, autor, detalhe }, i) => (
            <motion.div key={autor} style={{ y: cardYs[i] }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: cards.inView ? 1 : 0, y: cards.inView ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 280, damping: 28 } }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderTop: '1px solid rgba(201,168,76,0.1)',
                  borderRight: '1px solid rgba(201,168,76,0.1)',
                  borderBottom: '1px solid rgba(201,168,76,0.1)',
                  borderLeft: '2px solid var(--gold)',
                  padding: '2rem',
                }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(17px, 1.8vw, 21px)', color: 'var(--cream)', lineHeight: 1.65 }}>
                  "{texto}"
                </p>
                <div style={{ width: '32px', height: '1px', background: 'var(--gold)', margin: '1.5rem 0' }} />
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'white', letterSpacing: '0.1em', fontWeight: 500 }}>
                  {autor}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(201,168,76,0.5)', marginTop: '0.25rem' }}>
                  {detalhe}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
