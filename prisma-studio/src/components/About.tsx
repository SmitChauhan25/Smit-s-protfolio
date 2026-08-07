import { useRef } from 'react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

const ABOUT_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.';

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const chars = ABOUT_TEXT.split('');

  return (
    <section className="bg-black py-20 sm:py-28 md:py-36 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-3xl px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-28 text-center overflow-hidden">
        {/* Top label */}
        <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8 block">
          Visual arts
        </span>

        {/* Multi-style heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 sm:mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Marcus Chen,', className: 'font-normal' },
              { text: 'a self-taught director.', className: 'italic font-serif' },
              {
                text: 'I have skills in color grading, visual effects, and narrative design.',
                className: 'font-normal',
              },
            ]}
            containerClassName="text-primary"
          />
        </h2>

        {/* Scroll-linked paragraph */}
        <p
          ref={paragraphRef}
          className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#DEDBC8' }}
        >
          {chars.map((char, index) => (
            <AnimatedLetter
              key={index}
              char={char}
              index={index}
              totalChars={chars.length}
              scrollTarget={paragraphRef}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
