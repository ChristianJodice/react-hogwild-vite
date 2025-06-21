import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "wood",
    image: "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piggy_smalls.jpg"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      ...formData,
      weight: parseFloat(formData.weight)
    };
    onAddHog(newHog);
    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": "wood",
      image: "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piggy_smalls.jpg"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          step="0.1"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input
          type="text"
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            id="greased"
            name="greased"
            checked={formData.greased}
            onChange={handleChange}
          />
          <label htmlFor="greased">Greased?</label>
        </div>
      </div>
      <button type="submit" className="ui button">Add Hog</button>
    </form>
  );
}

export default HogForm; 