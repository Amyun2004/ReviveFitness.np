// src/components/ProgramsPage/CurrentChallenge/CurrentChallenge.jsx
import React from 'react';
import styles from './CurrentChallenge.module.css';
import { Link } from 'react-router-dom';

export default function CurrentChallenge({ imageUrl, title, description, link }) {

    return (
    
    <section className={styles.container}>
      <h2 className="heading">Current<span> Challenges</span></h2>
      <div className={styles.card}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>
          <Link to={link} className={styles.cta}>Learn More</Link>
        </div>
      </div>
    </section>
  );
}
