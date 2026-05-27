'use client';
import { useScrollProgress } from '@/components/ui/FrameSequence';

function lerp(v: number, inMin: number, inMax: number, outMin = 0, outMax = 1): number {
  if (v <= inMin) return outMin;
  if (v >= inMax) return outMax;
  return outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);
}

function opacity(p: number, fadeIn: number, hold: number, fadeOut: number): number {
  if (p < fadeIn)  return lerp(p, fadeIn - 0.06, fadeIn);
  if (p < hold)    return 1;
  if (p > fadeOut) return 0;
  return 1 - lerp(p, hold, fadeOut);
}

export default function HeroOverlays() {
  const p = useScrollProgress(); // 0 → 1

  /* Phase 1: 0% → 32%  (brand + model number) */
  const phase1 = opacity(p, 0, 0.25, 0.36);

  /* Phase 2: 28% → 62%  (carrera tagline) */
  const phase2 = opacity(p, 0.28, 0.50, 0.63);

  /* Phase 3: 60% → 88%  (spec callout) */
  const phase3 = opacity(p, 0.60, 0.75, 0.89);

  /* Scroll indicator: visible at start only */
  const scrollHint = lerp(p, 0.0, 0.12, 1, 0);

  return (
    <div className="absolute inset-0 select-none pointer-events-none overflow-hidden">

      {/* ── PHASE 1 — Porsche 911 ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ opacity: phase1, transition: 'opacity 0.1s linear' }}
      >
        {/* "PORSCHE" mono label */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(9px, 1.2vw, 13px)',
            letterSpacing: '0.55em',
            color: 'var(--gold)',
            marginBottom: '0.4em',
            opacity: 0.9,
          }}
        >
          PORSCHE
        </div>

        {/* Giant "911" */}
        <div
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(100px, 22vw, 240px)',
            fontWeight: 700,
            lineHeight: 0.85,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
            textShadow: '0 2px 80px rgba(0,0,0,0.7)',
          }}
        >
          911
        </div>

        {/* Thin gold line */}
        <div
          style={{
            width: 'clamp(30px, 5vw, 56px)',
            height: '1px',
            background: 'var(--gold)',
            marginTop: '1.2em',
            opacity: 0.7,
          }}
        />
      </div>

      {/* ── PHASE 2 — Carrera ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-end"
        style={{
          opacity: phase2,
          transition: 'opacity 0.1s linear',
          paddingBottom: 'clamp(60px, 10vh, 110px)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontSize: 'clamp(44px, 8vw, 96px)',
            fontWeight: 300,
            color: 'var(--cream)',
            letterSpacing: '0.06em',
            lineHeight: 1,
          }}
        >
          Carrera
        </div>
        <div
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(13px, 1.5vw, 18px)',
            fontWeight: 400,
            color: 'rgba(240,237,230,0.55)',
            letterSpacing: '0.18em',
            marginTop: '0.8em',
            textTransform: 'uppercase',
          }}
        >
          A Essência da Perfeição
        </div>
      </div>

      {/* ── PHASE 3 — Spec callout ── */}
      <div
        className="absolute inset-0 flex items-center"
        style={{
          opacity: phase3,
          transition: 'opacity 0.1s linear',
          paddingLeft: 'clamp(24px, 6vw, 96px)',
        }}
      >
        <div className="flex flex-col gap-4">
          {/* Vertical gold bar */}
          <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '2px',
                height: '80px',
                background: 'linear-gradient(to bottom, var(--gold), transparent)',
                flexShrink: 0,
                marginTop: '4px',
              }}
            />
            <div className="flex flex-col gap-3">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(9px, 1vw, 11px)',
                  color: 'var(--gold)',
                  letterSpacing: '0.3em',
                }}
              >
                MOTOR BOXER 6 CILINDROS
              </div>
              {[
                ['3.0 L', 'Cilindrada'],
                ['450 cv', 'Potência'],
                ['0 – 100 km/h', '3,3 seg'],
              ].map(([val, label]) => (
                <div key={val} className="flex items-baseline gap-2">
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(22px, 3.5vw, 42px)',
                      fontWeight: 600,
                      color: 'var(--cream)',
                      lineHeight: 1,
                    }}
                  >
                    {val}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(9px, 1vw, 11px)',
                      color: 'rgba(240,237,230,0.45)',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce"
        style={{ opacity: scrollHint, transition: 'opacity 0.3s' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '0.35em',
            color: 'rgba(240,237,230,0.4)',
          }}
        >
          SCROLL
        </span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
          <rect
            x="5.5" y="4" width="3" height="5" rx="1.5"
            fill="var(--gold)"
            style={{ opacity: 0.7 }}
          />
        </svg>
      </div>
    </div>
  );
}
