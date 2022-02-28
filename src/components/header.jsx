import React from "react";
import looka from "../images/looka.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-10 mx-auto">
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style={{ backgroundColor: "#000" }}
            >
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                  src={looka}
                  width="100"
                  height="100"
                  className="d-inline-block align-top mt-2"
                  alt="Looka logo"
                />
                <strong>Looka</strong>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse offset-md-6 offset-lg-7"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="btn primarybg" href="#">
                      Join Community
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
