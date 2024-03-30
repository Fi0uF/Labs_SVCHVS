import React, { Component } from "react";
import ReactPaginate from "react-paginate";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  pageChange = (data) => {
    this.props.updatePageNumber(data.selected + 1);
  };

  render() {
    const { pageNumber, info } = this.props;
    const { width } = this.state;

    return (
      <>
        <style jsx>
          {`
            a {
              color: white;
              text-decoration: none;
            }
            @media (max-width: 768px) {
              .pagination {
                font-size: 12px;
              }

              .next,
              .prev {
                display: none;
              }
            }
            @media (min-width: 768px) {
              .pagination {
                font-size: 14px;
              }
            }
          `}
        </style>
        <ReactPaginate
          className="pagination justify-content-center my-4 gap-4"
          nextLabel="Next"
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          previousLabel="Prev"
          previousClassName="btn btn-primary fs-5 prev"
          nextClassName="btn btn-primary fs-5 next"
          activeClassName="active"
          marginPagesDisplayed={width < 576 ? 1 : 2}
          pageRangeDisplayed={width < 576 ? 1 : 2}
          pageCount={info?.pages}
          onPageChange={this.pageChange}
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />
      </>
    );
  }
}

export default Pagination;
