import React from "react";

function Controls({ greasedOnly, onGreasedChange, sortBy, onSortChange }) {
  return (
    <div className="ui form">
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            id="greased-filter"
            checked={greasedOnly}
            onChange={onGreasedChange}
          />
          <label htmlFor="greased-filter">Greased Pigs Only?</label>
        </div>
      </div>
      <div className="field">
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={onSortChange}
          className="ui dropdown"
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default Controls; 