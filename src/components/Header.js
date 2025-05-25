import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Sumit Pandey</div>
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
          <a href="#courses" className={styles.navLink}>Certifications/Courses</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;