import React, { useState } from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Rating from "@mui/material/Rating";
import "./Catagory.scss";

const Brand = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
    <div style={{ display: "flex",alignItems:"start"}}>
      <input
        type="checkbox"
        style={{ height: "1.2rem", width: "1.2rem", border: "2px" }}
      />
      <label className="label">Mango</label>
    </div>
    <div style={{ display: "flex",alignItems:"start"}}>
      <input
        type="checkbox"
        style={{ height: "1.2rem", width: "1.2rem", border: "2px" }}
      />
      <label className="label">H&M</label>
    </div>
  </div>
  );
};

const PriceRange = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      <div style={{ display: "flex",alignItems:"start"}}>
        <input
          type="checkbox"
          style={{ height: "1.2rem", width: "1.2rem", border: "2px" }}
        />
        <label className="label">Under 500</label>
      </div>
      <div style={{ display: "flex",alignItems:"start"}}>
        <input
          type="checkbox"
          style={{ height: "1.2rem", width: "1.2rem", border: "2px" }}
        />
        <label className="label">1000 to 3000</label>
      </div>
    </div>
  );
};

const Ratings = () => {
  const arr = [5, 4, 3, 2, 1];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        justifyContent: "start",
      }}
    >
      {arr.map((e) => (
        <div
          style={{ display: "flex", alignItems: "start", columnGap: "1rem" }}
        >
          <input
            type="checkbox"
            style={{ height: "1.2rem", width: "1.2rem", border: "2px" }}
          />
          <Rating name="simple-controlled" value={e} readOnly />
        </div>
      ))}
    </div>
  );
};

const Catagory = () => {
  const [expandedArr, setExpanded] = useState([true,true,true]);
  const handleExpanded = (i) =>() => {
    const newExanpandArr = [...expandedArr];
    newExanpandArr[i]= !newExanpandArr[i];
    setExpanded(newExanpandArr);
  };
  return (
    <div>
      <AccordionGroup disableDivider sx={{ maxWidth: 200 }}>
        <Accordion expanded={expandedArr[0]} onChange={handleExpanded(0)} >
          <AccordionSummary >
            BRAND
          </AccordionSummary>
          <AccordionDetails>
            <Brand />
          </AccordionDetails>
        </Accordion>
          <hr />
          <br />
        <Accordion expanded={expandedArr[1]} onChange={handleExpanded(1)}>
          <AccordionSummary>PRICE RANGE</AccordionSummary>
          <AccordionDetails>
            <PriceRange />
          </AccordionDetails>
        </Accordion>
        <hr />
        <br />
        <Accordion expanded={expandedArr[2]} onChange={handleExpanded(2)}>
          <AccordionSummary>RATINGS</AccordionSummary>
          <AccordionDetails>
            <Ratings />
          </AccordionDetails>
        </Accordion>
        
      </AccordionGroup>
    </div>
  );
};


export default Catagory;