// src/components/ProgramPage/ProgramsProvided.jsx
import { programs } from './programsData';
import styles from './ProgramGallery.module.css'; // Import the new module CSS

export default function ProgramsProvided() { // Renamed from ProgramGallery as per your note
  return (
    <>
      <span className={styles.scrollHint}>⇠ Scroll ⇢</span>
      <div className={styles.servicesContent}>
        {programs.map((prog, i) => (
          <div className={styles.row} key={i}>
            <div className={styles.imgWrapper}>
              <img src={prog.img} alt={prog.title} />
              <div className={styles.imgOverlay} />
              <div className={styles.overlayText}>{prog.title}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}