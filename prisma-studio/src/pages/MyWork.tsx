// @ts-nocheck
import { motion } from 'framer-motion';
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle';
import { Check, ArrowRight } from 'lucide-react';

const cardEase = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    id: 'pc',
    tags: 'PHP • MySQL',
    title: 'Build Your Own PC',
    subtitle: 'E-Commerce Configurator',
    items: [
      'Developed a web app that enables users to customize and build PCs by selecting compatible hardware components.',
      'Implemented database connectivity to drive dynamic, compatibility-aware product selection.',
      'Designed a user-friendly interface for browsing and assembling parts.'
    ],
    link: 'https://github.com/SmitChauhan25'
  },
  {
    id: 'shelf',
    tags: 'Flask • MySQL • Python',
    title: 'Shelf',
    subtitle: 'Library Management System',
    items: [
      "Built a full-stack web app to manage a library's book catalog and user accounts.",
      'Set up role-based access with Admin dashboards.'
    ],
    link: 'https://github.com/SmitChauhan25'
  },
  {
    id: 'movie',
    tags: 'SQL • DBMS',
    title: 'Movie Recommender',
    subtitle: 'Database Design & ER Modeling',
    items: [
      'Designed a relational database for a movie recommendation platform.',
      'Modeled users, movies, ratings, genres, and cast information.'
    ],
    link: 'https://github.com/SmitChauhan25'
  }
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
      <span className="text-gray-400 text-xs sm:text-sm">{text}</span>
    </li>
  );
}

function LearnMore({ href = '#' }: { href?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm hover:opacity-80 transition-opacity mt-auto pt-4">
      <span>View on GitHub</span>
      <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
    </a>
  );
}

function BentoCard({ children, className, index }: { children: React.ReactNode; className?: string; index: number }) {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col border border-white/10 bg-[rgba(16,16,16,0.4)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] ${className} transition-colors duration-300`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(24,24,24,0.6)' }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: cardEase }}
    >
      {children}
    </motion.div>
  );
}

export default function MyWork() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'My Work.', className: 'text-primary' },
              ]}
            />
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            A selection of projects that showcase my full-stack development experience, from database design to front-end implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project, index) => {
            const isLarge = index === 0;
            const className = isLarge ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1";
            
            return (
              <BentoCard key={project.id} index={index} className={className}>
                <div className="mb-4 sm:mb-6">
                  <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest block mb-2">{project.tags}</span>
                  <h3 className={`text-primary font-medium mb-1 sm:mb-2 ${isLarge ? 'text-xl sm:text-2xl md:text-4xl' : 'text-lg sm:text-xl'}`}>{project.title}</h3>
                  <p className={`text-primary/60 ${isLarge ? 'text-sm md:text-base' : 'text-xs sm:text-sm'}`}>{project.subtitle}</p>
                </div>
                <ul className={`mb-6 flex-1 ${isLarge ? 'space-y-4 mb-8' : 'space-y-2'}`}>
                  {project.items.map((item, i) => (
                    <CheckItem key={i} text={item} />
                  ))}
                </ul>
                <div className="mt-auto">
                  <LearnMore href={project.link} />
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
