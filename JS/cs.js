import React from "react";
import ReactDOM from "react-dom";
import "./cs.css";

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

// Componente de un curso
const CourseItem = ({ title, imgSrc }) => (
    <div className="curso-item">
        <img src={imgSrc} alt={title} />
        <p>{title}</p>
    </div>
);

// Sección de cursos
const CourseSection = ({ id, title, courses }) => (
    <section id={id}>
        <h2>{title}</h2>
        <div className="curso">
            {courses.map((course, index) => (
                <CourseItem key={index} title={course.title} imgSrc={course.imgSrc} />
            ))}
        </div>
    </section>
);

// Footer
const Footer = () => (
    <footer>
        <p>&copy; Escuela Mexicana Canadiense de Inglés</p>
    </footer>
);

// Página principal
const CursosPage = () => {
    const courseSections = [
        {
            id: "negocios",
            title: "Negocios",
            courses: [{ title: "Negocios", imgSrc: "/web/img/b.jpg" }],
        },
        {
            id: "escolar",
            title: "Escolar",
            courses: [{ title: "Escolar", imgSrc: "/web/img/a.jpg" }],
        },
        {
            id: "general",
            title: "General",
            courses: [{ title: "General", imgSrc: "/web/img/d.jpg" }],
        },
    ];

    return (
        <div>
            <Navbar />
            <main>
                <h1>Cursos Disponibles</h1>
                <ul>
                    {courseSections.map((section) => (
                        <li key={section.id}>
                            <a href={`#${section.id}`}>{section.title}</a>
                        </li>
                    ))}
                </ul>
                {courseSections.map((section) => (
                    <CourseSection
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        courses={section.courses}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
};

ReactDOM.render(<Cs />, document.getElementById("root"));
