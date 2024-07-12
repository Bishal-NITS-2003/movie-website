import React from "react";

function NavBar(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav class="navbar navbar-expand-lg">
            <a
              href="/"
              className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <div className="svg-container">
                <svg
                  className="svg-container"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="32"
                  fill="currentColor"
                  class="bi bi-film"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                </svg>
              </div>
              <span className="fs-4 logo-name ms-2">Movie Finder</span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "#e7b816" }}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="nav nav-pills navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item ms-1">
                  <a
                    href="/"
                    className={"nav-link " + props.home + " px-3"}
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ms-1">
                  <a
                    href="/movies"
                    className={"nav-link " + props.movies + " px-3"}
                  >
                    Movies
                  </a>
                </li>
                <li className="nav-item ms-1">
                  <a
                    href="/series"
                    className={"nav-link " + props.series + " px-3"}
                  >
                    Series
                  </a>
                </li>
                <li className="nav-item ms-1">
                  <a
                    href="/about"
                    className={"nav-link " + props.about + " px-3"}
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
