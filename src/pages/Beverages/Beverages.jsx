import { useMemo, useState } from 'react';
import Hero from '../../components/Hero/Hero.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { beverageCategories, beverages, imageSet } from '../../data/siteData.js';
import styles from './Beverages.module.css';

export default function Beverages() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? beverages
        : beverages.filter((beverage) => beverage.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="page">
      <Hero
        compact
        eyebrow="Beverage categories"
        title="Formats for modern refreshment."
        text="Production capabilities support still, sparkling, carbonated, functional, and ready-to-drink beverages in market-ready formats."
        image={imageSet.cans}
        imageAlt="Colorful canned beverages"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Explore categories</p>
            <h2 className="section-title">Beverage capabilities by category.</h2>
          </Reveal>
          <div className={styles.filters} role="tablist" aria-label="Beverage categories">
            {beverageCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={category === activeCategory}
                className={category === activeCategory ? styles.active : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={styles.grid}>
            {filtered.map((beverage, index) => (
              <Reveal key={beverage.name} delay={index * 55}>
                <article className={styles.beverage}>
                  <span>{beverage.category}</span>
                  <h3>{beverage.name}</h3>
                  <strong>{beverage.format}</strong>
                  <p>{beverage.tone}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
