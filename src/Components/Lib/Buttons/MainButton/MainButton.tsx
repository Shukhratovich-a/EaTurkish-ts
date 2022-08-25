import React from "react";
import Router, { useNavigate } from "react-router-dom";

import styles from "./MainButton.module.scss";

interface Props {
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  to?: Router.To;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({ className, children, onClick, to, type = "button" }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick ? onClick : () => navigate(to ? to : "")}
    >
      {children}
    </button>
  );
};

export default Button;
