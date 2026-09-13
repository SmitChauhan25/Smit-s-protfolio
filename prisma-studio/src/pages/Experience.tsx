import { motion } from 'framer-motion';
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle';
import { 
  Briefcase, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Layout, 
  Kanban, 
  Bug, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const cardEase = [0.22, 1, 0.36, 1] as const;

interface ExperienceItem {
  id: string;
  role: string;
  type: string;
  clients: string;
  period: string;
  duration: string;
  description: string;
  keyResponsibilities: {
    title: string;
    description: string;
    icon: any;
  }[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'freelance-lead',
    role: 'Freelance UI/UX Designer, Project Manager & Software Tester',
    type: 'Freelance Engagement',
    clients: 'Multiple Clients (Direct Clients, Referrals & Local Businesses/Startups)',
    period: '2026',
    duration: '3–6 months',
    description:
      'Spearheaded client-facing digital projects across UI/UX design, hands-on software quality testing, and end-to-end agile project management for businesses and early-stage ventures.',
    keyResponsibilities: [
      {
        title: 'UI/UX Design & Prototyping',
        description:
          'Designed intuitive UI/UX wireframes, high-fidelity mockups, and interactive prototypes tailored to exact client requirements, focusing on usability, accessibility, and modern aesthetics.',
        icon: Layout,
      },
      {
        title: 'End-to-End Project Management',
        description:
          'Managed project roadmaps from inception to delivery—scheduling milestones, task prioritization, sprint tracking, and direct stakeholder communication to guarantee on-time, on-budget delivery.',
        icon: Kanban,
      },
      {
        title: 'Software Testing & Quality Assurance',
        description:
          'Conducted rigorous functional and manual software testing to uncover edge-case defects, verify bug resolutions, and ensure pristine reliability of web applications prior to release.',
        icon: Bug,
      },
      {
        title: 'Technical Problem Solving & Debugging',
        description:
          'Tackled complex, real-world technical requirements under tight deadlines, applying analytical problem-solving to overcome architectural and usability bottlenecks.',
        icon: ShieldCheck,
      },
    ],
    skills: [
      'UI/UX Design',
      'Wireframing & Prototyping',
      'Project Management',
      'Functional & Manual Testing',
      'Quality Assurance (QA)',
      'Client Relations',
      'Analytical Debugging',
      'Agile Coordination',
    ],
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'My Experience.', className: 'text-primary' },
              ]}
            />
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Hands-on professional background spanning UI/UX design, end-to-end project management, 
            and quality assurance testing for direct clients, startups, and local businesses.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, expIdx) => (
            <motion.div
              key={exp.id}
              className="bg-[rgba(16,16,16,0.4)] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: expIdx * 0.15, duration: 0.8, ease: cardEase }}
            >
              {/* Subtle accent glow in top corner */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />

              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                    {exp.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {exp.duration}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-primary/80 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Verified Experience</span>
                </div>
              </div>

              {/* Role Title & Client info */}
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary tracking-tight mb-2">
                  {exp.role}
                </h2>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                  <Users className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  <span>{exp.clients}</span>
                </div>
                <p className="mt-4 text-sm sm:text-base text-primary/80 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>

              {/* Key Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {exp.keyResponsibilities.map((resp, idx) => {
                  const IconComponent = resp.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 rounded-2xl p-5 sm:p-6 transition-all duration-200"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-medium text-primary">
                          {resp.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {resp.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Skills Tags */}
              <div className="border-t border-white/10 pt-6">
                <span className="text-xs uppercase tracking-widest text-gray-500 block mb-3">
                  Applied Competencies & Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-primary/80 hover:border-white/20 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact / Hire CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-white/[0.04] via-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: cardEase }}
        >
          <h3 className="text-2xl sm:text-3xl font-normal text-primary mb-3">
            Looking for freelance collaboration or engineering roles?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            I am available for web development, UI/UX design, and testing projects with direct clients, startups, and agile teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-medium text-sm sm:text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(222,219,200,0.3)]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:smitjc2006@gmail.com"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-primary px-6 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <span>Email Directly</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
