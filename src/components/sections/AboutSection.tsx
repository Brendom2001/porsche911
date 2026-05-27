'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const SPECS = [
  { label: 'Cilindrada',   value: '2.981cc'  },
  { label: 'Potência',     value: '450cv'     },
  { label: 'Torque',       value: '530 Nm'    },
  { label: '0–100 km/h',   value: '3,3s'      },
  { label: 'Vel. Máxima',  value: '308 km/h'  },
  { label: 'Arquitectura', value: 'Boxer 6'   },
];

const TIMELINE = [
  { year: '1963', desc: 'Nascimento',     highlight: true  },
  { year: '1973', desc: 'Carrera RS 2.7', highlight: false },
  { year: '1989', desc: '964 – AWD',      highlight: false },
  { year: '2011', desc: '991 – PDK',      highlight: false },
  { year: '2019', desc: '992 – PASM',     highlight: false },
  { year: '2024', desc: 'Série atual',    highlight: true  },
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

export default function AboutSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative overflow-hidden"
      style={{ background: 'var(--black)', borderTop: '1px solid rgba(201,168,76,0.15)' }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none select-none"
        style={{
          position: 'absolute',
          right: '-20px',
          bottom: 0,
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(180px, 20vw, 280px)',
          fontWeight: 800,
          color: 'transparent',
          WebkitTextStroke: '2px rgba(201,168,76,0.05)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        911
      </div>

      <div
        className="relative mx-auto px-6 md:px-20 lg:px-32 py-32"
        style={{ maxWidth: '1400px' }}
      >
        {/* Label */}
        <AnimBlock inView={inView} delay={0}>
          <div
            className="mb-16"
            style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1rem' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              O Modelo
            </span>
          </div>
        </AnimBlock>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Coluna esquerda — headline + texto */}
          <div>
            <AnimBlock inView={inView} delay={100}>
              <h2>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(42px, 6vw, 76px)',
                    fontWeight: 400,
                    color: 'white',
                    lineHeight: 1,
                  }}
                >
                  Uma Lenda
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(42px, 6vw, 76px)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: 'transparent',
                    WebkitTextStroke: '1px #C9A84C',
                    lineHeight: 1,
                    marginTop: '0.35rem',
                  }}
                >
                  Intemporal
                </span>
              </h2>
            </AnimBlock>

            <AnimBlock inView={inView} delay={200}>
              <div className="mt-12" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '48px', height: '1px', background: 'var(--gold)' }} />
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(16px, 1.7vw, 20px)',
                    lineHeight: 1.75,
                    color: 'rgba(240,237,230,0.65)',
                  }}
                >
                  Desde 1963, o Porsche 911 define o que significa conduzir. Uma silhueta que não
                  precisou de revolução — precisou de evolução milimétrica, geração após geração,
                  até atingir uma forma que parece inevitável.
                </p>
              </div>
            </AnimBlock>
          </div>

          {/* Coluna direita — blockquote + specs */}
          <div>
            <AnimBlock inView={inView} delay={100}>
              <blockquote
                style={{
                  borderLeft: '2px solid var(--gold)',
                  paddingLeft: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    color: 'var(--cream)',
                    lineHeight: 1.6,
                  }}
                >
                  "Não redesenhamos o 911. Simplesmente deixamos que ele se tornasse perfeito."
                </p>
              </blockquote>
            </AnimBlock>

            <AnimBlock inView={inView} delay={200}>
              <div
                className="grid grid-cols-3 pt-10"
                style={{
                  gap: '2rem 2rem',
                  borderTop: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                {SPECS.map(({ label, value }) => (
                  <div key={label} className="flex flex-col">
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(201,168,76,0.5)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: 'clamp(20px, 2.2vw, 28px)',
                        fontWeight: 400,
                        color: 'white',
                        lineHeight: 1.1,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </AnimBlock>
          </div>
        </div>

        {/* Timeline */}
        <AnimBlock inView={inView} delay={300}>
          <div className="mt-24 relative">
            {/* Linha base alinhada com os dots */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 'calc(1.1em + 8px)',
                height: '1px',
                background: 'rgba(201,168,76,0.2)',
              }}
            />
            <div className="flex justify-between">
              {TIMELINE.map(({ year, desc, highlight }) => (
                <div
                  key={year}
                  className="flex flex-col items-center"
                  style={{ gap: '8px' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      lineHeight: 1,
                      letterSpacing: '0.05em',
                      color: highlight ? 'var(--gold)' : 'rgba(201,168,76,0.5)',
                    }}
                  >
                    {year}
                  </span>
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      position: 'relative',
                      zIndex: 1,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="hidden sm:block text-center"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      letterSpacing: '0.05em',
                      color: 'rgba(255,255,255,0.3)',
                      lineHeight: 1.4,
                    }}
                  >
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimBlock>
      </div>
    </section>
  );
}
