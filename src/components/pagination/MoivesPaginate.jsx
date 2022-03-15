import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useMovies } from "../../context/MoviesContext";
import "./css/pagination.css";

const MoviesPaginate = ({ itemsPerPage }) => {
  const {
    allMovies,
    setCurrentMovies,
    pageCount,
    setPageCount,
    itemOffset,
    setItemOffset,
  } = useMovies();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentMovies(allMovies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allMovies.length / itemsPerPage));
  }, [
    allMovies,
    setCurrentMovies,
    pageCount,
    setPageCount,
    itemOffset,
    setItemOffset,
    itemsPerPage,
  ]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allMovies.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
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

export default MoviesPaginate;
