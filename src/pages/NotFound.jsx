import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div class="d-flex justify-content-center mt-5 ">
      <div class="card " style={{ width: "60%", border: "none" }}>
        <img
          src="https://seyler.ekstat.com/img/max/800/j/jlRoLBgvMDc6F1um-636441013051698470.jpg"
          class="card-img-top"
          alt="not found page"
          style={{ borderRadius: "10px", marginBottom: "1rem" }}
        />
        <div class="card-body d-flex flex-column  justify-content-center">
          <h5 class="card-title text-center">Böyle bir sayfa bulunamadı.</h5>
          <p class="card-text text-center">
            Lütfen adres satırınızı yazdığınızdan emin olun.
          </p>
          <button
            href="#"
            clbuttonss="btn btn-light"
            style={{
              width: "40%",
              height: "40px",
              margin: "auto",
              border: "1px solid lightgray",
              borderRadius: "5px",
              marginTop: "1rem",
            }}
            onClick={() => navigate("/")}
          >
            Anasayfaya dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
