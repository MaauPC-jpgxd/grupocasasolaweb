import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#inicio" className="navbar__brand" aria-label="Grupo Casasola - Inicio">
          Grupo Casasola
        </a>

        <nav className="navbar__nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="navbar__cta">
          Solicitar cotización
        </a>
      </div>
    </header>
  )
}

export default Navbar