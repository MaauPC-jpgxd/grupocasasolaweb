import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <a
              href="#inicio"
              className="footer__logo"
              aria-label="Grupo Casasola - Inicio"
            >
              Grupo Casasola
            </a>

            <p>
              Soluciones tecnológicas para impulsar negocios,
              proyectos y nuevas ideas.
            </p>
          </div>

          <div className="footer__navigation">
            <span className="footer__title">
              NAVEGACIÓN
            </span>

            <nav aria-label="Navegación del pie de página">
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#proceso">Proceso</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className="footer__contact">
            <span className="footer__title">
              CONTACTO
            </span>

            <a href="mailto:grupocasasolainformes@gmail.com">
              grupocasasolainformes@gmail.com
            </a>

            <a href="#contacto">
              Solicitar cotización →
            </a>
          </div>
        </div>

        <div className="footer__line" />

        <div className="footer__bottom">
          <span>
            © {currentYear} Grupo Casasola. Todos los derechos
            reservados.
          </span>

          <span className="footer__location">
            Soluciones tecnológicas
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer