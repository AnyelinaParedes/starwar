import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container">
      <div className="row">
        {store.vehicles.results !== undefined
          ? store.vehicles.results.map((result) => {
              return (
                <div className="col-md-4 col-ms-12 col-md-6 col-lg-4 g-4">
                <div
                  className="card animate__animated animate__zoomIn"
                  key={result.uid}
                >
                  <img
                    src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{result.name}</h5>
                    <p className="card-title">
                      <strong>Model:</strong> {result.model}
                    </p>
                    <p className="card-title">
                      <strong>Starship_class:</strong> {result.starship_class}
                    </p>
                    <p className="card-title">
                      <strong>Manufacturer:</strong> {result.manufacturer}
                    </p>
                    <Link
                      to={`/detailsstarchips/${result.name}`}
                      className="btn btn-outline-primary"
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

export default Vehicles;
