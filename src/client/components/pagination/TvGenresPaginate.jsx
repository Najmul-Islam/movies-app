import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useTvGenres } from "../../context/TvGenresContext";

import "./css/pagination.css";
const TvGenresPaginate = ({ itemsPerPage }) => {
  const {
    tvGenreSeasons,
    setCurrentTvGenreSeasons,
    pageCount,
    setPageCount,
    itemOffset,
    setItemOffset,
  } = useTvGenres();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentTvGenreSeasons(tvGenreSeasons.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tvGenreSeasons.length / itemsPerPage));
  }, [
    itemOffset,
    itemsPerPage,
    tvGenreSeasons,
    setCurrentTvGenreSeasons,
    pageCount,
    setPageCount,
    setItemOffset,
  ]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tvGenreSeasons.length;
    setItemOffset(newOffset);
  };

  const currentPage = Math.round(itemOffset / itemsPerPage);
  return (
    <>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        breakLabel="..."
        nextLabel={<FaAngleDoubleRight />}
        previousLabel={<FaAngleDoubleLeft />}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
      />
    </>
  );
};

export default TvGenresPaginate;
