import React from "react";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-success-subtle p-2 ">
        <div class="d-flex justify-content-between">
          <Link to="/">
            <img
              src={logo}
              alt="custom logo"
              style={{ width: "100px", marginLeft: "2rem" }}
            />
          </Link>

          <span class="navbar-text">Axios ve React Router Çalışması</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <NavLink to="/contact">İletişim</NavLink>
              <NavLink to="/users">Kullanıcılar</NavLink>
              <NavLink to="/payment">Ücretlendirme</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
