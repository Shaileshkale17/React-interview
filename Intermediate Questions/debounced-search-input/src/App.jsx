import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async (paras) => {
    console.log("API call with:", paras);
    // Simulate fetching data
    setData([{ title: `Result for "${paras}"` }]);
  };

  // Corrected debounced function
  const debounced = (fn, d) => {
    let time;
    return (...args) => {
      clearTimeout(time);
      time = setTimeout(() => {
        fn.apply(this, args);
      }, d);
    };
  };

  let debouncedFetch = useCallback(debounced(fetchData, 300));

  return (
    <>
      <input
        type="text"
        name="Task"
        id="Task"
        onChange={(e) => debouncedFetch(e.target.value)}
      />
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
