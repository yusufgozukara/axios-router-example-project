import React from "react";
import logo from "../img/logo.png";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-success-subtle p-2 ">
        <div class="d-flex justify-content-between">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="custom logo"
              style={{ width: "100px", marginLeft: "2rem" }}
            />
          </a>
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
              <a class="nav-link active" aria-current="page" href="#">
                İletişim
              </a>
              <a class="nav-link" href="#">
                Kullanıcılar
              </a>

              <a class="nav-link disabled">Ücretlendirme</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
