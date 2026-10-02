import { projects } from '../../data/projects.data'
import './Projects.css'

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div>
            <span className="section-label">NUESTRO TRABAJO</span>

            <h2>
              Proyectos que
              <span> convierten ideas en soluciones.</span>
            </h2>
          </div>

          <p>
            Algunos de los proyectos y soluciones tecnológicas que
            representan nuestra experiencia en desarrollo, soporte,
            datos y transformación digital.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__top">
                <span className="project-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="project-card__status">
                  {project.status}
                </span>
              </div>

              <div className="project-card__content">
                <span className="project-card__category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <div className="project-card__bottom">
                <div className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <span
                  className="project-card__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects