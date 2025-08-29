import React from "react";
import InputField from "./InputField";

export default function Section({ title, fields, model }) {
  console.log("model:", model)
  return (
    <div className="section">
      <h2>{title}</h2>
      {fields.map((f, i) => (
        <InputField key={i} label={f.label} field={f.label} maxLength={f.maxLength} model={model} />
      ))}
    </div>
  );
}
