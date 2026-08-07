
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollTarget: React.RefObject<HTMLElement | null>;
}

export default function AnimatedLetter({
  char,
  index,
  totalChars,
  scrollTarget,
}: AnimatedLetterProps) {
  const charProgress = index / totalChars;

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start 0.8', 'end 0.2'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
}
