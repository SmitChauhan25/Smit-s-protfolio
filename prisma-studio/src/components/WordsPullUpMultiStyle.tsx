import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // Flatten all segments into individual words while preserving per-word className
  const allWords: { word: string; className: string }[] = [];
  segments.forEach((segment) => {
    const words = segment.text.split(' ').filter(Boolean);
    words.forEach((word) => {
      allWords.push({ word, className: segment.className || '' });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center gap-x-[0.25em] ${containerClassName}`}>
      {allWords.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block pr-2 -mr-2 pb-2 -mb-2">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
