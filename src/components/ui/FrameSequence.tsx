'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useScrollFrame } from '@/hooks/useScrollFrame';

export const ScrollProgressContext = createContext(0);
export const useScrollProgress = () => useContext(ScrollProgressContext);

interface FrameSequenceProps {
  framesPath:    string;
  framePrefix?:  string;
  zeroPad?:      number;
  ext?:          string;
  totalFrames:   number;
  height?:       string;
  children?:     React.ReactNode;
  id?:           string;
}

export default function FrameSequence({
  framesPath,
  framePrefix = 'frame_',
  zeroPad     = 4,
  ext         = 'webp',
  totalFrames,
  height      = '500vh',
  children,
  id,
}: FrameSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imagesRef    = useRef<HTMLImageElement[]>([]);
  const isReadyRef   = useRef(false);

  const currentFrame = useScrollFrame(containerRef, totalFrames);
  const progress     = totalFrames > 1 ? currentFrame / (totalFrames - 1) : 0;

  const getFrameUrl = (index: number) => {
    const padded = String(index + 1).padStart(zeroPad, '0');
    return `${framesPath}/${framePrefix}${padded}.${ext}`;
  };

  const syncCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect   = canvas.getBoundingClientRect();
    canvas.width  = rect.width  * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
  };

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const img    = imagesRef.current[frameIndex];
    if (!canvas || !img?.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr       = window.devicePixelRatio;
    const cw        = canvas.width;
    const ch        = canvas.height;
    const imgRatio  = img.naturalWidth / img.naturalHeight;
    const canRatio  = cw / ch;

    let drawW = 0, drawH = 0, offsetX = 0, offsetY = 0;
    if (imgRatio > canRatio) {
      drawH   = ch;
      drawW   = ch * imgRatio;
      offsetX = (cw - drawW) / 2;
    } else {
      drawW   = cw;
      drawH   = cw / imgRatio;
      offsetY = (ch - drawH) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  };

  useEffect(() => {
    const images: HTMLImageElement[] = Array.from({ length: totalFrames }, () => new Image());
    imagesRef.current = images;

    const BATCH1_END = Math.min(32, totalFrames);
    let loaded = 0;

    for (let i = 0; i < BATCH1_END; i++) {
      images[i].onload = () => {
        loaded++;
        if (loaded === 1) { syncCanvasSize(); drawFrame(0); }
        if (loaded === BATCH1_END) { isReadyRef.current = true; drawFrame(currentFrame); }
      };
      images[i].src = getFrameUrl(i);
    }

    const loadRest = () => {
      for (let i = BATCH1_END; i < totalFrames; i++) {
        images[i].src = getFrameUrl(i);
      }
    };

    if ('requestIdleCallback' in window) requestIdleCallback(loadRest);
    else setTimeout(loadRest, 200);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalFrames, framesPath]);

  useEffect(() => {
    if (!isReadyRef.current) return;
    requestAnimationFrame(() => drawFrame(currentFrame));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFrame]);

  useEffect(() => {
    const onResize = () => { syncCanvasSize(); drawFrame(currentFrame); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFrame]);

  return (
    <ScrollProgressContext.Provider value={progress}>
      <section ref={containerRef} id={id} style={{ height }} className="relative w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ imageRendering: 'auto' }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, transparent 25%, transparent 72%, rgba(8,8,8,0.75) 100%)',
            }}
          />
          {children}
        </div>
      </section>
    </ScrollProgressContext.Provider>
  );
}
