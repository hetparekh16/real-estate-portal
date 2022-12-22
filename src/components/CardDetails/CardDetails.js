import React, { useEffect, useState } from "react";
import classes from "./CardDetails.module.css";
import jsonData from "../../MOCK_DATA.json";
import Bed from "../../img/bed.png";
import Bathed from "../../img/bathtub.png";
import Floor from "../../img/tiles.png";
const CardDetails = ({ data }) => {
  //   console.log(locationVal, priceVal, propertyTypeVal, dateVal);
  //   console.log("Daa", data);
  let count = 1;
  //   console.log("yes", data);

  return (
    <>
      {data.length === 0 ? (
        <h1 className="mx-5">No Data Available Due Small Size Data</h1>
      ) : (
        data.map((ele) => {
          return (
            <div key={ele.id} className={`card ${classes.card_details}`}>
              {/* {console.log()} */}
              <img
                src={`https://picsum.photos/id/${ele.id}/250/200`}
                alt={ele.property_name}
              />
              <div className="card-body">
                <p className="price fw-light">
                  <strong style={{ color: "#7165F1", fontSize: "1.3rem" }}>
                    {ele.price}
                  </strong>
                  / month
                </p>
                <h5 className="card-title">{ele.property_name}</h5>
                <p className="card-text">{ele.address}</p>
                <hr />
                <div className={`${classes.icon_data}`}>
                  <div>
                    <p className={`${classes.bed_area}`}>2 BHK</p>
                  </div>
                  <div>
                    <span className={`${classes.bath_area}`}> 2 Bathrooms</span>
                  </div>
                  <div>
                    <span className={`${classes.floor_area}`}>5*2 sq mmt</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default CardDetails;
