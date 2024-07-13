import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/details/${query}/${year}`);
  };

  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1990;
    const years = [];
    for (let i = currentYear; i >= startYear; i--) {
      years.push(i);
    }
    return years;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg">
            <a
              href="/"
              className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <div className="svg-container">
                <svg
                  className="svg-container bi bi-film"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                </svg>
              </div>
              <span className="fs-4 logo-name ms-2">Movie Finder</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "#e7b816" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="nav nav-pills navbar-nav ms-auto mb-2 mb-lg-0">
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
              <form className="d-flex m-0" onSubmit={handleSearch}>
                <input
                  className="form-control me-2 placeholder-white"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={query}
                  style={{ backgroundColor: " rgb(15, 7, 22)", color: "white" }}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <select
                  className="form-control me-2"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  style={{ backgroundColor: " rgb(15, 7, 22)", color: "white" }}
                >
                  <option value="">Year</option>
                  {getYearOptions().map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
