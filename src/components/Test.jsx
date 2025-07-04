import { useState } from "react";

export default function Test() {
  const date = new Date();
  const [inputvalue, setInputvalue] = useState(1);
  const [rangevalue, setRangevalue] = useState(1);
  const [today, setToday] = useState(date);

  const vlaueHandler = (e) => {
    console.log(e.target.value);
    setInputvalue(e.target.value);
  };

  const decriseHandler = () => {
    setInputvalue((prev) => prev - rangevalue);
    setToday((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - rangevalue);
      return newDate;
    });
  };
  const incriseHandler = () => {
    setInputvalue((prev) => prev + rangevalue);
    setToday((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + rangevalue);
      return newDate;
    });
  };

  const rangeValueHandler = (e) => {
    setRangevalue(+e.target.value);
  };

  const resetHandler = () => {
    setInputvalue(1);
    setRangevalue(1);
  };

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        border: "2px solid red",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="range"
          min={1}
          max={10}
          value={rangevalue}
          onChange={(e) => rangeValueHandler(e)}
        />
        <span>{rangevalue}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={decriseHandler}>-</button>

        <input
          type="number"
          value={inputvalue}
          onChange={(e) => vlaueHandler(e)}
        />

        <button onClick={incriseHandler}>+</button>
      </div>
      <div>
        <p>
          {inputvalue > 0
            ? `${inputvalue} days from ${today}`
            : ` ${Math.abs(inputvalue)} days past ${today} `}
        </p>
      </div>
      <button onClick={resetHandler}>rest</button>
    </div>
  );
}
