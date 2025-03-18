import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let value = await res.json();
      setData(value);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}>
      {Loading
        ? "Loading"
        : data.map((item) => (
            <div>
              <p style={{ width: "20rem" }}>{item.title}</p>
              <p style={{ width: "20rem" }}>{item.body}</p>
            </div>
          ))}
    </div>
  );
}

export default App;
