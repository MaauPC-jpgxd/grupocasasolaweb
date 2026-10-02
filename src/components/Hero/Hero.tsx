import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__background" aria-hidden="true">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            SOLUCIONES TECNOLÓGICAS
          </span>

          <h1 className="hero__title">
            Tecnología que
            <span> impulsa tu negocio.</span>
          </h1>

          <p className="hero__description">
            Soporte técnico, desarrollo de software y análisis de datos
            para transformar las necesidades de tu negocio en soluciones
            tecnológicas.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="hero__button hero__button--primary">
              Solicitar cotización
              <span aria-hidden="true">→</span>
            </a>

            <a href="#servicios" className="hero__button hero__button--secondary">
              Conocer servicios
            </a>
          </div>

          <div className="hero__services">
            <span>Soporte</span>
            <span>Desarrollo</span>
            <span>Datos</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-ring hero__visual-ring--outer" />
          <div className="hero__visual-ring hero__visual-ring--middle" />

          <div className="hero__visual-core">
            <div className="hero__visual-core-line" />
            <div className="hero__visual-core-line hero__visual-core-line--two" />
            <div className="hero__visual-dot" />
          </div>

          <div className="hero__floating-card hero__floating-card--top">
            <span className="hero__card-dot" />
            <span>Software</span>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__card-dot" />
            <span>Datos</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero