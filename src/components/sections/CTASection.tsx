'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

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

export default function CTASection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="contacto"
      className="text-center"
      style={{ background: 'var(--black)', padding: '10rem 1.5rem' }}
    >
      <AnimBlock inView={inView} delay={0}>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '2rem',
          }}
        >
          Contacto
        </span>
      </AnimBlock>

      <AnimBlock inView={inView} delay={100}>
        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 400,
            color: 'white',
            lineHeight: 1.15,
          }}
        >
          Pronto para
          <br />
          sentir a diferença?
        </h2>
      </AnimBlock>

      <AnimBlock inView={inView} delay={200}>
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '1.5rem',
          }}
        >
          Agende seu test drive. Sem compromisso.
        </p>
      </AnimBlock>

      <AnimBlock inView={inView} delay={300}>
        <button
          style={{
            display: 'inline-block',
            marginTop: '3rem',
            padding: '1.25rem 3rem',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = 'var(--gold)';
            el.style.color = 'var(--black)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = 'transparent';
            el.style.color = 'var(--gold)';
          }}
        >
          Agendar Test Drive
        </button>
      </AnimBlock>

      <AnimBlock inView={inView} delay={400}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.2)',
            marginTop: '1.5rem',
          }}
        >
          PORSCHE 911 · SAPIRANGA · RS
        </p>
      </AnimBlock>
    </section>
  );
}
