import { BookOpen, ArrowRight, Clock } from 'lucide-react';

const blogs = [
  {
    title: 'Getting Started with React Q & A',
    date: 'Feb 28, 2025',
    readTime: '5 min read',
    desc: 'A beginner-friendly guide covering essential React concepts, including components, state management, and hooks explained with practical examples.',
    category: 'React',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    title: 'Spring Boot Annotation',
    date: 'Aug 20, 2024',
    readTime: '7 min read',
    desc: 'Explore the core annotations in Spring Boot and how they simplify the development of enterprise-grade Java applications.',
    category: 'Spring Boot',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    title: 'Microservices Architecture And Design Patterns',
    date: 'Feb 5, 2025',
    readTime: '10 min read',
    desc: 'Understand the principles of microservices architecture and how to implement common design patterns for scalable distributed systems.',
    category: 'Architecture',
    image: 'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex section-label">
            <BookOpen size={12} />
            My Articles
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
            Latest Articles &
            <span className="text-gradient block mt-1">Insights</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            I share insights, tutorials, and best practices on web and mobile development,
            Spring Boot, Python, React, and emerging tech trends on Medium.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="group glass rounded-3xl overflow-hidden card-glow card-glow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border ${blog.accent}`}>
                  {blog.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{blog.desc}</p>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  Read on Medium
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 text-sm font-semibold transition-all duration-200 hover:bg-cyan-500/5"
          >
            View All Articles on Medium
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
