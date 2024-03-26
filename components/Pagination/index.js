import React, {useCallback} from "react";
import styles from "./Pagination.module.scss";
import {usePagination, DOTS} from "./usePagination";
import CustomIcons from "../right";
import CustomIcons1 from "../left";
const Pagination = (props) => {
  const {
    onChange,
    totalCount = 0,
    siblingCount,
    pageSize, // total records per page
    activePage, // current active page
    setActivePage,
  } = props;
  //const [activePage, setActivePage] = useState(currentPage || 1);
  const paginationRange = usePagination({
    currentPage: activePage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onPageChange = useCallback(
    (num) => {
      const lastPage = paginationRange?.[paginationRange.length - 1];
      if (num >= 1 && num <= lastPage && num != activePage) {
        setActivePage(num);
        if (typeof onChange === "function") onChange(num);
      }
    },
    [activePage, onChange, setActivePage, paginationRange]
  );

  if (activePage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(activePage + 1);
  };

  const onPrevious = () => {
    onPageChange(activePage - 1);
  };

  return (
    <div className={`${styles["pagination"]} flex center mt-2`}>
      <button
        className="btn-small prev flex center mr-1"
        onClick={onPrevious}
      >
        <CustomIcons1 name="left" className="default-text-color rotate-90" />

      </button>
      <ul className={`${styles["pagination-list"]} flex`}>
        {paginationRange?.map((pageNumber, key) => {
          if (pageNumber === DOTS) {
            return (
              <li key={`page${key}`}>
                <span className={`${styles["dot"]} flex center`}>...</span>
              </li>
            );
          }

          return (
            <li
              key={`page${key}`}
              className={pageNumber === activePage ? styles["active"] : ""}
              onClick={() => onPageChange(pageNumber)}
            >
              <span className="flex justify-content-center">{pageNumber}</span>
            </li>
          );
        })}
      </ul>

      <button
        className="btn-small next flex center ml-1/2"
        onClick={onNext}
      >
        <CustomIcons name="right" className="default-text-color" />
      </button>
    </div>
  );
};

export default Pagination;
