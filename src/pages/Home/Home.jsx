import Card from '../../components/Card/Card.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import MetricCard from '../../components/MetricCard/MetricCard.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { homeHighlights, imageSet, stats } from '../../data/siteData.js';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className="page">
      <Hero
        eyebrow="Beverage manufacturing"
        title="Built for bottlers, brands, and regional scale."
        text="Carolina Canners supports beverage partners with production strength, flexible packaging, quality systems, and regional distribution expertise."
        image={imageSet.plant}
        imageAlt="Carolina Canners production facility"
        primary={{ label: 'Explore Capabilities', to: '/capabilities' }}
        secondary={{ label: 'View Beverages', to: '/beverages' }}
        chips={['Cans', 'PET Bottles', 'Hot Fill', 'Warehousing']}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Partner-focused production</p>
            <h2 className="section-title">Reliable beverage manufacturing from line to loadout.</h2>
            <p className="section-copy">
              From shareholder bottlers to national beverage partners, the operation is organized
              around consistency, speed, packaging flexibility, and dependable fulfillment.
            </p>
          </Reveal>
          <div className={`${styles.highlights} grid grid-3`}>
            {homeHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <Card title={item.title} text={item.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className={`${styles.split} container`}>
          <Reveal>
            <img src={imageSet.line} alt="Industrial beverage production line" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Manufacturing confidence</p>
            <h2 className="section-title">From line speed to quality checks.</h2>
            <p className="section-copy">
              Every production run depends on careful coordination: flexible filling, consistent
              packaging, warehouse readiness, and food safety practices that protect each brand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Scale snapshot</p>
            <h2 className="section-title">Numbers that give the operation weight.</h2>
          </Reveal>
          <div className={`${styles.metrics} grid grid-4`}>
            {stats.map((stat) => (
              <MetricCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
