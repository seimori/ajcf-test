import React from "react";
import styles from "../Footer.module.scss";

export const InternalLinks = () => {
  return (
    <div className={styles.internalLinks}>
      <ul className={styles.projetsAJCF}>
        <li>
          <h3>Projets AJCF</h3>
        </li>
        <li>
          <small>Espaces</small>
        </li>
        <li>
          <small>Antennes</small>
        </li>
        <li>
          <small>Education</small>
        </li>
      </ul>
      <ul className={styles.aide}>
        <li>
          <h3>Aide</h3>
        </li>
        <li>
          <small>FAQ</small>
        </li>
        <li>
          <small>Recrutement</small>
        </li>
        <li>
          <small>Contact</small>
        </li>
      </ul>
    </div>
  );
};
