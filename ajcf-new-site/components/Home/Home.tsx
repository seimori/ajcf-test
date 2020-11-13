import React from "react";
import styles from "./Home.module.scss";
import { Banner } from "./HomeComponents/BannerComponents/Banner";
import { Espaces } from "./HomeComponents/EspacesComponents/Espaces";

export const Home = () => {
  return (
    <main className={styles.flexContainer}>
      <div className={styles.home}>
        <Banner />
        <Espaces />
      </div>
    </main>
  );
};
