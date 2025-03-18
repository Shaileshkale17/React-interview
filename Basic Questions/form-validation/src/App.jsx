import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!Email || !Email.includes("@")) {
      throw console.error("invaled Email");
      return;
    }
    if (!Password || Password.length < 6) {
      throw console.error("invaled Password");
      return;
    }
    console.log({ Email, Password });
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            id="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            name="Password"
            id="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
