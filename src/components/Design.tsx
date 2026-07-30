import { useState } from 'react';
import { Palette, ExternalLink } from 'lucide-react';

const designCategories = ['All', 'Desktop App UI', 'Web App UI', 'Mobile App UI'];

const designs = [
  {
    title: 'Lovina Fashion Store',
    desc: 'A modern and elegant fashion e-commerce website UI designed for trendy clothing collections, featuring a stylish dark green theme and smooth shopping experience.',
    image: 'https://images.pexels.com/photos/7667442/pexels-photo-7667442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#ui/ux', '#figma', '#e-commerce'],
    category: 'Web App UI',
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Admin Car Parking App',
    desc: 'An admin dashboard for managing car parking slots, real-time occupancy tracking, and reporting.',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#ui/ux', '#figma', '#design', '#admin'],
    category: 'Desktop App UI',
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Admin Trophy Medelo Ecommerce',
    desc: 'An admin portal for managing a trophy and medal e-commerce platform with order tracking.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#ui/ux', '#figma', '#design', '#admin'],
    category: 'Desktop App UI',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Coffee Shop App',
    desc: 'A sleek mobile app for ordering coffee, tracking rewards, and exploring new flavors.',
    image: 'https://images.pexels.com/photos/16195434/pexels-photo-16195434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#ui/ux', '#figma', '#design', '#mobile'],
    category: 'Mobile App UI',
    accent: 'from-brown-500/20 to-amber-500/20',
  },
  {
    title: 'Fruit Delivery App',
    desc: 'A vibrant mobile app UI for ordering fresh fruit with an engaging and intuitive interface.',
    image: 'https://images.pexels.com/photos/16052344/pexels-photo-16052344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#ui/ux', '#figma', '#design', '#mobile'],
    category: 'Mobile App UI',
    accent: 'from-green-500/20 to-lime-500/20',
  },
  {
    title: 'Lovina Fashion Store — Mobile',
    desc: 'The mobile version of the Lovina Fashion Store UI, optimized for small screens.',
    image: 'https://images.pexels.com/photos/7679688/pexels-photo-7679688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['#ui/ux', '#figma', '#e-commerce', '#mobile'],
    category: 'Mobile App UI',
    accent: 'from-rose-500/20 to-pink-500/20',
  },
];

export default function Design() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? designs : designs.filter(d => d.category === active);

  return (
    <section id="design" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex section-label">
            <Palette size={12} />
            Featured UI Design
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
            Creative Interfaces &
            <span className="text-gradient-warm block mt-1">Digital Experiences</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Explore my latest UI/UX design projects featuring modern interfaces, creative concepts,
            and user-focused digital experiences.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {designCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <DesignCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignCard({ item }: { item: typeof designs[0] }) {
  return (
    <div className="group glass rounded-3xl overflow-hidden card-glow card-glow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <button className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center hover:bg-orange-500 transition-colors">
            <ExternalLink size={15} className="text-white" />
          </button>
        </div>
        <span className="absolute bottom-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/80 text-white backdrop-blur">
          {item.category}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
