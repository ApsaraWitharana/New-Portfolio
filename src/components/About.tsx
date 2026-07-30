import { User, GraduationCap, Briefcase } from 'lucide-react';

const skillGroups = [
  {
    title: 'UI/UX Design',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    skills: ['Java', 'Python', 'Node.js', 'Spring Boot', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'REST API', 'Microservices'],
  },
];

const timeline = [
  {
    type: 'education',
    title: 'G.C.E Advanced Level (Maths)',
    org: "St. Thomas' Girls College",
    period: '2018 – 2020',
    desc: 'Mathematics stream with distinction.',
  },
  {
    type: 'education',
    title: 'Graduate Diploma',
    org: 'The Beeline English Academy & SDFL',
    period: '2022 – 2023',
    desc: 'Graduate Diploma from The Beeline Campus.',
  },
  {
    type: 'education',
    title: 'Graduate Diploma in Software Engineering',
    org: 'Institute of Java Software Engineering',
    period: '2023 – 2025',
    desc: 'In-depth study of software engineering, Java, and modern development practices.',
  },
  {
    type: 'work',
    title: 'Intern Software Engineer',
    org: 'SLT Mobitel',
    period: '3 Months',
    desc: 'Gained hands-on experience in enterprise software development at Sri Lanka Telecom.',
  },
  {
    type: 'work',
    title: 'Intern Software Engineer / UI/UX Designer',
    org: 'Interix Digital Pvt Ltd',
    period: '7 Months',
    desc: 'Worked as a full-stack intern while also leading UI/UX design for client projects.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex section-label">
            <User size={12} />
            About Me
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
            Passionate About Creating
            <span className="text-gradient block mt-1">Great Experiences</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm an Associate UI/UX Designer and Developer who bridges the gap between
            beautiful design and functional code. My journey began in 2023 and I've been
            continuously refining my craft ever since.
          </p>
        </div>

        {/* Bio card */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          <div className="lg:col-span-2 glass rounded-3xl p-8 card-glow space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <User size={28} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">Who I Am</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Hello! I'm Sachini Apsara, a passionate UI/UX Designer and Web Developer
                with a focus on creating beautiful, functional, and user-friendly digital
                experiences. I enjoy turning complex problems into simple, elegant solutions.
              </p>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              My journey in development started in 2023, and since then I've been continuously
              learning and improving my skills. I specialize in UI/UX design, but I'm also
              comfortable working across the full stack.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Location', value: 'Matara, Sri Lanka' },
                { label: 'Email', value: 'asachini095@gmail.com' },
                { label: 'Phone', value: '+94 71 362 7595' },
                { label: 'Status', value: 'Open to Work' },
              ].map(item => (
                <div key={item.label}>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm text-slate-300 font-medium truncate">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {skillGroups.map(group => (
              <div key={group.title} className="glass rounded-2xl p-6 card-glow card-glow-hover transition-all duration-300">
                <h4 className="font-display font-semibold text-white text-sm mb-4 pb-3 border-b border-white/5">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="inline-flex section-label">
              <GraduationCap size={12} />
              My Journey
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-16 group">
                  <div className={`absolute left-3.5 top-4 w-5 h-5 rounded-full border-2 transition-colors duration-300 flex items-center justify-center ${
                    item.type === 'work'
                      ? 'bg-orange-500/20 border-orange-500/60 group-hover:border-orange-400'
                      : 'bg-cyan-500/20 border-cyan-500/60 group-hover:border-cyan-400'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${item.type === 'work' ? 'bg-orange-400' : 'bg-cyan-400'}`} />
                  </div>
                  <div className="glass rounded-2xl p-5 card-glow card-glow-hover transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {item.type === 'work'
                            ? <Briefcase size={13} className="text-orange-400" />
                            : <GraduationCap size={13} className="text-cyan-400" />
                          }
                          <span className={`text-xs font-semibold uppercase tracking-wider ${
                            item.type === 'work' ? 'text-orange-400' : 'text-cyan-400'
                          }`}>
                            {item.type === 'work' ? 'Experience' : 'Education'}
                          </span>
                        </div>
                        <h4 className="font-display font-semibold text-white">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.org}</p>
                      </div>
                      <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
