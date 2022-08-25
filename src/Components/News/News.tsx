import React from "react";

import HeadingBig from "../Lib/Headings/HeadingBig/HeadingBig";

import styles from "./News.module.scss";

const News:React.FC = () => {
  return (
    <section className={`${styles.news}`}>
      <div className={`${styles.container} container`}>
        <HeadingBig
          className={`${styles.news__heading}`}
          topHeading={"News"}
          heading={"Gerícht updates"}
        />
      </div>
    </section>
  );
};

export default News;
