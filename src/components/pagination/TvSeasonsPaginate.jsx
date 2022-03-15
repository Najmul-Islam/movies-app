import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useTv } from "../../context/TvContext";
import "./css/pagination.css";

const TvSeasonsPaginate = ({ itemsPerPage }) => {
  const { series, setCurrentSeries } = useTv();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentSeries(series.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(series.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, series, setCurrentSeries]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % series.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        breakLabel="..."
        nextLabel={<FaAngleDoubleRight />}
        previousLabel={<FaAngleDoubleLeft />}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default TvSeasonsPaginate;
