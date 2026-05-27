export default function FooterSection() {
  return (
    <footer
      style={{ background: 'var(--surface)', borderTop: '1px solid rgba(201,168,76,0.1)' }}
    >
      <div className="section-container grid-auto-3" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', gap: '1.5rem', alignItems: 'center' }}>

        <div className="flex items-center gap-2">
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.3em', color: 'var(--gold)', fontWeight: 500 }}>
            PORSCHE
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'white', letterSpacing: '0.05em' }}>
            911
          </span>
        </div>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
          © 2024 PORSCHE 911 · TODOS OS DIREITOS RESERVADOS
        </p>

        <p className="md-text-right" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)' }}>
          PÁGINA CRIADA PARA FINS DEMONSTRATIVOS
        </p>
      </div>
    </footer>
  );
}
