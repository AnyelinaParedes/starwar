import React from "react";
import "../../styles/home.css";

import Carusel from "../component/carusel";
import Vehicles from "../component/Vehicles";

export const Vehilces = () => {
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
          <Vehicles/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehilces;