'use client';
import { useScroll, motion } from 'framer-motion';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, background: 'var(--gold)' }}
      className="fixed top-0 left-0 right-0 h-px origin-left z-[100]"
    />
  );
}
