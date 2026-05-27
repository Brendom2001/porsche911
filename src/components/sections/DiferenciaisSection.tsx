'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const DIFERENCIAIS = [
  {
    numero: '01',
    titulo: 'Motor Traseiro',
    desc: 'Uma ousadia de engenharia que se tornou assinatura. O boxer 6 atrás do eixo traseiro cria uma dinâmica impossível de replicar.',
  },
  {
    numero: '02',
    titulo: 'Boxer 6 Cilindros',
    desc: 'Som, vibração e carácter inconfundíveis. Um motor que comunica com o condutor através de cada curva.',
  },
  {
    numero: '03',
    titulo: '60 Anos Inalterado',
    desc: 'A silhueta mais reconhecível da história do automóvel. Evoluiu sem perder a alma — um feito único na indústria.',
  },
  {
    numero: '04',
    titulo: 'PDK de 8 Velocidades',
    desc: 'Caixas automáticas que pensam antes de você. Mudanças em 80 milissegundos, resposta imediata em cada aceleração.',
  },
];

export default function DiferenciaisSection() {
  const header  = useScrollReveal(0.1);
  const content = useScrollReveal(0.1);

  return (
    <section
      id="experiencia"
      style={{ background: '#0D0D0D', borderTop: '1px solid rgba(201,168,76,0.08)' }}
    >
      <div className="section-container" style={{ paddingTop: 'clamp(4rem, 8vw, 10rem)', paddingBottom: 'clamp(4rem, 8vw, 10rem)' }}>

        {/* Header grid */}
        <div ref={header.ref} className="grid-auto-2" style={{ gap: '3rem', marginBottom: '1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: header.inView ? 1 : 0, y: header.inView ? 0 : 20 }}
            transition={{ duration: 0.52, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Por que o 911
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'white', lineHeight: 1.05, letterSpacing: '0.03em' }}>
              MAIS QUE UM CARRO.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: header.inView ? 1 : 0, y: header.inView ? 0 : 20 }}
            transition={{ duration: 0.42, delay: 0.35 }}
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(16px, 1.7vw, 20px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, alignSelf: 'end' }}
          >
            Seis décadas de obsessão pela condução pura. Cada detalhe existe por uma razão.
          </motion.p>
        </div>

        {/* Linha reveal após título */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: header.inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          className="origin-left w-24 h-px mb-16"
          style={{ background: 'var(--gold)' }}
        />

        {/* Diferenciais com linhas sequenciais */}
        <div ref={content.ref} className="flex flex-col">
          {DIFERENCIAIS.map(({ numero, titulo, desc }, i) => (
            <div key={numero}>
              <div className="grid" style={{ gridTemplateColumns: '80px 1fr', gap: '2rem', paddingTop: 'clamp(1.5rem, 3vw, 3.5rem)', paddingBottom: 'clamp(1.5rem, 3vw, 3.5rem)' }}>

                {/* Número — entra da esquerda */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: content.inView ? 1 : 0, x: content.inView ? 0 : -30 }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.76, 0, 0.24, 1] }}
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5vw, 64px)', color: 'rgba(201,168,76,0.2)', lineHeight: 1, letterSpacing: '0.03em' }}
                >
                  {numero}
                </motion.div>

                {/* Conteúdo — entra da direita */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: content.inView ? 1 : 0, x: content.inView ? 0 : 30 }}
                  transition={{ duration: 0.55, delay: 0.18 + i * 0.12, ease: [0.76, 0, 0.24, 1] }}
                >
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'white', marginBottom: '0.75rem', fontWeight: 500 }}>
                    {titulo}
                  </div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(16px, 1.7vw, 20px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                    {desc}
                  </p>
                </motion.div>
              </div>

              {/* Linha dourada sequencial */}
              {i < DIFERENCIAIS.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: content.inView ? 1 : 0 }}
                  transition={{ duration: 0.7, delay: 0.28 + i * 0.12, ease: [0.76, 0, 0.24, 1] }}
                  className="origin-left w-full h-px"
                  style={{ background: 'rgba(201,168,76,0.2)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
