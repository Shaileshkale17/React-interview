import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(
    Array(4)
      .fill(null)
      .map(() =>
        Array(4)
          .fill(null)
          .map(() => ({ text: "", color: "" }))
      )
  );

  const [indexof, setindexof] = useState({ row: null, col: null });
  const [Colors, setColor] = useState("");

  const handleclieck = (rowindex, colindex, text, colors) => {
    console.table([rowindex, colindex, text, colors]);
    const value = count.map((row, rIdx) =>
      rowindex === rIdx
        ? row.map((col, Colind) =>
            Colind === colindex ? { ...col, text: text, color: Colors } : col
          )
        : row
    );

    setCount(value);
  };
  const ArrColor = ["red", "green", "blue"];
  console.log(indexof);
  return (
    <>
      <h1>google sheet clone</h1>
      <div>
        {ArrColor.map((color, index) => (
          <button
            key={index}
            style={{
              margin: "5px",
              backgroundColor: color,
              color: "white",
              padding: "5px 15px ",
              borderRadius: "5px",
            }}
            onClick={() => setColor(color)}>
            {color}
          </button>
        ))}
      </div>

      {count.map((row, indexRow) => (
        <div key={indexRow} style={{ display: "flex", flexDirection: "row" }}>
          {row.map((item, index) =>
            indexof.row === indexRow && indexof.col === index ? (
              <input
                type="text"
                name={index}
                key={index}
                id={index}
                value={item.text}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1px",
                  border: "1px solid black",
                  width: "6rem",
                  height: "6rem",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onChange={(e) => handleclieck(indexRow, index, e.target.value)}
              />
            ) : (
              <input
                type="text"
                name={index}
                id={index}
                value={item.text}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1px",
                  border: "1px solid black",
                  width: "6rem",
                  height: "6rem",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: item.color,
                }}
                onClick={() => setindexof({ row: indexRow, col: index })}
                readOnly
              />
            )
          )}
        </div>
      ))}
    </>
  );
}

export default App;
