import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container">
        <div className="row">
          {store.characters.results !== undefined
            ? store.characters.results.map((result, index) => {
                return (
                  <div className="col-md-4 col-ms-12 col-md-6 col-lg-4 g-4">
                    <div
                      className="card animate__animated animate__zoomIn"
                      key={index}
                    >
                      <img
                        src="https://rosarionuestro.com/wp-content/uploads/2019/12/baby-yoda.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h1 className="card-title">{result.name}</h1>
                        <p className="card-title">
                          <strong>Birth_year:</strong> {result.birth_year}
                        </p>
                        <p className="card-title">
                          <strong>Height:</strong> {result.height}
                        </p>
                        <p className="card-title">
                          <strong>Gender:</strong> {result.gender}
                        </p>
                        <Link
                          to={`/detailscharacters/${result.name}`}
                          className="btn btn-outline-primary"
                          onClick={() =>
                            actions.loadDataFromCharacters(result.url)
                          }
                        >
                          Read More
                        </Link>
                        <div className="d-grid gap-2 d-flex justify-content-md-end">
                          <button
                            className="btn btn-outline-warning me-md-2"
                            type=""
                          >
                            <AiFillHeart
                              onClick={() => {
                                actions.addFavorite(result.name);
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Characters;
