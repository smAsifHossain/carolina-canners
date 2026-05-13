import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navItems } from '../../data/siteData.js';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.inner} container`}>
          <Link className={styles.brand} to="/" aria-label="Carolina Canners home">
            <span>CC</span>
            <strong>Carolina Canners</strong>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`${styles.mobilePanel} ${menuOpen ? styles.open : ''}`}>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={`${styles.footerGrid} container`}>
          <div>
            <Link className={styles.brand} to="/">
              <span>CC</span>
              <strong>Carolina Canners</strong>
            </Link>
            <p>
              Independent beverage manufacturing, bottling, and warehousing operations in Cheraw,
              South Carolina.
            </p>
          </div>
          <div>
            <h2>Visit</h2>
            <p>1100 State Road, Cheraw, SC 29520</p>
          </div>
          <div>
            <h2>Explore</h2>
            <div className={styles.footerLinks}>
              {navItems.slice(1).map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.credit} container`}>
          <span>
            Developed by{' '}
            <a href="https://www.linkedin.com/in/smasifhossain/" target="_blank" rel="noreferrer">
              S M Asif Hossain
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
