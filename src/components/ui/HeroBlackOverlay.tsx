'use client';
import { useScrollProgress } from '@/components/ui/FrameSequence';

export default function HeroBlackOverlay() {
  const p = useScrollProgress();
  // opacity 1 em p=0, fade até 0 em p=0.07 (~28vh de scroll no total de 400vh)
  const opacity = p <= 0 ? 1 : p >= 0.07 ? 0 : 1 - p / 0.07;

  if (opacity <= 0) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: '#080808', opacity }}
    />
  );
}
