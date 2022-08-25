import styles from "./HeadingBig.module.scss";

const HeadingBig = ({ className, top = true, topHeading, heading, description }) => {
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
