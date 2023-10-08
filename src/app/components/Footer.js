import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid gray",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "var(--primary-color)",
          padding: ".5rem 0 1rem",
        }}
      >
        Copyright &copy; Studio - 2023 | All Rights Reserved!
      </p>
    </footer>
  );
};

export default Footer;
