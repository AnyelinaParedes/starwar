import React from "react";
import "../../styles/home.css";
import Planets from "../component/planets";
import Carusel from "../component/carusel";

export const Planetas = () => {
  return (
    <>
      <div className="container-sm ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Carusel/>
            </div>
          </div>
        </div>
     
          
          <Planets/>
       
      </div>
    </>
  );
};

export default Planets;