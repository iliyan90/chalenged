import React from "react";
import { usePagination, DOTS } from "./usePagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./pagination.css";
const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (pageSize === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrev = () => {
    if(currentPage != 1){
        onPageChange(currentPage - 1);
    }
  };

  return (
    <ul className="pag-ul">
      <li onClick={onPrev} className='pag-li'>
          <IoIosArrowBack />
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return <li className="pag-dots" key={i}>...</li>;
        }
        // display the first, last, and current pages
        return (
          <li
            key={i}
            onClick={() => onPageChange(pageNumber)}
            className={currentPage === paginationRange[i]? " pag-li pag-li-active": 'pag-li'}
          >
            {pageNumber}
          </li>
        );
      })}
      <li onClick={currentPage=== 100 ? null : onNext} className='pag-li'>
        <IoIosArrowForward />
      </li>
    </ul>
  );
};

export default Pagination;
