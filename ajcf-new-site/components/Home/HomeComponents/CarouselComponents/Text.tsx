import React from "react";
import styles from "./Carousel.module.scss";

const textContent =
  "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.";

export const Text = () => {
  return <p className={styles.text}>{textContent}</p>;
};
