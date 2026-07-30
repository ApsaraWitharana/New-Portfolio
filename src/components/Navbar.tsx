import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Design', href: '#design' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={e => { e.preventDefault(); handleNav('#home'); }}
          className="font-display font-bold text-xl tracking-tight"
        >
          <span className="text-gradient">SA</span>
          <span className="text-slate-300">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                active === link.href.slice(1)
                  ? 'text-cyan-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {active === link.href.slice(1) && (
                <span className="absolute inset-0 bg-cyan-500/10 rounded-lg" />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={e => { e.preventDefault(); handleNav('#contact'); }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Hire Me
        </a>

        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-dark mt-1 px-6 pb-6">
          <div className="flex flex-col gap-1 pt-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); handleNav('#contact'); }}
              className="mt-2 px-4 py-3 rounded-xl bg-cyan-500 text-white text-sm font-semibold text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
