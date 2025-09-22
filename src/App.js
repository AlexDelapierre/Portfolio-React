import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about" className="about">
        <h2>A propos de <span className='text-secondary-color'>moi</span></h2>
        <p>
          Développeur passionné, je crée des applications web modernes et performantes pour donner vie à vos projets.
        </p>
      </section>
      <section id="skills" className="skills">
        <h2>Mes <span className='text-secondary-color'>Compétences</span></h2>
        <p>
          HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Git, GitHub, RESTful APIs, Responsive Design.
        </p>
      </section>
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
