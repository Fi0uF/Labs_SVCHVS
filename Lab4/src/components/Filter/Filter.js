import React, { Component } from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

class Filter extends Component {
  clearFilters = () => {
    const {
      updateStatus,
      updateGender,
      updateSpecies,
      updatePageNumber,
    } = this.props;
    
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  render() {
    return (
      <div className="col-lg-3 col-12 mb-5">
        <div className="text-center fw-bold fs-4 mb-2">Filters</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={this.clearFilters}
          className="text-primary text-decoration-underline text-center mb-3"
        >
          Clear Filters
        </div>
        <div className="accordion" id="accordionExample">
          <Status {...this.props} />
          <Species {...this.props} />
          <Gender {...this.props} />
        </div>
      </div>
    );
  }
}

export default Filter;
