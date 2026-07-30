import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const quickLinks = ['home', 'about', 'projects', 'design', 'blogs', 'certificates', 'contact'];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="font-display font-bold text-2xl tracking-tight">
              <span className="text-gradient">SA</span>
              <span className="text-slate-300">.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Associate UI/UX Designer & Developer, creating innovative and beautiful
              digital experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-white/8 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, value: 'asachini095@gmail.com' },
                { icon: Phone, value: '+94 71 362 7595' },
                { icon: MapPin, value: 'Matara, Sri Lanka' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <item.icon size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-slate-400 text-sm">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sachini Apsara. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-white/8 hover:border-cyan-500/30 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
