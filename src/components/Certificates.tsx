import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Java',
    issuer: 'HackerRank',
    subtitle: 'Introduction to Java Basics',
    year: '2024',
    desc: 'Learned the fundamentals of Java programming, including syntax, control flow, and basic data structures.',
    icon: '☕',
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/20',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  },
  {
    title: 'Python',
    issuer: 'HackerRank',
    subtitle: 'Introduction to Python Basics',
    year: '2024',
    desc: 'Mastered the basics of Python, including variables, loops, and functions for solving simple problems.',
    icon: '🐍',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    title: 'Spring Boot',
    issuer: 'Self Learning',
    subtitle: 'Spring Boot Application Development',
    year: '2024',
    desc: 'Gained a comprehensive understanding of Spring Boot for building Java-based enterprise applications.',
    icon: '🍃',
    color: 'from-emerald-500/20 to-green-500/20',
    border: 'border-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    title: 'React',
    issuer: 'Online Course',
    subtitle: 'Modern React Development',
    year: '2024',
    desc: 'Completed advanced React training covering hooks, state management, and building production-ready applications.',
    icon: '⚛️',
    color: 'from-cyan-500/20 to-teal-500/20',
    border: 'border-cyan-500/20',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    title: 'Figma',
    issuer: 'Figma Academy',
    subtitle: 'UI/UX Design with Figma',
    year: '2023',
    desc: 'Certified in professional UI/UX design using Figma, including components, auto-layout, and prototyping.',
    icon: '🎨',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    badge: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  },
  {
    title: 'Docker',
    issuer: 'Online Training',
    subtitle: 'Container & DevOps Fundamentals',
    year: '2024',
    desc: 'Learned containerization with Docker, including building images, managing containers, and deployment practices.',
    icon: '🐳',
    color: 'from-sky-500/20 to-blue-500/20',
    border: 'border-sky-500/20',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex section-label">
            <Award size={12} />
            My Achievements
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
            Certificates &
            <span className="text-gradient block mt-1">Accomplishments</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Key milestones in my journey as a developer and designer, demonstrating proficiency
            in various technologies and programming languages.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`group glass rounded-3xl p-6 card-glow card-glow-hover transition-all duration-300 hover:-translate-y-1 border ${cert.border} border-opacity-30`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {cert.icon}
              </div>

              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display font-bold text-white text-xl">{cert.title}</h3>
                  <p className="text-slate-500 text-sm">{cert.subtitle}</p>
                </div>
                <span className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full border ${cert.badge}`}>
                  {cert.year}
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">{cert.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Award size={13} className="text-slate-500" />
                  <span className="text-slate-500 text-xs">{cert.issuer}</span>
                </div>
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                  <ExternalLink size={12} />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
