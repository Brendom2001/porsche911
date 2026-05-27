'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const VERSOES = [
  {
    slug: 'carrera',
    imagem: '/images/911-carrera.png',
    nome: '911 Carrera',
    tag: 'O CLÁSSICO',
    desc: 'A expressão mais pura do 911. Performance equilibrada para o dia a dia.',
    specs: [
      { label: 'Potência',    valor: '385 cv'   },
      { label: '0–100 km/h', valor: '4,2 s'    },
      { label: 'Vel. Máx.',  valor: '293 km/h' },
    ],
    preco: 'A partir de €130.000',
    destaque: false,
  },
  {
    slug: 'carrera-s',
    imagem: '/images/911-carrera-s.png',
    nome: '911 Carrera S',
    tag: 'MAIS POPULAR',
    desc: 'O equilíbrio perfeito entre potência e requinte. A escolha dos entendidos.',
    specs: [
      { label: 'Potência',    valor: '450 cv'   },
      { label: '0–100 km/h', valor: '3,5 s'    },
      { label: 'Vel. Máx.',  valor: '308 km/h' },
    ],
    preco: 'A partir de €155.000',
    destaque: true,
  },
  {
    slug: 'turbo-s',
    imagem: '/images/911-turbo-s.png',
    nome: '911 Turbo S',
    tag: 'MÁXIMA PERFORMANCE',
    desc: 'O pináculo da engenharia Porsche. Para os que exigem o absoluto.',
    specs: [
      { label: 'Potência',    valor: '650 cv'   },
      { label: '0–100 km/h', valor: '2,7 s'    },
      { label: 'Vel. Máx.',  valor: '330 km/h' },
    ],
    preco: 'A partir de €250.000',
    destaque: false,
  },
];

type Versao = (typeof VERSOES)[number];
type MotionY = MotionValue<number>;

function VersionCard({ data, cardY, inView, delay, isSelected, onSelect }: {
  data: Versao;
  cardY: MotionY;
  inView: boolean;
  delay: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const { nome, tag, desc, specs, preco, destaque } = data;

  return (
    <motion.div style={{ y: cardY }}>
      <motion.div
        onClick={onSelect}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.4, delay }}
        whileHover={{
          y: isSelected ? 0 : -8,
          boxShadow: '0 20px 60px rgba(201,168,76,0.12)',
          transition: { type: 'spring', stiffness: 280, damping: 28 },
        }}
        style={{
          cursor: 'pointer',
          background: isSelected
            ? 'rgba(201,168,76,0.08)'
            : destaque ? 'rgba(201,168,76,0.05)' : 'rgba(255,255,255,0.02)',
          border: isSelected
            ? '1px solid rgba(201,168,76,0.65)'
            : `1px solid rgba(201,168,76,${destaque ? '0.3' : '0.12'})`,
          borderTop: `3px solid ${isSelected || destaque ? 'var(--gold)' : 'rgba(201,168,76,0.3)'}`,
          boxShadow: isSelected ? '0 0 40px rgba(201,168,76,0.12), inset 0 0 40px rgba(201,168,76,0.04)' : 'none',
          padding: '2rem',
          position: 'relative',
          height: '100%',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {destaque && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--gold)', color: 'var(--black)', fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.1em', padding: '0.2rem 0.65rem', fontWeight: 600 }}>
            MAIS POPULAR
          </div>
        )}

        {/* Indicador de seleção */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{ position: 'absolute', bottom: '1rem', right: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 6px rgba(201,168,76,0.8)' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '8px', letterSpacing: '0.2em', color: 'var(--gold)', fontWeight: 500 }}>SELECIONADO</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 500 }}>
          {tag}
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 30px)', color: 'white', marginBottom: '0.75rem', letterSpacing: '0.03em' }}>
          {nome.toUpperCase()}
        </div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '2rem' }}>
          {desc}
        </p>

        <div className="grid grid-cols-3" style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1.5rem', gap: '0.75rem' }}>
          {specs.map(({ label, valor }) => (
            <div key={label} className="flex flex-col gap-1">
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)' }}>
                {label}
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2vw, 22px)', color: 'white', lineHeight: 1, letterSpacing: '0.03em' }}>
                {valor}
              </span>
            </div>
          ))}
        </div>

        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--gold)', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)', fontWeight: 500 }}>
          {preco}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VersoesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const header     = useScrollReveal(0.1);
  const cards      = useScrollReveal(0.1);

  const [selected, setSelected] = useState('carrera-s');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const card0Y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const cardYs = [card0Y, card1Y, card2Y];

  const titleWords = 'Escolha a Sua 911'.split(' ');

  const selectedVersao = VERSOES.find(v => v.slug === selected);

  return (
    <section
      ref={sectionRef}
      id="versoes"
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface)', borderTop: '1px solid rgba(201,168,76,0.1)' }}
    >
      {/* Background image da versão selecionada */}
      <AnimatePresence mode="sync">
        <motion.div
          key={selected}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          aria-hidden
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 0,
            backgroundImage: `url('/images/911-${selected}.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </AnimatePresence>

      <div className="section-container" style={{ position: 'relative', zIndex: 1, paddingTop: '10rem', paddingBottom: '10rem' }}>

        {/* Header */}
        <div ref={header.ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: header.inView ? 1 : 0, y: header.inView ? 0 : 20 }}
            transition={{ duration: 0.42, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Versões
              </span>
              <div style={{ width: '24px', height: '1px', background: 'var(--gold)' }} />
            </div>
          </motion.div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: 'white', letterSpacing: '0.18em', overflow: 'hidden', textAlign: 'center', marginTop: '1rem' }}>
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

        {/* Cards */}
        <div ref={cards.ref} className="grid-auto-3" style={{ gap: '1.5rem', marginTop: '4rem', alignItems: 'start' }}>
          {VERSOES.map((versao, i) => (
            <VersionCard
              key={versao.nome}
              data={versao}
              cardY={cardYs[i]}
              inView={cards.inView}
              delay={0.1 + i * 0.12}
              isSelected={selected === versao.slug}
              onSelect={() => setSelected(versao.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
