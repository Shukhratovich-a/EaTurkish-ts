import React from "react";

import Marker from "../../Icons/Marker";

import styles from "./NavigateButton.module.scss";

interface Props {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isDisabled?: boolean;
}

const NavigateButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, onClick, isDisabled = false }, ref) => {
    return (
      <button
        className={`${styles.button} ${className}`}
        ref={ref}
        disabled={isDisabled}
        onClick={onClick}
      >
        <Marker />
      </button>
    );
  }
);

export default NavigateButton;
