import styles from './Card.module.css';

export default function Card({ title, text, image, imageAlt, children }) {
  return (
    <article className={styles.card}>
      {image && <img src={image} alt={imageAlt} />}
      <div className={styles.body}>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {children}
      </div>
    </article>
  );
}
