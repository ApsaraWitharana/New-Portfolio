import { useState } from 'react';
import { Download, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            <div className="section-label">
              <Sparkles size={12} />
              UI/UX Designer & Developer
            </div>

            <div className="space-y-3">
              <p className="text-slate-400 text-lg font-medium tracking-wide">Hello, I'm</p>
              <h1 className="font-display font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white">
                Sachini
                <br />
                <span className="text-gradient">Apsara</span>
              </h1>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Associate UI/UX Designer crafting beautiful, intuitive digital experiences.
              I design and build modern, responsive interfaces that users love.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Download size={18} />
                Download CV
              </a>
              <button
                onClick={() => handleScroll('#projects')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                View Work
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: '1+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Done' },
                { value: '5+', label: 'Certificates' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent animate-pulse-ring" />
              {/* Inner ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-500/10 to-orange-500/10 animate-float" />

              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-cyan-500/30 animate-float">
                {!imgError ? (
                  <img
                    src="/images/bc540a77-fc3c-4a45-9101-10da57976949.png"
                    alt="Sachini Apsara"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-600/40 via-cyan-500/20 to-teal-600/40">
                    <div className="text-center">
                      <div
                        className="font-display font-bold text-7xl text-white/90 select-none"
                        style={{ textShadow: '0 2px 24px rgba(6,182,212,0.5)' }}
                      >
                        SA
                      </div>
                      <div className="mt-2 text-cyan-300 text-sm font-medium">Sachini Apsara</div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-slate-200">Available for work</span>
              </div>

              {/* Skills badge */}
              <div className="absolute -top-2 -right-6 glass rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-xs text-slate-400">Specializing in</div>
                <div className="text-sm font-semibold text-cyan-400 mt-0.5">UI/UX Design</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} className="text-slate-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
