import React from "react";

const Footer = () => {
  return (
    <div style={{ marginTop: "11rem" }}>
      <nav className="justify-content-center bg-success-subtle p-4">
        <p className="text-dark text-center">
          Copyright {new Date().getFullYear()}
        </p>
      </nav>
    </div>
  );
};

export default Footer;
