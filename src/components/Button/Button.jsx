import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ children, to, type = 'button', variant = 'primary', ...props }) {
  const className = `${styles.button} ${styles[variant]}`;

  if (to) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  );
}
