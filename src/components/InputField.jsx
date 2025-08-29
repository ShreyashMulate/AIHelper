import React, { useState } from "react";
import { improveText, fixGrammar } from "../api/api";

export default function InputField({ label, field, maxLength, model}) {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [prevData, setprevData] = useState(".");

  const handleImprove = async () => {
    const res = await improveText(value, field, model);
    setCount(prev => prev+1)
    setValue(res.data.result);
  };

  const handleFix = async () => {
    if(prevData != value){
      const res = await fixGrammar(value, model);
      setprevData(res.data.result);
      setValue(res.data.result);
    }
  };

  return (
    <div className="field">
      <label>{label} ({maxLength} chars)</label>
      <div className="actions">
        <button 
        onClick={handleImprove}
        className="improve"
        disabled={count < 3 ? false : true}>Improve</button>
        <button onClick={handleFix}>Fix Grammar</button>
        <span className="counter">{count}/3</span>
      </div>
      <textarea
        value={value}
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
