import "./index.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  let headerStyles = {
    transform: `translateY(${status ? "-160px" : "0px"})`,
  };

  let arrowStyles = {
    // transform: `rotate(${status ? "-40deg" : "-310deg"})`,
    transform: `rotate(${status ? "0deg" : "-180deg"})`,
  };
  return (
    <div className="App">
      <header style={headerStyles}>
        <div className="links">
          <h3>SANJEEV MIDDA</h3>
          <h3 style={{ marginRight: "70px" }}>WORKS</h3>
          <h3>ABOUT</h3>
        </div>

        <div
          className="arrow"
          onClick={() => {
            setStatus(!status);
          }}
          style={arrowStyles}
        >
          <svg
            viewBox="0 0 1055 1050"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M983.74 501.985L571.658 978.523"
              stroke="#1CE69D"
              stroke-width="100"
              stroke-linecap="square"
            />
            <path
              d="M561.065 50.5488L553.902 924.145"
              stroke="#1CE69D"
              stroke-width="100"
              stroke-linecap="square"
            />
            <path
              d="M983.74 501.985L571.658 978.523"
              stroke="#1CE69D"
              stroke-width="100"
              stroke-linecap="square"
            />
            <path
              d="M579.065 50.5488L571.902 924.145"
              stroke="#1CE69D"
              stroke-width="100"
              stroke-linecap="square"
            />
            <path
              d="M70.915 545.51L547.453 957.592"
              stroke="#1CE69D"
              stroke-width="100"
              stroke-linecap="square"
            />
          </svg>
        </div>
      </header>

      <h1>MOVEMENT /</h1>

      <div className="cardContainer">
        <div className="cardHolder">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
