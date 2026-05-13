import Button from '../Button/Button.jsx';
import styles from './Hero.module.css';

export default function Hero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  primary,
  secondary,
  chips = [],
  compact = false,
}) {
  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ''}`}>
      <div className={`${styles.inner} container`}>
        <div className={styles.copy}>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className={styles.actions}>
            {primary && <Button to={primary.to}>{primary.label}</Button>}
            {secondary && (
              <Button to={secondary.to} variant="ghost">
                {secondary.label}
              </Button>
            )}
          </div>
          {chips.length > 0 && (
            <div className={styles.chips} aria-label="Key capabilities">
              {chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          )}
        </div>
        <div className={styles.media} aria-hidden="true">
          <img src={image} alt={imageAlt} />
          <div className={styles.badge}>
            <strong>Cheraw, SC</strong>
            <span>Production cooperative</span>
          </div>
        </div>
      </div>
    </section>
  );
}
