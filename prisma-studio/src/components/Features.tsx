import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const FEATURE_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const CARD_ICONS = {
  storyboard:
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
  critiques:
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
  capsule:
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
};

const cardEase = [0.22, 1, 0.36, 1] as const;

interface CheckItemProps {
  text: string;
}

function CheckItem({ text }: CheckItemProps) {
  return (
    <li className="flex items-start gap-2">
      <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
      <span className="text-gray-400 text-xs sm:text-sm">{text}</span>
    </li>
  );
}

interface LearnMoreProps {
  href?: string;
}

function LearnMore({ href = '#' }: LearnMoreProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm hover:opacity-80 transition-opacity mt-auto"
    >
      <span>Learn more</span>
      <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
    </a>
  );
}

interface FeatureCardProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

function FeatureCard({ index, children, className = '' }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`rounded-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: cardEase,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="min-h-screen bg-black relative px-4 md:px-6 py-20 sm:py-28 md:py-36">
      {/* Noise background */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary creators.',
                  className: 'text-primary',
                },
              ]}
            />
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Built for pure vision. Powered by art.',
                  className: 'text-gray-500',
                },
              ]}
            />
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Card 1 — Video card */}
          <FeatureCard index={0} className="relative min-h-[280px] lg:min-h-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src={FEATURE_VIDEO_URL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <p className="text-sm sm:text-base font-medium" style={{ color: '#E1E0CC' }}>
                Your creative canvas.
              </p>
            </div>
          </FeatureCard>

          {/* Card 2 — Project Storyboard */}
          <FeatureCard index={1} className="bg-[#212121] p-4 sm:p-6 flex flex-col">
            <img
              src={CARD_ICONS.storyboard}
              alt="Storyboard icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-4"
            />
            <div className="mb-4">
              <span className="text-gray-500 text-[10px] sm:text-xs">01</span>
              <h3 className="text-primary text-sm sm:text-base font-medium">Project Storyboard.</h3>
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              <CheckItem text="Drag-and-drop scene planning" />
              <CheckItem text="Timeline-based editing" />
              <CheckItem text="Collaborative annotations" />
              <CheckItem text="Export to PDF & video" />
            </ul>
            <LearnMore />
          </FeatureCard>

          {/* Card 3 — Smart Critiques */}
          <FeatureCard index={2} className="bg-[#212121] p-4 sm:p-6 flex flex-col">
            <img
              src={CARD_ICONS.critiques}
              alt="Critiques icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-4"
            />
            <div className="mb-4">
              <span className="text-gray-500 text-[10px] sm:text-xs">02</span>
              <h3 className="text-primary text-sm sm:text-base font-medium">Smart Critiques.</h3>
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              <CheckItem text="AI-powered composition analysis" />
              <CheckItem text="Personalized creative notes" />
              <CheckItem text="Tool and plugin integrations" />
            </ul>
            <LearnMore />
          </FeatureCard>

          {/* Card 4 — Immersion Capsule */}
          <FeatureCard index={3} className="bg-[#212121] p-4 sm:p-6 flex flex-col">
            <img
              src={CARD_ICONS.capsule}
              alt="Capsule icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-4"
            />
            <div className="mb-4">
              <span className="text-gray-500 text-[10px] sm:text-xs">03</span>
              <h3 className="text-primary text-sm sm:text-base font-medium">Immersion Capsule.</h3>
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              <CheckItem text="Notification silencing & focus mode" />
              <CheckItem text="Ambient soundscapes for flow" />
              <CheckItem text="Schedule syncing & time blocks" />
            </ul>
            <LearnMore />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
