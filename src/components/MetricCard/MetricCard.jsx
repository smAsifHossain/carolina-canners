import useCountUp from '../../hooks/useCountUp.js';
import useInView from '../../hooks/useInView.js';
import styles from './MetricCard.module.css';

export default function MetricCard({ value, suffix, label }) {
  const { ref, isVisible } = useInView();
  const count = useCountUp(value, isVisible);

  return (
    <article ref={ref} className={styles.metric}>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </article>
  );
}
