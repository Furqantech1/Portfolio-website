import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
