import React from "react";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-success-subtle p-2 d-flex justify-content-around ">
        <div class="d-flex">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="custom logo"
                style={{ width: "100px", marginLeft: "2rem" }}
              />
            </Link>
          </div>
          <div class="mt-2">
            <span class="navbar-text">Axios ve React Router Çalışması</span>
          </div>
          <div class="mt-2">
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
                <NavLink
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    margin: "0 2rem 0 42rem",
                  }}
                >
                  İletişim
                </NavLink>
                <NavLink
                  to="/users"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    margin: "0 1rem",
                  }}
                >
                  Kullanıcılar
                </NavLink>
                <NavLink
                  to="/payment"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    margin: "0 1rem",
                  }}
                >
                  Ücretlendirme
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
