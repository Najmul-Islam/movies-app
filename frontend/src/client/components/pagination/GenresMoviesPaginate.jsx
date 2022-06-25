import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useGenres } from "../../context/GenresContext";
import "./css/pagination.css";
const GenresMoviesPaginate = ({ itemsPerPage }) => {
  const {
    genreMovies,
    setCurrentGenreMovies,
    pageCount,
    setPageCount,
    itemOffset,
    setItemOffset,
  } = useGenres();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentGenreMovies(genreMovies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(genreMovies.length / itemsPerPage));
  }, [
    itemOffset,
    itemsPerPage,
    genreMovies,
    setCurrentGenreMovies,
    pageCount,
    setPageCount,
    setItemOffset,
  ]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % genreMovies.length;
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

export default GenresMoviesPaginate;
