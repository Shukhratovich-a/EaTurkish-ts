import React from "react";

import styles from "./HeadingSmall.module.scss";

interface Props {
  className: string;
  children: React.ReactNode | React.ReactNode[];
}

const HeadingSmall: React.FC<Props> = ({ className, children }) => {
  return <h2 className={`${styles.heading} ${className}`}>{children}</h2>;
};

export default HeadingSmall;
