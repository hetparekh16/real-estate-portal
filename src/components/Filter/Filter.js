import { formToJSON } from "axios";
import React, { useRef, useState, useEffect } from "react";
import jsonData from "../../MOCK_DATA.json";
import Cards from "../Cards/Cards";
import classes from "./Filter.module.css";
const Filter = () => {
  const locationRef = useRef("");
  const priceRef = useRef("");
  const propertyTypeRef = useRef("");
  const dateRef = useRef("");
  const [locationVal, setLocationVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [propertyTypeVal, setPropertyTypeVal] = useState("");
  const [dateVal, setDateVal] = useState("");
  let [filteredData, setFilteredData] = useState([]);
  const [flag, setFlag] = useState(true);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setLocationVal(locationRef.current.value);
    setPriceVal(priceRef.current.value);
    // console.log(priceVal);
    setPropertyTypeVal(propertyTypeRef.current.value);
    // console.log(propertyTypeVal);

    setDateVal(dateRef.current.value);
    setFlag(!flag);
    setClicked(true);
  };

  useEffect(() => {
    const newItem = jsonData.filter((newVal) => {
      return (
        newVal.location === locationVal &&
        newVal.property_type === propertyTypeVal &&
        +priceVal.split("-")[0] < +newVal.price.slice(1) &&
        +newVal.price.slice(1) < +priceVal.split("-")[1]
        // newVal.move_in_date.split("/")[1] === dateVal.split("/")[1]
      );
    });
    setFilteredData(newItem);
  }, [flag]);
  //   console.log(typeof jsonData, typeof filteredData);

  return (
    <>
      <div className={classes.filterBlock}>
        <div className={`${classes.input_group}`}>
          <div className={`${classes.div_input}`}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Location
            </label>
            <select
              className={`form-select ${classes.filter_field}`}
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              ref={locationRef}
            >
              <option>Choose...</option>

              {jsonData.map((ele) => {
                return (
                  <option value={ele.location} key={ele.id}>
                    {ele.location}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="vr"></div>
          <div className={`${classes.div_input}`}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Move in Date
            </label>
            <input
              type="date"
              ref={dateRef}
              className={`form-select ${classes.filter_field}`}
              name="select-movein-date"
              id=""
            />
          </div>

          <div className="vr"></div>
          <div className={`${classes.div_input}`}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Price
            </label>
            <select
              className={`form-select ${classes.filter_field}`}
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              ref={priceRef}
            >
              <option>Choose...</option>

              <option value="1000-1500">$1000-$2000</option>
              <option value="2000-3000">$2000-$3000</option>
              <option value="3000-4000">$3000-$4000</option>
              <option value="4000-5000">$4000-$5000</option>
              <option value="5000-6000">$5000-$6000</option>
              <option value="6000-7000">$6000-$7000</option>
              <option value="7000-8000">$7000-$8000</option>
              <option value="8000-9000">$8000-$9000</option>
              <option value="9000-10000">$9000-$10000</option>
            </select>
          </div>

          <div className="vr"></div>
          <div className={`${classes.div_input}`}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Property Type
            </label>
            <select
              className={`form-select ${classes.filter_field}`}
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              ref={propertyTypeRef}
            >
              <option>Choose...</option>
              <option value="Bunglow">Bunglow</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Dormitory">Dormitory</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className={`btn btn-primary ${classes.filter_button}`}
          onClick={handleClick}
        >
          Apply
        </button>
      </div>
      {!clicked ? (
        <Cards data={jsonData}></Cards>
      ) : (
        <Cards data={filteredData}></Cards>
      )}
    </>
  );
};

export default Filter;
