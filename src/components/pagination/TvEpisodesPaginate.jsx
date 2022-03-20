import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useTv } from "../../context/TvContext";
import "./css/pagination.css";

const TvEpisodesPaginate = ({ itemsPerPage }) => {
  const { allEpisode, setCurrentEpisode } = useTv();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentEpisode(allEpisode.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allEpisode.length / itemsPerPage));
  }, [pageCount, itemOffset, allEpisode, setCurrentEpisode, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allEpisode.length;
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

export default TvEpisodesPaginate;
