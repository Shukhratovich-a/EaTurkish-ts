import React from "react";

import styles from "./HeadingBig.module.scss";

interface Props {
  className: string;
  top?: boolean;
  topHeading: string;
  heading: string;
  description: string;
}

const HeadingBig: React.FC<Props> = ({
  className,
  top = true,
  topHeading,
  heading,
  description,
}) => {
  return (
    <div className={`${className} ${styles.heading}`}>
      {topHeading && top ? <span className={`${styles.heading__top}`}>{topHeading}</span> : null}

      <h2 className={`${styles.heading__main} ${top ? styles["heading__main--top"] : ""}`}>
        {heading}
      </h2>

      {description && top ? (
        <p className={`${styles.heading__description}`}>{description}</p>
      ) : null}
    </div>
  );
};

export default HeadingBig;
