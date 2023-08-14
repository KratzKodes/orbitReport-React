// import satData from "./satData";
import React from "react";
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  displaySats = [...displaySats];

  function SatHeightDataSorting() {
    let orbitHeightBttns = displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      );
    });

    return orbitHeightBttns;
  }

  return (
    <div>
      <SatHeightDataSorting />
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
