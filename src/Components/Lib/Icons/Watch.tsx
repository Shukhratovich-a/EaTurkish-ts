import React from "react";

const Watch: React.FC = () => {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g
        clipPath="url(#a)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M.666 8.001s2.667-5.333 7.333-5.333c4.667 0 7.334 5.333 7.334 5.333s-2.667 5.334-7.334 5.334C3.333 13.335.666 8 .666 8Z" />
        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Watch;
