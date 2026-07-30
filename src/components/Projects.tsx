import { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const categories = ['All', 'UI Design', 'Web Development', 'Mobile Application'];

const projects = [
  {
    title: 'E-Commerce Website',
    desc: 'A modern e-commerce platform with product listings, shopping cart, and secure checkout functionality.',
    image: 'https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#web', '#fullstack', '#react', '#mongodb', '#tailwind'],
    category: 'Web Development',
  },
  {
    title: 'Crop Monitoring Website',
    desc: 'A web platform designed to monitor crop health and growth by leveraging real-time data analytics.',
    image: 'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#web', '#frontend', '#react', '#tailwind', '#mongodb', '#JWT'],
    category: 'Web Development',
  },
  {
    title: 'Task Management App',
    desc: 'A web-based task management tool to organize and track projects efficiently.',
    image: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#web', '#fullstack', '#react', '#firebase', '#mongodb'],
    category: 'Web Development',
  },
  {
    title: 'World News Mobile App',
    desc: 'A mobile application that provides real-time global news updates, allowing users to explore trending stories.',
    image: 'https://images.pexels.com/photos/3850204/pexels-photo-3850204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#mobile', '#expo', '#firebase', '#ui/ux', '#news.api'],
    category: 'Mobile Application',
  },
  {
    title: 'Coffee Shop App',
    desc: 'A mobile app for ordering coffee, tracking rewards, and exploring new flavors.',
    image: 'https://images.pexels.com/photos/16195434/pexels-photo-16195434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#ui/ux', '#figma', '#design', '#mobile'],
    category: 'UI Design',
  },
  {
    title: 'Fruit Delivery App',
    desc: 'A mobile app for ordering fruit for an e-commerce platform.',
    image: 'https://images.pexels.com/photos/16052344/pexels-photo-16052344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#ui/ux', '#figma', '#design', '#mobile'],
    category: 'UI Design',
  },
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex section-label">
            <Layers size={12} />
            Featured Projects
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
            My Latest Work &
            <span className="text-gradient block mt-1">Innovations</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Discover cutting-edge solutions in web and mobile development, showcasing real-world applications.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group glass rounded-3xl overflow-hidden card-glow card-glow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-2">
          <button className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center hover:bg-cyan-500 transition-colors">
            <ExternalLink size={15} className="text-white" />
          </button>
          <button className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
            <Github size={15} className="text-white" />
          </button>
        </div>
        <span className="absolute bottom-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/80 text-white backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-white text-lg mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="tag text-[10px]">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
