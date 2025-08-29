import React, {useState} from 'react'
import Section from "./Section";

function Model1() {
  const [model, setModel] = useState("gpt-4o");
  const MODEL_OPTIONS = {
  "gpt-4o": "GPT-4O",
  "gpt-4o-mini": "GPT-4O-MINI",
  "gpt-4.1": "GPT-4.1"
};
  return (
    <div className='model'>
      <h2>{MODEL_OPTIONS[model]}</h2>
      <div>
        <label for="models">Choose a model:</label>
        <select name="models" id="models" value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="gpt-4o">gpt-4o</option>
          <option value="gpt-4o-mini">gpt-4o-mini</option>
          <option value="gpt-4.1">gpt-4.1</option>
        </select>
      </div>
      <Section
        title="Provider Profile"
        fields={[
          { label: "Business Tagline", maxLength: 100 },
          { label: "Opening Hours", maxLength: 500 },
          { label: "Pricing Info", maxLength: 500 },
          { label: "Services", maxLength: 800 },
          { label: "Who We Are", maxLength: 2000 },
          { label: "What We Do", maxLength: 2000 },
        ]}
        model={model}
      />

      <Section
        title="Activity Listings"
        fields={[
          { label: "Activity Title", maxLength: 50 },
          { label: "Description", maxLength: 2000 },
          { label: "What to Bring", maxLength: 500 },
        ]}
        model={model}
      />

      <Section
        title="Buyers"
        fields={[
          { label: "Add Family Member Info", maxLength: 500 },
          { label: "Review", maxLength: 200 },
        ]}
        model={model}
      />
    </div>
  )
}

export default Model1
