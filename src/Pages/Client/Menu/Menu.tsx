import React from "react";

import Container from "../../../Components/Container/Container";
import HeadingBig from "../../../Components/Lib/Headings/HeadingBig/HeadingBig";

import styles from "./Menu.module.scss";

const News: React.FC = () => {
  return (
    <main className={`${styles.main} main`}>
      <section className={`${styles.menu}`}>
        <Container>
          <HeadingBig className={`${styles.about__heading}`} heading="menu" top={false} />
        </Container>
      </section>
    </main>
  );
};

export default News;
