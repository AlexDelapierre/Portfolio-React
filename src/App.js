import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      
      <section id="projects" className="projects">
        <h2>Mes <span className='text-secondary-color'>Projets</span></h2>
        <p>
          Voici quelques-uns de mes projets récents, démontrant mes compétences en développement web full-stack.
        </p>  
      </section>  
    </>
 );
}

export default App;
