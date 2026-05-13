import Hero from '../../components/Hero/Hero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { imageSet, timeline } from '../../data/siteData.js';
import styles from './About.module.css';

export default function About() {
  return (
    <div className="page">
      <Hero
        compact
        eyebrow="About the operation"
        title="A cooperative model with production muscle."
        text="Carolina Canners combines independent bottler experience with modern manufacturing, packaging, and regional beverage distribution knowledge."
        image={imageSet.warehouse}
        imageAlt="Warehouse storage and logistics"
      />

      <section className="section">
        <div className={`${styles.story} container`}>
          <Reveal>
            <p className="eyebrow">The story</p>
            <h2 className="section-title">Built by bottlers, designed for partners.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Carolina Canners brings together beverage production, packaging, warehousing, and
              distribution knowledge in one focused operation. Its cooperative foundation reflects
              decades of bottling experience and a practical understanding of what beverage partners
              need from production through shipment.
            </p>
            <p>
              The company is built around disciplined manufacturing, flexible packaging choices,
              reliable warehouse support, and a quality culture suited to trusted beverage brands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Milestones</p>
            <h2 className="section-title">A simple timeline for company context.</h2>
          </Reveal>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 90}>
                <article>
                  <strong>{item.year}</strong>
                  <p>{item.event}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
