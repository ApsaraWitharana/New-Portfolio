import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Design from '@/components/Design';
import Blogs from '@/components/Blogs';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Design />
        <Blogs />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
