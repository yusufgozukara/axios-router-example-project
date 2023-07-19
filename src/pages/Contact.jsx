import React from "react";

const Contact = () => {
  return (
    <>
      <h1 class="text-center m-4">Bana ulaşabilirsiniz</h1>

      <div class="d-flex justify-content-evenly mt-5 ">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://assets.stickpng.com/images/6297a2f1e01809629f113598.png"
            class="card-img-top"
            alt="linked-in logo"
          />
          <div class="card-body text-center">
            <h5 class="card-title mb-4">Linked-in</h5>
            <a
              href="https://www.linkedin.com/in/yusufgozukara/"
              class="btn"
              target="_blank"
              style={{
                backgroundColor: "#2797CF",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Linked-in'e Git
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            class="card-img-top"
            alt="github logo"
          />
          <div class="card-body text-center">
            <h5 class="card-title mb-4">GitHub</h5>
            <a
              href="https://github.com/yusufgozukara"
              class="btn"
              target="_blank"
              style={{
                backgroundColor: "#171515",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              GitHub'a Git
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
