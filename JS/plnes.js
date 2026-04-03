import React from 'react';
import '/web/css/plnes.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="/web/img/logo.jpg" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="/web/index.html">Inicio</a></li>
          <li><a href="/web/html/cs.html">Cursos</a></li>
          <li><a href="/web/html/nt.html">Nosotros</a></li>
          <li><a href="/web/html/ct.html">Contacto</a></li>
          <li><a href="/web/html/ac.html">Acceder</a></li>
          <li><a href="/web/html/ex.html">Examen de Colocación</a></li>
        </ul>
      </nav>
    </header>
  );
};

const CourseItem = ({ imgSrc, title, tooltip }) => {
  return (
    <div className="course-item" data-hover={tooltip}>
      <img src={imgSrc} alt={title} />
      <p>{title}</p>
    </div>
  );
};

const Courses = () => {
  return (
    <section className="courses-section">
      <h1>Planes de estudio</h1>
      <h3>¡¡Elige el plan que más se acomode a tus necesidades y objetivos!!</h3>
      <div className="courses">
        <CourseItem 
          imgSrc="/web/img/f.jpg" 
          title="Intensivo" 
          tooltip="El mejor plan para lograr tus objetivos."
        />
        <CourseItem 
          imgSrc="/web/img/e.jpg" 
          title="Sabatino" 
          tooltip="Plan más popular entre los estudiantes, asiste solo 2 días a la semana."
        />
        <CourseItem 
          imgSrc="/web/img/h.jpg" 
          title="A tu manera" 
          tooltip="Plan adaptativo, tú decides cuándo comenzar a estudiar. Crea tu propio horario."
        />
      </div>
    </section>
  );
};

const LevelInfo = () => {
  return (
    <section id="niveles">
      <h2>Niveles Ofrecidos</h2>
      <div className="nivel">
        <h3>Básico (A1, A2)</h3>
        <p><strong>Objetivo:</strong> Comprender y utilizar frases cotidianas y expresiones básicas.</p>
        <p><strong>Duración:</strong> 6 meses por nivel.</p>
      </div>
      <div className="nivel">
        <h3>Intermedio (B1, B2)</h3>
        <p><strong>Objetivo:</strong> Comunicar ideas de manera clara y fluida en temas familiares y técnicos.</p>
        <p><strong>Duración:</strong> 6 meses por nivel.</p>
      </div>
      <div className="nivel">
        <h3>Avanzado (C1, C2)</h3>
        <p><strong>Objetivo:</strong> Hablar y escribir con fluidez, comprender textos complejos y matices culturales.</p>
        <p><strong>Duración:</strong> 6 meses por nivel.</p>
      </div>
    </section>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>&copy; Escuela Mexicana Inglés para Todos</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Courses />
      <LevelInfo />
      <Footer />
    </div>
  );
};

export default App;
