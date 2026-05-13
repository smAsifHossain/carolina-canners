import { useState } from 'react';
import Hero from '../../components/Hero/Hero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { capabilities, imageSet } from '../../data/siteData.js';
import styles from './Capabilities.module.css';

export default function Capabilities() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const active = capabilities.find((capability) => capability.id === activeId) ?? capabilities[0];

  return (
    <div className="page">
      <Hero
        compact
        eyebrow="Capabilities"
        title="Flexible lines for serious beverage work."
        text="Integrated packaging, production, logistics, and quality systems help beverage partners move efficiently from formula to finished goods."
        image={imageSet.quality}
        imageAlt="Beverage quality control lab"
      />

      <section className="section">
        <div className={`${styles.tabsLayout} container`}>
          <Reveal>
            <div className={styles.tabs} role="tablist" aria-label="Capability groups">
              {capabilities.map((capability) => (
                <button
                  key={capability.id}
                  id={`${capability.id}-tab`}
                  type="button"
                  role="tab"
                  aria-controls={`${capability.id}-panel`}
                  aria-selected={capability.id === activeId}
                  className={capability.id === activeId ? styles.active : ''}
                  onClick={() => setActiveId(capability.id)}
                >
                  {capability.label}
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <article
              className={styles.panel}
              id={`${active.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${active.id}-tab`}
            >
              <p className="eyebrow">{active.label}</p>
              <h2>{active.title}</h2>
              <p>{active.details}</p>
              <ul>
                {active.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
