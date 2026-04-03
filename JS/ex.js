import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./ex.css";

const Section = ({ image, title, paragraphs }) => {
  return (
    <div className="nt-container">
      <img src={image} alt={title} className="nt-background" />
      <div className="text-overlay animated">
        <h2>{title}</h2>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

// Navbar componente
const Navbar = () => (
  <nav className="navbar">
    <img src="/web/img/logo.JPG" alt="Logo" className="logo" />
    <ul className="nav-links">
      <li><a href="/web/index.html">Inicio</a></li>
      <li><a href="/web/html/cs.html">Cursos</a></li>
      <li><a href="/web/html/nt.html">Nosotros</a></li>
      <li><a href="/web/html/ct.html">Contacto</a></li>
      <li><a href="/web/html/ac.html">Acceder</a></li>
      <li><a href="/web/html/ex.html">Examen de Colocación</a></li>
    </ul>
  </nav>
);

// Footer componente
const Footer = () => (
  <footer>
    <p>&copy; Escuela Mexicana Inglés para Todos</p>
  </footer>
);

// Examen de Colocación componente
const Ex = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = document.querySelectorAll(".animated");
    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div>
      <Navbar />
      <Section 
        image="/web/img/example1.jpg" 
        title="Examen de Colocación - Parte 1" 
        paragraphs={[
          "Este es el primer párrafo de la sección 1.",
          "Este es el segundo párrafo de la sección 1."
        ]}
      />
      <Section 
        image="/web/img/example2.jpg" 
        title="Examen de Colocación - Parte 2" 
        paragraphs={[
          "Este es el primer párrafo de la sección 2.",
          "Este es el segundo párrafo de la sección 2."
        ]}
      />
      <Footer />
    </div>
  );
};

ReactDOM.render(<Ex />, document.getElementById("root"));
