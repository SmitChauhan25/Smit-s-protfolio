import { motion } from 'framer-motion';
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle';
import { ArrowRight } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';

const customEase = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-12 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-8">
              <WordsPullUpMultiStyle
                segments={[
                  { text: "Let's build", className: 'text-primary' },
                  { text: "something", className: 'italic font-serif text-primary block lg:inline mt-2 lg:mt-0 lg:ml-4' },
                  { text: "great.", className: 'text-primary block mt-2' },
                ]}
                containerClassName="justify-center lg:justify-start"
              />
            </h1>
            
            <motion.p 
              className="text-gray-500 text-sm sm:text-base mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: customEase }}
            >
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: customEase }}
            >
              <a
                href="mailto:smitjc2006@gmail.com"
                className="group inline-flex items-center gap-2 bg-primary rounded-full pl-6 pr-2 py-2 transition-all duration-300"
              >
                <span className="text-black font-medium text-sm sm:text-base">Say Hello</span>
                <span className="bg-black rounded-full w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 -rotate-45" style={{ color: '#E1E0CC' }} />
                </span>
              </a>

              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/smit-chauhan-5b22a9291/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  LinkedIn
                </a>
                <span className="text-gray-600">•</span>
                <a href="https://github.com/SmitChauhan25" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: ProfileCard */}
          <motion.div 
            className="flex justify-center w-full order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: customEase }}
          >
            <ProfileCard
              name="Smit Chauhan"
              title="Full-Stack Developer"
              handle="SmitChauhan25"
              status="Available"
              contactText="Email Me"
              avatarUrl="/avatar.png"
              miniAvatarUrl="/avatar.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => { window.location.href = 'mailto:smitjc2006@gmail.com'; }}
              behindGlowEnabled={true}
              behindGlowColor="rgba(222, 219, 200, 0.2)"
              behindGlowSize="50%"
              innerGradient="linear-gradient(145deg, rgba(20,20,20,0.8) 0%, rgba(30,30,30,0.4) 100%)"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
