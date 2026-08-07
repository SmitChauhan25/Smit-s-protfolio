import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'About', path: '/' },
  { label: 'My Work', path: '/work' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* Top left Logo (hidden on homepage) */}
      {location.pathname !== '/' && (
        <div className="fixed top-8 left-8 z-50 pointer-events-none hidden md:block mix-blend-difference">
          <span className="text-white font-bold tracking-wide text-[17px] concert-one-regular">Smit Chauhan.</span>
        </div>
      )}

      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit sm:w-auto">
        <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-3 py-3 sm:px-6 md:px-8 border border-t-0 border-white/5">
          <ul className="flex justify-between sm:justify-center items-center gap-2 sm:gap-6 md:gap-10 lg:gap-12 w-full">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.label} className="flex-1 sm:flex-none text-center">
                  <Link
                    to={item.path}
                    className="text-[11px] sm:text-sm md:text-sm whitespace-nowrap transition-colors duration-200 block px-2 py-1"
                    style={{ color: isActive ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)';
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
