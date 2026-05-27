'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal(amount = 0.2) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const inView = useInView(ref, { once: true, amount });
  return { ref, inView };
}
