import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaTrashAlt } from "react-icons/fa";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <a
              className="facebook"
              href="https://www.facebook.com/StarWars"
              target="_blank"
              rel="noopener noreferrer"
              data-cto="social"
              title="facebook"
            >
              {" "}
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="col-2">
            <a
              className="instagram "
              href="https://www.instagram.com/starwars/"
              target="_blank"
              rel="noopener noreferrer"
              data-cto="social"
              title="instagram"
            >
              {" "}
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="col-2">
            <a
              className="twitter"
              href="https://twitter.com/starwars"
              target="_blank"
              rel="noopener noreferrer"
              data-cto="social"
              title="twitter"
            >
              {" "}
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="col-2">
            <a
              className="youtube"
              href="https://www.youtube.com/user/starwars"
              target="_blank"
              rel="noopener noreferrer"
              data-cto="social"
              title="youtube"
            >
              {" "}
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Link to="/" className=" d-flex justify-content-center">
              <img
                className="img-fluid"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
                height="50"
                width="150"
              />
            </Link>
          </div>
        </div>

        <div className="position-absolute top-0 start-0 " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item d-flex justify-content-between">
              <Link to="/" className="nav-link">
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planetas" className="nav-link">
                Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/vehicles" className="nav-link">
                vehicles
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex ms-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              {store.favorites !== undefined ? (
                store.favorites.map((item, index) => {
                  return (
                    <li key={index}>
                      {item}{" "}
                      <FaTrashAlt
                        onClick={() => actions.removeFavorite(index)}
                      ></FaTrashAlt>
                    </li>
                  );
                })
              ) : (
                <h1>Loading</h1>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
