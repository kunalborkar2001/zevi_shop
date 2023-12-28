import React, { useState } from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Rating from "@mui/material/Rating";
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import "./Catagory.scss";

const Brand = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "start" }}>
        <input
          type="checkbox"
          style={{ height: "1.2rem", width: "1.2rem", border: "2px" }}
        />
        <label className="label">Mango</label>
      </div>
      <div style={{ display: "flex", alignItems: "start" }}>
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
      <div style={{ display: "flex", alignItems: "start" }}>
        <input
          type="checkbox"
          style={{ height: "1.2rem", width: "1.2rem", border: "2px" }}
        />
        <label className="label">Under 500</label>
      </div>
      <div style={{ display: "flex", alignItems: "start" }}>
        <input
          type="checkbox"
          style={{ height: "1.2rem", width: "1.2rem", border: "2px" }}
        />
        <label className="label">1000 to 3000</label>
      </div>
    </div>
  );
};



const Catagory = () => {
  const [expandedArr, setExpanded] = useState([true, true, true]);
  const handleExpanded = (i) => () => {
    const newExanpandArr = [...expandedArr];
    newExanpandArr[i] = !newExanpandArr[i];
    setExpanded(newExanpandArr);
  };
  return (
    <div className="catagory">
      <AccordionGroup disableDivider >
        <Accordion expanded={expandedArr[0]} onChange={handleExpanded(0)} >
          <AccordionSummary >
            BRAND
          </AccordionSummary>
          <AccordionDetails>
            
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              Mango
            </div>
            
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
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
              <Checkbox />
              Under 500
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              500 To 3000
            </div>

          </AccordionDetails>
        </Accordion>
        <hr />
        <br />
        <Accordion expanded={expandedArr[2]} onChange={handleExpanded(2)}>
          <AccordionSummary>RATINGS</AccordionSummary>
          <AccordionDetails>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Rating
                name="simple-controlled"
                value={5}
                readOnly
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Rating
                name="simple-controlled"
                value={4}
                readOnly
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Rating
                name="simple-controlled"
                value={3}
                readOnly
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Rating
                name="simple-controlled"
                value={2}
                readOnly
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Rating
                name="simple-controlled"
                value={1}
                readOnly
              />
            </div>


          </AccordionDetails>
        </Accordion>

      </AccordionGroup>
    </div >
  );
};


export default Catagory;