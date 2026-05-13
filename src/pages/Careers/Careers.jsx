import { useState } from 'react';
import Hero from '../../components/Hero/Hero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { benefits, imageSet } from '../../data/siteData.js';
import styles from './Careers.module.css';

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="page">
      <Hero
        compact
        eyebrow="Careers"
        title="A people-first view of production work."
        text="Carolina Canners depends on skilled operators, technicians, warehouse teams, and support staff who keep production moving with care."
        image={imageSet.team}
        imageAlt="Team meeting in a modern workplace"
      />

      <section className="section">
        <div className={`${styles.layout} container`}>
          <Reveal>
            <p className="eyebrow">Benefits</p>
            <h2 className="section-title">Support for the people behind every case.</h2>
            <p className="section-copy">
              Competitive benefits and a steady production environment help team members build
              careers around work that reaches families, stores, and communities across the region.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.accordion}>
              {benefits.map((benefit, index) => {
                const isOpen = index === openIndex;

                return (
                  <article key={benefit.title} className={styles.item}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`benefit-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{benefit.title}</span>
                      <strong aria-hidden="true">{isOpen ? '-' : '+'}</strong>
                    </button>
                    <div id={`benefit-${index}`} className={isOpen ? styles.open : ''}>
                      <p>{benefit.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
