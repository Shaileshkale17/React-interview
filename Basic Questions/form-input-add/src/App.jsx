import React, { useState } from "react";

const App = () => {
  const [FormData, SetFormData] = useState([""]);

  const handleFormChange = (index, value) => {
    const newFormData = [...FormData];
    newFormData[index] = value;
    SetFormData(newFormData);
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  const deleteInput = (id) => {
    const updatedFormData = FormData.filter((_, index) => index !== id);
    SetFormData(updatedFormData);
  };

  return (
    <>
      <form
        onSubmit={submitData}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}>
        {FormData.map((_, index) => (
          <div key={index} style={{ display: "flex", gap: "5px" }}>
            <input
              type="text"
              value={FormData[index]}
              onChange={(e) => handleFormChange(index, e.target.value)}
            />
            <button type="button" onClick={() => deleteInput(index)}>
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => SetFormData((prev) => [...prev, ""])}>
          Add
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
