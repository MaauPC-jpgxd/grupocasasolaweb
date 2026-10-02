import { services } from '../../data/services.data'
import './Services.css'

function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__container">
        <div className="services__header">
          <span className="section-label">LO QUE HACEMOS</span>

          <h2>
            Soluciones para cada
            <span> necesidad tecnológica.</span>
          </h2>

          <p>
            Desde soporte y mantenimiento hasta desarrollo de software y
            análisis de datos. Diseñamos soluciones de acuerdo con las
            necesidades de cada proyecto.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-card__top">
                <span className="service-card__number">
                  {service.icon}
                </span>

                <span className="service-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">+</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services