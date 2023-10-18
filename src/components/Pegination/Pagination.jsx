import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 4,
}) => {
  const pages = [];
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2) - 1;

  for (let page = 1; page <= totalPages; page++) {
    if (
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - halfMaxVisiblePages &&
        page <= currentPage + halfMaxVisiblePages)
    ) {
      pages.push(
        <p
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </p>
      );
    } else if (
      (page === currentPage - halfMaxVisiblePages - 1 ||
        page === currentPage + halfMaxVisiblePages + 1) &&
      pages[pages.length - 1] !== "..."
    ) {
      pages.push("...");
    }
  }

  const currentPages = pages.map((page, index) =>
    typeof page === "number" ? (
      <button
        key={index}
        onClick={() => onPageChange(page)}
        className={currentPage === page ? "active-page" : ""}
        style={
          currentPage === page
            ? {
                backgroundColor: "#007bff",
                color: "#fff",
                border: "1px solid #007bff",
              }
            : {}
        }
      >
        {page}
      </button>
    ) : (
      <span key={index} className="ellipsis">
        {page}
      </span>
    )
  );

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-arrow-right fa-flip-horizontal"></i>
        <span className="prev-page">Previous</span>
      </button>
      <div className="numbers-shown">{currentPages}</div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages && window.scrollTo(0, 0)}
      >
        <span className="next-page">Next</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
