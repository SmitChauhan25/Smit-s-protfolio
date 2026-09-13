import { motion } from 'framer-motion';
import { ArrowRight, Check, Briefcase, Calendar, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import WordsPullUp from '../components/WordsPullUp';
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle';
import AnimatedLetter from '../components/AnimatedLetter';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';
const FEATURE_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const ABOUT_TEXT =
  "Third-year B.Tech student in Electronics & Computer Science (via diploma lateral entry) with hands-on experience building full-stack web applications and SQL-backed web apps using Flask and PHP, alongside freelance experience spanning UI/UX design, project management, and software testing. I enjoy taking projects from database design to working interfaces while continuously building practical projects alongside my coursework.";

const customEase = [0.16, 1, 0.3, 1] as const;
const cardEase = [0.22, 1, 0.36, 1] as const;

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
      <span className="text-gray-400 text-xs sm:text-sm">{text}</span>
    </li>
  );
}

function FeatureCard({ index, children, className = '' }: { index: number; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      className={`rounded-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: cardEase }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const chars = ABOUT_TEXT.split('');

  return (
    <>
      {/* HERO SECTION */}
      <section className="h-screen p-4 md:p-6">
        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline src={HERO_VIDEO_URL} />
          <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
            <div className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-12 lg:col-span-8">
                <h1 className="text-[17vw] sm:text-[20vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]" style={{ color: '#E1E0CC' }}>
                  <WordsPullUp text="Smit" showAsterisk />
                </h1>
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 pb-1 lg:pb-2">
                <motion.p className="text-white/90 text-xs sm:text-sm md:text-base" style={{ lineHeight: 1.2 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: customEase }}>
                  I'm a full-stack developer and computer science engineer bound by passion and hunger to unlock potential through code and unique perspectives.
                </motion.p>
                <motion.a href="https://www.linkedin.com/in/smit-chauhan-5b22a9291/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 hover:gap-3 bg-white rounded-full pl-5 pr-1.5 py-1.5 transition-all duration-300 w-fit" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease: customEase }}>
                  <span className="text-black font-medium text-sm sm:text-base">Join the lab</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-black py-20 sm:py-28 md:py-36 px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-3xl px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-28 text-center overflow-hidden">
          <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8 block">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 sm:mb-16 md:mb-20">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'I am Smit Chauhan,', className: 'font-normal' },
                { text: 'an Electronics & Computer Science Engineer.', className: 'italic font-serif' },
                { text: 'I build full-stack web applications.', className: 'font-normal' },
              ]}
              containerClassName="text-primary"
            />
          </h2>
          <p ref={paragraphRef} className="text-white mix-blend-difference text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {chars.map((char, index) => (
              <AnimatedLetter key={index} char={char} index={index} totalChars={chars.length} scrollTarget={paragraphRef} />
            ))}
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-black py-16 sm:py-24 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
            <div>
              <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4 block">
                Professional Background
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-primary">
                Work Experience.
              </h2>
            </div>
            <Link
              to="/experience"
              className="group inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium"
            >
              <span>View detailed experience</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            className="bg-[#101010] border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                  Freelance
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  2026
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  3–6 months
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                <Sparkles className="w-3 h-3 text-primary" />
                Multiple Clients & Startups
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-primary mb-2">
              Freelance UI/UX Designer, Project Manager & Software Tester
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-3xl leading-relaxed">
              Multiple Clients (Direct Clients, Referrals & Local Businesses/Startups). Delivered end-to-end client projects spanning wireframing & prototyping, functional/manual software testing, sprint timelines, and technical problem solving.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/5">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-white/15 transition-colors">
                <h4 className="text-primary font-medium text-sm mb-1">UI/UX Design</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Wireframes, interactive mockups, and clean user-centric layouts.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-white/15 transition-colors">
                <h4 className="text-primary font-medium text-sm mb-1">Project Management</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Timeline planning, stakeholder communication, and on-time delivery.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-white/15 transition-colors">
                <h4 className="text-primary font-medium text-sm mb-1">Software Testing</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Functional and manual QA to catch bugs and verify reliability.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-white/15 transition-colors">
                <h4 className="text-primary font-medium text-sm mb-1">Problem Solving</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Analytical debugging and overcoming technical bottlenecks.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS & CTA SECTION */}
      <section className="bg-black relative px-4 md:px-6 pb-24 sm:pb-32 pt-10">
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto mb-32 sm:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
            {/* Video Card */}
            <FeatureCard index={0} className="relative min-h-[280px] lg:min-h-0">
              <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline src={FEATURE_VIDEO_URL} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-sm sm:text-base font-medium" style={{ color: '#E1E0CC' }}>My Skills &rarr;</p>
              </div>
            </FeatureCard>

            {/* Languages & Fundamentals */}
            <FeatureCard index={1} className="bg-[#212121] p-4 sm:p-6 flex flex-col">
              <div className="mb-4 mt-6">
                <span className="text-gray-500 text-[10px] sm:text-xs">01</span>
                <h3 className="text-primary text-sm sm:text-base font-medium">Languages & Core.</h3>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                <CheckItem text="Python, C, C++" />
                <CheckItem text="Java, JavaScript" />
                <CheckItem text="PHP, HTML, CSS" />
                <CheckItem text="Data Structures & Algorithms" />
                <CheckItem text="Object Oriented Programming" />
              </ul>
            </FeatureCard>

            {/* Databases & Networking */}
            <FeatureCard index={2} className="bg-[#212121] p-4 sm:p-6 flex flex-col">
              <div className="mb-4 mt-6">
                <span className="text-gray-500 text-[10px] sm:text-xs">02</span>
                <h3 className="text-primary text-sm sm:text-base font-medium">Databases & Web.</h3>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                <CheckItem text="MongoDB (NoSQL)" />
                <CheckItem text="MySQL (Relational)" />
                <CheckItem text="Firebase" />
                <CheckItem text="Computer Networks" />
                <CheckItem text="5G Network Architecture" />
              </ul>
            </FeatureCard>

            {/* Certifications */}
            <FeatureCard index={3} className="bg-[#212121] p-4 sm:p-6 flex flex-col">
              <div className="mb-4 mt-6">
                <span className="text-gray-500 text-[10px] sm:text-xs">03</span>
                <h3 className="text-primary text-sm sm:text-base font-medium">Certifications.</h3>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                <CheckItem text="Learning Python (Infosys Springboard)" />
                <CheckItem text="JavaScript Essentials (Cisco Academy)" />
                <CheckItem text="C++ Fundamentals (Infosys Springboard)" />
                <CheckItem text="Git & GitHub" />
              </ul>
            </FeatureCard>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-normal mb-6 text-primary tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            Let's build something together.
          </motion.h2>
          <motion.p 
            className="text-white mix-blend-difference mb-10 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: customEase }}
          >
            Reach me out on
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.8, ease: customEase }}
          >
            <a href="https://www.linkedin.com/in/smit-chauhan-5b22a9291/" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-white/10 hover:bg-[rgba(255,255,255,0.1)] hover:border-white/20 transition-all text-primary text-sm sm:text-base font-medium flex items-center gap-2">
              LinkedIn ↗
            </a>
            <a href="https://github.com/SmitChauhan25" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-white/10 hover:bg-[rgba(255,255,255,0.1)] hover:border-white/20 transition-all text-primary text-sm sm:text-base font-medium flex items-center gap-2">
              GitHub ↗
            </a>
            <a href="mailto:smitjc2006@gmail.com" className="px-8 py-3.5 rounded-full bg-primary text-black hover:scale-105 transition-all text-sm sm:text-base font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(222,219,200,0.3)]">
              Gmail ↗
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
