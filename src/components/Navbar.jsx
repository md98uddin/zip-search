import React from "react";

const Navbar = ({ title, cities, zip }) => {
  return (
    <nav
      className="navbar navbar-light bg-primary"
      style={{ textAlign: "center" }}
    >
      <a
        className="navbar-brand"
        href="#"
        style={{ color: "white", letterSpacing: 2 }}
      >
        {title}
      </a>
      <p
        style={{
          color: "white",
          fontSize: 17,
          marginRight: 100,
          display: "block",
        }}
      >
        Zip {zip && zip}
        <span style={{ marginLeft: 50 }}>
          Matches {cities && cities !== "no result" && cities.length}
        </span>
      </p>
    </nav>
  );
};

export default Navbar;
