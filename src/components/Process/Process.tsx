import { processSteps } from '../../data/process.data'
import './Process.css'

function Process() {
  return (
    <section id="proceso" className="process">
      <div className="process__container">
        <div className="process__header">
          <span className="section-label">CÓMO TRABAJAMOS</span>

          <h2>
            De la idea a una
            <span> solución funcional.</span>
          </h2>

          <p>
            Trabajamos de manera estructurada para entender cada
            proyecto, desarrollar la solución adecuada y acompañar
            su implementación.
          </p>
        </div>

        <div className="process__steps">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.id}>
              <div className="process-step__number">
                {step.number}
              </div>

              {index < processSteps.length - 1 && (
                <div
                  className="process-step__line"
                  aria-hidden="true"
                />
              )}

              <div className="process-step__content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process