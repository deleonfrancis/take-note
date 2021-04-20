import React from 'react'

function FilterNotes() {

    return (
        <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span
            style={{ border: "none" }}
            className="input-group-text"
            id="basic-addon1"
          >
            <i className="fas fa-search"></i>
          </span>
        </div>
        <input
          id="filterNote"
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    )
}

export default FilterNotes
