import React from 'react';
import '/web/css/ct.css';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <img src="/web/img/logo.JPG" alt="Logo" className="logo" width="100" />
                <ul className="nav-links">
                    <li><a href="index.html">Inicio</a></li>
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

// contacto.js
function initMap() {
    var location = { lat: 19.432608, lng: -99.133209 }; // Coordenadas de Ciudad de México
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.6727496438316!2d-99.1451107253232!3d19.555658336740493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f70bb7cb0f13%3A0x36d9f33d3ebb2e98!2sUACM%20Plantel%20Cuautepec!5e0!3m2!1ses!2smx!4v1732091916404!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 