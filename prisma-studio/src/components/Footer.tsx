import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0a0a0a] text-primary pt-20 pb-8 px-6 md:px-12 border-t border-white/5 overflow-hidden z-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-32 relative z-10">
        {/* Left: Info */}
        <div className="flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-medium leading-tight max-w-sm">
            A passionate Electronics & Computer Science Engineer building robust full-stack applications.
          </p>
          <div className="flex flex-col gap-1 text-sm text-gray-400">
            <a href="mailto:smitjc2006@gmail.com" className="hover:text-primary transition-colors">
              smitjc2006@gmail.com
            </a>
            <p>Mumbai, India</p>
          </div>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col gap-4 md:items-center">
          <div>
            <span className="text-gray-500 text-xs uppercase tracking-widest block mb-4">Navigation</span>
            <ul className="flex flex-col gap-2 font-medium text-lg">
              <li><Link to="/" className="hover:opacity-70 transition-opacity">Home</Link></li>
              <li><Link to="/work" className="hover:opacity-70 transition-opacity">Work</Link></li>
              <li><Link to="/education" className="hover:opacity-70 transition-opacity">Education</Link></li>
              <li><Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Right: Connect */}
        <div className="flex flex-col gap-4 md:items-end">
          <div>
            <span className="text-gray-500 text-xs uppercase tracking-widest block mb-4">Connect</span>
            <ul className="flex flex-col gap-2 font-medium text-lg">
              <li>
                <a href="https://www.linkedin.com/in/smit-chauhan-5b22a9291/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  LinkedIn <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/SmitChauhan25" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  GitHub <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Giant Staggered Typography */}
      <div className="relative w-full flex flex-col items-center justify-end h-[20vh] sm:h-[30vh] md:h-[40vh] select-none pointer-events-none z-0 mt-8 sm:mt-12 overflow-hidden">
        <div className="relative w-full h-full flex justify-center items-end">
          {/* Background Layers for the staggered effect */}
          <div className="absolute bottom-[40%] text-[8.5vw] sm:text-[10vw] md:text-[12vw] font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)] leading-none whitespace-nowrap concert-one-regular">
            SMIT CHAUHAN
          </div>
          <div className="absolute bottom-[20%] text-[8.5vw] sm:text-[10vw] md:text-[12vw] font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] leading-none whitespace-nowrap concert-one-regular">
            SMIT CHAUHAN
          </div>
          <div className="absolute bottom-0 text-[8.5vw] sm:text-[10vw] md:text-[12vw] font-bold tracking-tighter text-white/20 leading-none whitespace-nowrap concert-one-regular">
            SMIT CHAUHAN
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-12 text-[10px] text-gray-500 uppercase tracking-widest border-t border-white/10 pt-6">
        <p>©{currentYear} SMIT CHAUHAN</p>
        <p className="mt-2 sm:mt-0">DEVELOPED BY SMIT</p>
      </div>
    </footer>
  );
}
