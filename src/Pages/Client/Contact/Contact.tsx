import React from "react";

import Container from "../../../Components/Container/Container";
import HeadingBig from "../../../Components/Lib/Headings/HeadingBig/HeadingBig";

import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <main className={`${styles.main} main`}>
      <section className={`${styles.contact}`}>
        <Container>
          <HeadingBig className={`${styles.about__heading}`} heading="contact us" top={false} />
        </Container>
      </section>
    </main>
  );
};

export default Contact;
