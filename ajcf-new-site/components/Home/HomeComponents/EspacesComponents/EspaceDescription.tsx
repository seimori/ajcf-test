import React from "react";
import styles from "./Espaces.module.scss";
import { EspaceContent } from "./EspacesDescriptions";

const logoStyle = { fontSize: "24px", color: "#3C64B1", padding: "1rem" };
const textStyle: React.CSSProperties = { textAlign: "center", padding: "1rem" };

export const EspaceDescription = ({ espace }: { espace: EspaceContent }) => {
  const Logo = espace.logo;
  return (
    <div key={espace.name} className={`${styles.espaceDescription} ${espace.className}`}>
      <Logo style={logoStyle} />
      <h3>{espace.name}</h3>
      <p style={textStyle}>{espace.text}</p>
      <a>{espace.linkText}</a>
    </div>
  );
};
