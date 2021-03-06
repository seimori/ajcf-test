import React from "react";
import styles from "../../components/APropos/Partners/Partners.module.scss";
import { AssociationsAndCollectives } from "../../components/APropos/Partners/AssociationsAndCollectivesComponents/AssociationsAndCollectives";
import { Enterprises } from "../../components/APropos/Partners/EnterprisesComponents/Enterprises";
import { Institutions } from "../../components/APropos/Partners/InstitutionsComponents/Institutions";
import { Summary } from "../../components/APropos/Partners/SummaryComponents/Summary";
import { Layout } from "../../components/Layout/Layout";

export default () => {
  return (
    <Layout className={styles.layout}>
      <Summary />
      <Institutions />
      <AssociationsAndCollectives />
      <Enterprises />
    </Layout>
  );
};
