import React from "react";

const Footer = () => {
  return (
    // <div style={{ marginTop: "11rem"  }}>
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "50px",
      }}
    >
      <nav className="justify-content-center bg-success-subtle p-3">
        <p className="text-dark text-center">
          Designed by Yusuf || Copyright {new Date().getFullYear()}
        </p>
      </nav>
    </div>
  );
};

export default Footer;
