import React from "react";

const Filter = ({
  indexOfFirstItem,
  indexOfLastItem,
  totalFilteredItems,
  handleFilter,
}) => {
  return (
    <div className="alt-filters">
      <h2>New Arrivals</h2>
      <div className="alt-right">
        <p>
          Showing {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, totalFilteredItems.length)} of{" "}
          {totalFilteredItems.length} Products
        </p>
        <i onClick={handleFilter} className="fa-solid fa-filter"></i>
      </div>
    </div>
  );
};

export default Filter;
