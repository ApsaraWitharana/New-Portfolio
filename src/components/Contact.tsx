import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'asachini095@gmail.com', href: 'mailto:asachini095@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+94 71 362 7595', href: 'tel:+94713627595' },
  { icon: MapPin, label: 'Location', value: 'Matara, Sri Lanka', href: '#' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/8 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex section-label">
            <Mail size={12} />
            Get In Touch
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
            Let's Work
            <span className="text-gradient block mt-1">Together</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Send me a message and I'll get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group flex items-start gap-4 glass rounded-2xl p-5 card-glow card-glow-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon size={18} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-slate-200 font-medium text-sm">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5 card-glow">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-4">Follow Me</div>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-200"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 card-glow space-y-5">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      required
                      className="w-full bg-white/3 border border-white/8 hover:border-cyan-500/30 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email?"
                      required
                      className="w-full bg-white/3 border border-white/8 hover:border-cyan-500/30 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What do you want to say?"
                      required
                      rows={5}
                      className="w-full bg-white/3 border border-white/8 hover:border-cyan-500/30 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.01]"
                  >
                    <Send size={17} />
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
