import React from "react";

const Payment = () => {
  return (
    <div class="d-flex justify-content-center flex-column align-items-center mt-5">
      <div
        class=" spinner-border text-warning"
        role="status"
        style={{ marginTop: "5rem" }}
      >
        <span class="visually-hidden mb-5">
          Ücretlendirme tablosu size özel fiyatlarla hesaplanıyor...
        </span>
      </div>
      <p class=" mt-3">
        Ücretlendirme tablosu size özel fiyatlarla hesaplanıyor...
      </p>
    </div>
  );
};

export default Payment;
