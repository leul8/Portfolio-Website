// src/components/Cloud.jsx
import React from "react";

const Cloud = ({ style, className }) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 39"
    fill="none"
  >
    <ellipse cx="19" cy="22" rx="19" ry="17" fill="rgba(255,255,255,0.7)" />
    <ellipse cx="45" cy="22" rx="19" ry="17" fill="rgba(255,255,255,0.7)" />
    <ellipse cx="32" cy="15" rx="25" ry="20" fill="rgba(255,255,255,0.7)" />
  </svg>
);

export default Cloud;
