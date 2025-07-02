import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Home    from "./components/Home";
import About   from "./components/About";
import Skills  from "./components/Skills";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import BGparticles from "./components/BGparticles";
import Education from "./components/Education";



export default function App() {
  return (
    <main className="text-gray-200 bg-primary font-sans scroll-smooth">
      <Intro />
      <BGparticles />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
