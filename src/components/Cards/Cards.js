import React from "react";
import CardDetails from "../CardDetails/CardDetails";
import classes from "./Cards.module.css";
const Cards = ({ data }) => {
  //   console.log(locationVal, priceVal, propertyTypeVal, dateVal);
  //   console.log(data);
  return (
    <>
      <div className={`${classes.card_grid}`}>
        <CardDetails data={data} />
      </div>
    </>
  );
};

export default Cards;
