import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BuildWithUs from '@/components/BuildWithUs';
import ResultsSection from '@/components/ResultsSection';
import Projects from '@/components/Projects';
import WorkProcess from '@/components/WorkProcess';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <BuildWithUs />
      <ResultsSection />
      <Projects />
      <WorkProcess />
      <Contact />
      <Footer />
    </main>
  );
}
