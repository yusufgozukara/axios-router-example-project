import React from "react";

const NotFound = () => {
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <img
          src="https://seyler.ekstat.com/img/max/800/j/jlRoLBgvMDc6F1um-636441013051698470.jpg"
          class="card-img-top"
          alt="not found page"
        />
        <div class="card-body">
          <h5 class="card-title">Böyle bir sayfa bulunamadı.</h5>
          <p class="card-text">
            Lütfen adres satırınızın doğru olduğundan emin olun.
          </p>
          <a href="#" class="btn btn-primary">
            Anasayfaya dön
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
