import { Link } from "react-router-dom";
import { ModalNav } from "./components/modal/modal";
import { useState } from "react";

export const NavigationBar = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleOpenModal = () => {
    setModalActive(true);
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div
            style={{ maxWidth: "1200px", margin: "0 auto" }}
            className="container-fluid"
          >
            <Link className="navbar-brand" to="/">
              Train like <span className="color-chan">...</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse w-100 d-flex justify-content-between"
              id="navbarSupportedContent"
            >
              <form id="poisk " className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="btn" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn" aria-current="page" to="/people">
                    People
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn" onClick={handleOpenModal}>
                    Sing in
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ModalNav modalActive={modalActive} handleCloseModal={handleCloseModal} />
    </>
  );
};
