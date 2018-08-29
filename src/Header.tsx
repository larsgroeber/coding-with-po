import * as React from "react";

import "./Header.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#333"
};

const Header = () => (
  <div style={styles}>
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#eee",
        opacity: 0.7
      }}
    >
      <h1 id="headline" style={{ whiteSpace: "nowrap" }}>
        Coding with PhysikOnline
      </h1>
    </div>
  </div>
);

export default Header;