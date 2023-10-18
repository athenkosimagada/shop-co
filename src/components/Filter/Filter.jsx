import React from "react";

const Filter = ({
  indexOfFirstItem,
  indexOfLastItem,
  totalFilteredItems,
  handleFilter,
  currentPageName
}) => {
  return (
    <div className="alt-filters"  style={{ alignItems: 'center' }}>
      <h3>{currentPageName}{currentPageName === "Search Results" && ` (${totalFilteredItems.length})`}</h3> 
      <div className="alt-right">
        <p>
          Showing {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, totalFilteredItems.length)} of{" "}
          {totalFilteredItems.length} Products
        </p>
        {window.innerWidth <= 800 && <i onClick={handleFilter} className="fa-solid fa-filter"></i>}
      </div>
    </div>
  );
};

export default Filter;
