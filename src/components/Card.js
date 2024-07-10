import React, { useState, useEffect } from "react";

const Card = () => {
  let colors = [
    "gold",
    "grey",
    "green",
    "pink",
    "purple",
    "beige",
    "white",
    "yellow",
    "brown",
    "black",
    "red",
    "orange",
  ];

  const [colorsSelected, setColorsSelected] = useState({
    colorOne: colors[Math.floor(Math.random() * colors.length)],
    colorTwo: colors[Math.floor(Math.random() * colors.length)],
  });

  let circleStyles = {
    background: `linear-gradient(${colorsSelected.colorOne}, ${colorsSelected.colorTwo})`,
  };

  //   useEffect(() => {
  //     setInterval(() => {
  //       setColorsSelected({
  //         colorOne: colors[Math.floor(Math.random() * colors.length)],
  //         colorTwo: colors[Math.floor(Math.random() * colors.length)],
  //       });
  //     }, 1000);
  //   }, []);

  return (
    <div className="card">
      <h4>
        {colorsSelected.colorOne} / {colorsSelected.colorTwo}
      </h4>
      <div className="circle" style={circleStyles}></div>
    </div>
  );
};

export default Card;
