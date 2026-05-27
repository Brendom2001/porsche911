import NavBar              from '@/components/ui/NavBar';
import FrameSequence       from '@/components/ui/FrameSequence';
import HeroOverlays        from '@/components/sections/HeroOverlays';
import AutoridadeSection   from '@/components/sections/AutoridadeSection';
import VersoesSection      from '@/components/sections/VersoesSection';
import DiferenciaisSection from '@/components/sections/DiferenciaisSection';
import DepoimentosSection  from '@/components/sections/DepoimentosSection';
import TestDriveSection    from '@/components/sections/TestDriveSection';
import EscassezBanner      from '@/components/sections/EscassezBanner';
import SobreSection        from '@/components/sections/SobreSection';
import CTAFinal            from '@/components/sections/CTAFinal';
import FooterSection       from '@/components/sections/FooterSection';

/*
 * TOTAL_FRAMES: rode `python extract_frames.py` e atualize este número.
 * HEIGHT formula: Math.ceil(TOTAL_FRAMES / 24) * 100 + 'vh'
 */
const TOTAL_FRAMES = 192;
const HEIGHT       = '400vh';

export default function Home() {
  return (
    <main style={{ background: 'var(--black)' }}>
      <NavBar />

      <FrameSequence
        framesPath="/frames/loop"
        totalFrames={TOTAL_FRAMES}
        height={HEIGHT}
        id="hero"
      >
        <HeroOverlays />
        {/* Transição suave para o preto */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: '35%', background: 'linear-gradient(to bottom, transparent 0%, #080808 100%)' }}
        />
      </FrameSequence>

      <AutoridadeSection />
      <VersoesSection />
      <DiferenciaisSection />
      <DepoimentosSection />
      <TestDriveSection />
      <EscassezBanner />
      <SobreSection />
      <CTAFinal />
      <FooterSection />
    </main>
  );
}
