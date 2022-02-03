import React, { useState } from "react";
import { Button } from "../../components/Button";
import "./index.css";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [saved, setSaved] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const save = () => {
    const data = {
      date: new Date().toLocaleDateString("en-US"),
      count,
    };

    setSaved([...saved, data]);
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title">Passangers-count</h1>
      <span className="counter">{count}</span>
      <Button onClick={increment} label="Increment" />
      <Button onClick={save} label="Save" />

      <div className="saved-wrapper">
        {saved.map((s, index) => (
          <span key={index} className="saved">{`${s.date} - ${s.count}`}</span>
        ))}
      </div>
    </div>
  );
};
