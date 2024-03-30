import React, { Component } from "react";
import FilterBTN from "../FilterBTN";

class Species extends Component {
  render() {
    const { updateSpecies, updatePageNumber } = this.props;
    let species = [
      "Human",
      "Alien",
      "Humanoid",
      "Poopybutthole",
      "Mythological",
      "Unknown",
      "Animal",
      "Disease",
      "Robot",
      "Cronenberg",
      "Planet",
    ];

    return (
      <div className="accordion-item ">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Species
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-1">
            {species.map((item, index) => {
              return (
                <FilterBTN
                  name="species"
                  index={index}
                  key={index}
                  updatePageNumber={updatePageNumber}
                  task={updateSpecies}
                  input={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Species;
