import { Link } from "react-router-dom";
import Toggle from "../svgs/Toggle";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-md"
        // style={{ minHeight: "80px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://res.cloudinary.com/do5fnhctm/image/upload/v1687220869/logo_300_qivnev.png" />
          </Link>
          <button
            className="navbar-toggler navbar-toggler-border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <Toggle />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  data-bs-target="#toggle-button"
                >
                  <p className="desktop-showup">INICIO</p>
                  <button
                    className="navbar-toggler navbar-toggler-border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    id="toggle-button"
                  >
                    INICIO
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  <p className="desktop-showup">MENU</p>
                  <button
                    className="navbar-toggler navbar-toggler-border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    id="toggle-button"
                  >
                    MENÚ
                  </button>
                </Link>
              </li>
              <img
                className="active-logo-navbar"
                src="https://res.cloudinary.com/do5fnhctm/image/upload/v1687227255/Dale_Don_dale_2_feop3e.png"
                alt="Bella-Pizza-logo-Alternativo"
              />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
