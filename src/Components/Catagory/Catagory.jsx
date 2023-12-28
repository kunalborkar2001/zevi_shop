import React, { useEffect, useState } from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import "./Catagory.scss";

const Catagory = ({catagoryData}) => {
  const [filteredData, setFilteredData] = useState({
    brand: [],
    range: [],
    rating: [],
  });

  useEffect(() => {
    // console.log(filteredData);
    catagoryData(filteredData)
  }, [filteredData]);

  const handleBrand = (brand) => {
    setFilteredData((prevData) => {
      const isBrandSelected = prevData.brand.includes(brand);
      const updatedBrand = isBrandSelected
        ? prevData.brand.filter((selectedBrand) => selectedBrand !== brand)
        : [...prevData.brand, brand];

      return {
        ...prevData,
        brand: updatedBrand,
      };
    });
  };

  const handleRange = (range) => {
    setFilteredData((prevData) => {
      const isRangeSelected = prevData.range.includes(range);
      const updatedRange = isRangeSelected
        ? prevData.range.filter((selectedRange) => selectedRange !== range)
        : [...prevData.range, range];

      return {
        ...prevData,
        range: updatedRange,
      };
    });
  };

  const handleRating = (rating) => {
    setFilteredData((prevData) => {
      const isRatingSelected = prevData.rating.includes(rating);
      const updatedRating = isRatingSelected
        ? prevData.rating.filter((selectedRating) => selectedRating !== rating)
        : [...prevData.rating, rating];

      return {
        ...prevData,
        rating: updatedRating,
      };
    });
  };

  const [expandedArr, setExpanded] = useState([true, true, true]);
  const handleExpanded = (i) => () => {
    const newExpandedArr = [...expandedArr];
    newExpandedArr[i] = !newExpandedArr[i];
    setExpanded(newExpandedArr);
  };

  return (
    <div className="catagory">
      <AccordionGroup disableDivider>
        <Accordion expanded={expandedArr[0]} onChange={handleExpanded(0)}>
          <AccordionSummary>BRAND</AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                value="Mango"
                onChange={() => handleBrand("Mango")}
                checked={filteredData.brand.includes("Mango")}
              />
              Mango
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                value="H&M"
                onChange={() => handleBrand("H&M")}
                checked={filteredData.brand.includes("H&M")}
              />
              H&M
            </div>
          </AccordionDetails>
        </Accordion>
        <hr />
        <br />
        <Accordion expanded={expandedArr[1]} onChange={handleExpanded(1)}>
          <AccordionSummary>PRICE RANGE</AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                value="0-500"
                onChange={() => handleRange("0-500")}
                checked={filteredData.range.includes("0-500")}
              />
              Under 500
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                value="501-3000"
                onChange={() => handleRange("501-3000")}
                checked={filteredData.range.includes("501-3000")}
              />
              500 To 3000
            </div>
          </AccordionDetails>
        </Accordion>
        <hr />
        <br />
        <Accordion expanded={expandedArr[2]} onChange={handleExpanded(2)}>
          <AccordionSummary>RATINGS</AccordionSummary>
          <AccordionDetails>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div
                key={rating}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Checkbox
                  value={rating}
                  onChange={() => handleRating(rating)}
                  checked={filteredData.rating.includes(rating)}
                />
                <Rating
                  name="simple-controlled"
                  value={rating}
                  readOnly
                />
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
};

export default Catagory;
