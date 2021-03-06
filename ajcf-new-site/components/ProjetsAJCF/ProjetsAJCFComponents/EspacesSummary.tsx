import { Button } from "antd";
import React from "react";
import styles from "./ProjetsAJCFContainer.module.scss";
import { EspacesCards } from "./EspacesCards";

export const EspacesSummary = () => {
  return (
    <section className={styles.espacesSection}>
      <h3 className={`capsHeading ${styles.categoryName}`}>Nos Espaces</h3>
      <h2>Fédérer la jeunesse</h2>
      <p className="texte1">
        A travers nos 4 espaces, nous aidons la jeunesse franco-chinoise à s’exprimer et à monter leurs projets allant
        des conférences débats aux ateliers de développement personnel.
      </p>
      <EspacesCards />
      <Button className={styles.learnMoreButton} type="primary">
        En savoir plus
      </Button>
    </section>
  );
};
