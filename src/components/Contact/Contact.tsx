import { contactItems, contactOptions } from '../../data/contact.data'
import './Contact.css'

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__background" aria-hidden="true">
        <div className="contact__glow contact__glow--one" />
        <div className="contact__glow contact__glow--two" />
        <div className="contact__grid" />
      </div>

      <div className="contact__container">
        <div className="contact__intro">
          <span className="section-label">
            HABLEMOS DE TU PROYECTO
          </span>

          <h2>
            ¿Tienes una idea?
            <span> Hagámosla realidad.</span>
          </h2>

          <p>
            Cuéntanos qué necesitas y encontraremos una solución
            tecnológica adaptada a tu proyecto y a los objetivos
            de tu negocio.
          </p>

          <div className="contact__items">
            {contactItems.map((item) => (
              <div className="contact__item" key={item.id}>
                <span>{item.label}</span>

                {item.href ? (
                  <a href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            ))}
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__form-header">
            <span>INICIAR PROYECTO</span>
            <span className="contact__form-status">
              <i />
              DISPONIBLE
            </span>
          </div>

          <div className="contact__fields">
            <div className="contact__field">
              <label htmlFor="contact-name">
                Nombre
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">
                Correo electrónico
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="tu@correo.com"
                autoComplete="email"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-service">
                ¿Qué necesitas?
              </label>

              <select
                id="contact-service"
                name="service"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona un servicio
                </option>

                {contactOptions.map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">
                Cuéntanos sobre tu proyecto
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Describe brevemente lo que necesitas..."
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
            >
              Enviar solicitud
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact