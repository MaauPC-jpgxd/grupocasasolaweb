import { aboutCapabilities } from '../../data/about.data'
import './About.css'

function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__container">
        <div className="about__content">
          <span className="section-label">
            SOBRE GRUPO CASASOLA
          </span>

          <h2>
            Tecnología pensada para
            <span> resolver problemas reales.</span>
          </h2>

          <p>
            En Grupo Casasola desarrollamos soluciones tecnológicas
            para personas, emprendedores y empresas que buscan
            mejorar la forma en que trabajan.
          </p>

          <p>
            Combinamos soporte técnico, desarrollo de software y
            análisis de datos para crear soluciones prácticas,
            escalables y adaptadas a cada proyecto.
          </p>

          <a href="#contacto" className="about__button">
            Hablemos de tu proyecto
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about__panel">
          <div className="about__panel-header">
            <span>GRUPO CASASOLA</span>

            <span className="about__status">
              <i />
              SOLUCIONES
            </span>
          </div>

          <div className="about__line" />

          <div className="about__capabilities">
            {aboutCapabilities.map((capability) => (
              <div
                className="about__capability"
                key={capability.id}
              >
                <span>{capability.number}</span>
                <strong>{capability.title}</strong>
              </div>
            ))}
          </div>

          <div className="about__decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About