import { motion } from 'framer-motion';
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle';

const EDUCATION = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    major: 'Electronics and Computer Science (ECS)',
    period: '2025 - 2028',
    status: 'Currently in 3rd Year (SY-ECS1)',
    institution: 'Shah and Anchor Kutchhi Engineering College (SAKEC)',
    location: 'Mumbai, India',
  },
  {
    degree: 'Diploma in Computer Engineering',
    major: '',
    period: '2022 - 2025',
    status: 'Completed',
    institution: 'Gramin Polytechnic College, Nanded',
    location: 'Nanded, Maharashtra, India',
  }
];

export default function Education() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'My Education.', className: 'text-primary' },
              ]}
            />
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            My academic journey in Electronics and Computer Science Engineering.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto py-10">
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="flex flex-col gap-12 md:gap-24">
            {EDUCATION.map((edu, idx) => {
              const isLeft = idx % 2 === 1; // 1st item on right, 2nd on left.
              
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Glowing Node */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#0a0a0a] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(222,219,200,0.5)]" />
                  
                  {/* Spacer for desktop centering */}
                  <div className="hidden md:block w-[50%]" />
                  
                  {/* Card Container */}
                  <div className={`w-full md:w-[50%] pl-16 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                     <motion.div
                       className="bg-[rgba(16,16,16,0.4)] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full text-left transition-colors duration-300 relative group"
                       whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(24,24,24,0.6)' }}
                       initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                       whileInView={{ opacity: 1, x: 0, y: 0 }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                     >
                       <div className="flex flex-col gap-1 mb-6">
                         <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest block mb-1">
                           {edu.period}
                         </span>
                         <h3 className="text-primary text-xl sm:text-2xl md:text-3xl font-medium leading-tight">
                           {edu.degree}
                         </h3>
                         {edu.major && (
                           <p className="text-primary/70 text-sm sm:text-base mt-1">
                             {edu.major}
                           </p>
                         )}
                       </div>
                       
                       <div className="pt-6 border-t border-white/5 flex flex-col gap-1">
                         <p className="text-primary/90 font-medium">
                           {edu.institution}
                         </p>
                         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-1">
                           <p className="text-gray-500 text-sm">
                             {edu.location}
                           </p>
                           <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-primary/70 border border-white/10 group-hover:border-white/20 transition-colors">
                             {edu.status}
                           </span>
                         </div>
                       </div>
                     </motion.div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
