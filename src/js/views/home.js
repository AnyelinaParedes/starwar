import React from "react";
import "../../styles/home.css";
import Characters from "../component/characters";
import Carusel from "../component/carusel";

export const HomeCharacters = () => {
  return (
    <>
      <div className="container-sm 960">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
            <Carusel/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex">
          <Characters/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCharacters;