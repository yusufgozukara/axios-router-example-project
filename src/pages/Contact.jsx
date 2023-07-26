import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1 class="text-center m-4">Bana ulaşabilirsiniz</h1>

      <div class="d-flex justify-content-evenly mt-5">
        <div class="card" style={{ width: "18rem", marginBottom: "5rem" }}>
          <img
            src="https://img.freepik.com/free-icon/linkedin_318-157468.jpg?w=2000"
            class="card-img-top"
            alt="linked-in logo"
            style={{ width: "200px", margin: "2.5rem auto 2rem" }}
          />
          <div class="card-body text-center">
            <h5 class="card-title mb-4">Linked-in</h5>
            <Link
              to="https://www.linkedin.com/in/yusufgozukara/"
              class="btn"
              target="_blank"
              style={{
                backgroundColor: "#007BB9",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Linked-in'e Git
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem", marginBottom: "5rem" }}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            class="card-img-top"
            alt="github logo"
            style={{ width: "270px", margin: "0 auto " }}
          />
          <div class="card-body text-center">
            <h5 class="card-title mb-4">GitHub</h5>
            <Link
              to="https://github.com/yusufgozukara"
              class="btn"
              target="_blank"
              style={{
                backgroundColor: "#171515",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              GitHub'a Git
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
