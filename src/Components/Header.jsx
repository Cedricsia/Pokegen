import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <NavLink
        id="group"
        to="/"
        className={(nav) => (nav.isActive ? "ok" : "")}
      >
        <p>Gen1</p>
        <img src="/public/Group 1.svg" alt="" />
      </NavLink>
      <NavLink
        id="group"
        to="/gen2"
        className={(nav) => (nav.isActive ? "ok" : "")}
      >
        <p>Gen2</p>
        <img src="/public/Group 2.svg" alt="" />
      </NavLink>
      <NavLink
        id="group"
        to="/gen3"
        className={(nav) => (nav.isActive ? "ok" : "")}
      >
        <p>Gen3</p>
        <img src="/public/Group3.svg" alt="" />
      </NavLink>
      <NavLink
        id="group"
        to="/gen4"
        className={(nav) => (nav.isActive ? "ok" : "")}
      >
        <p>Gen4</p>
        <img src="/public/Group4.svg" alt="" />
      </NavLink>
      <NavLink
        id="group"
        to="/gen5"
        className={(nav) => (nav.isActive ? "ok" : "")}
      >
        <p>Gen5</p>
        <img src="/public/Group 5.svg" alt="" />
      </NavLink>
      <NavLink
        id="group"
        to="/gen6"
        className={(nav) => (nav.isActive ? "ok" : "")}
      >
        <p>Gen6</p>
        <img src="/public/Group 6.svg" alt="" />
      </NavLink>
      <NavLink
        id="group"
        to="/gen7"
        className={(nav) => (nav.isActive ? "ok" : "")}
      >
        <p>Gen7</p>
        <img src="/public/Group 7.svg" alt="" />
      </NavLink>
      <NavLink
        id="group"
        to="/gen8"
        className={(nav) => (nav.isActive ? "ok" : "")}
      >
        <p>Gen8</p>
        <img src="/public/Group 8.svg" alt="" />
      </NavLink>
    </nav>
  );
};

export default Header;
