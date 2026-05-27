'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const CARDS = [
  {
    title: 'Motor traseiro',
    text: 'Uma ousadia de engenharia que se tornou assinatura.',
  },
  {
    title: 'Boxer 6 cilindros',
    text: 'Som, vibração e carácter inconfundíveis.',
  },
  {
    title: '60 anos inalterado',
    text: 'A silhueta mais reconhecível da história do automóvel.',
  },
];

function AnimBlock({
  children,
  delay = 0,
  inView,
}: {
  children: React.ReactNode;
  delay?: number;
  inView: boolean;
}) {
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ExperienceSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="heranca"
      style={{ background: '#0D0D0D', borderTop: '1px solid rgba(201,168,76,0.1)' }}
    >
      <div
        className="mx-auto px-6 md:px-20 lg:px-32 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        style={{ maxWidth: '1400px' }}
      >
        {/* Coluna esquerda */}
        <div>
          <AnimBlock inView={inView} delay={0}>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.5rem',
              }}
            >
              Herança
            </span>
          </AnimBlock>

          <AnimBlock inView={inView} delay={100}>
            <h2>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  fontWeight: 400,
                  color: 'white',
                  lineHeight: 1.1,
                }}
              >
                Mais que um carro.
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--gold)',
                  lineHeight: 1.1,
                  marginTop: '0.25rem',
                }}
              >
                Uma filosofia.
              </span>
            </h2>
          </AnimBlock>

          <AnimBlock inView={inView} delay={200}>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(16px, 1.7vw, 20px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.6)',
                marginTop: '2rem',
              }}
            >
              Seis décadas de obsessão pela condução pura. Cada detalhe do 911 existe
              por uma razão: fazer você sentir a estrada como nunca antes.
            </p>
          </AnimBlock>
        </div>

        {/* Coluna direita — cards */}
        <div className="flex flex-col gap-4">
          {CARDS.map(({ title, text }, i) => (
            <AnimBlock key={title} inView={inView} delay={100 + i * 100}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderTop: '1px solid rgba(201,168,76,0.1)',
                  borderRight: '1px solid rgba(201,168,76,0.1)',
                  borderBottom: '1px solid rgba(201,168,76,0.1)',
                  borderLeft: '3px solid var(--gold)',
                  padding: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </p>
              </div>
            </AnimBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
