import React from "react";

import Container from "../../../Components/Container/Container";
import HeadingBig from "../../../Components/Lib/Headings/HeadingBig/HeadingBig";

import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <main className={`${styles.main} main`}>
      <section className={`${styles.about}`}>
        <Container>
          <HeadingBig className={`${styles.about__heading}`} heading="about us" top={false} />
        </Container>
      </section>
    </main>
  );
};

export default About;
