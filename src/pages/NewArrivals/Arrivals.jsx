import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { data } from "../../constants";
import { Link } from "react-router-dom";
import "./Arrivals.css";
import NewItem from "../../components/NewItem/NewItem";
import Filters from "../../components/Filters/Filters";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pegination/Pagination";

const Arrivals = () => {
  const [pressed, setPressed] = useState(false);
  const [applyFilters, setApplyFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(calculateItemsPerPage());

  useEffect(() => {
    setApplyFilters(false);
    window.scrollTo(0, 0);
  }, []);

  const handleFilter = () => {
    setPressed(!pressed);
  };

  const handleApplyFilter = ({ value }) => {
    setApplyFilters(value);
    setCurrentPage(1); // Reset to the first page
    window.scrollTo(0, 0);
  };

  const shouldDisplayItem = (item, index) => {
    if (!applyFilters) {
      return true;
    }

    if (
      selectedTypes.length === 0 &&
      selectedColor.length === 0 &&
      selectedSize.length === 0 &&
      selectedStyles.length === 0
    ) {
      return item.price >= sliderValue[0] && item.price <= sliderValue[1];
    }
    return (
      (selectedTypes.length === 0 || selectedTypes.includes(item.type)) &&
      (selectedColor.length === 0 ||
        item.colors.some((colorObj) =>
          selectedColor.includes(Object.values(colorObj)[0])
        )) &&
      (selectedSize.length === 0 ||
        item.sizes.some((sizeItem) => selectedSize === sizeItem.size)) &&
      (selectedStyles.length === 0 || selectedStyles.includes(item.style)) &&
      item.price >= sliderValue[0] &&
      item.price <= sliderValue[1]
    );
  };

  const totalFilteredItems = data.clothes.filter(
    (item, index) => item.new === true && shouldDisplayItem(item, index)
  );
  
  const totalItemsBeforeFilters = data.clothes.filter(
    (item) => item.new === true
  );
  
  const totalPages = Math.ceil(totalItemsBeforeFilters.length / itemsPerPage);
  
  function calculateItemsPerPage() {
    const screenWidth = window.innerWidth;
    let numColumns = 3;

    if (screenWidth <= 1050 && screenWidth > 800) {
      numColumns = 2;
    } else if (screenWidth <= 800) {
      numColumns = 1;
    }

    return numColumns * 3;
  }

  window.addEventListener("resize", () => {
    setItemsPerPage(calculateItemsPerPage());
  });

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = Math.min(
    indexOfFirstItem + itemsPerPage,
    totalFilteredItems.length
  );

  const renderItems = totalFilteredItems
    .slice(indexOfFirstItem, indexOfLastItem)
    .map((item) => (
      <Link to={`/shop/${item.id}`} key={item.id}>
        <NewItem
          imgUrl={item.imgUrls[0].pic}
          title={item.title}
          price={item.price}
          rate={item.rate}
          discount={item.discount}
        />
      </Link>
    ));

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout isFilterActive={pressed}>
      <div className="arrivals">
        <div className="navigation">
          <Link to="/">
            <p>Home</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p>New Arrivals</p>
        </div>
        <div className="page">
          <Filter
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}
            totalFilteredItems={totalFilteredItems}
            handleFilter={handleFilter}
            pressed={pressed}
          />
          <div className="main">
            <Filters
              handleApplyFilter={handleApplyFilter}
              pressed={pressed}
              handleFilter={handleFilter}
            />
            <div className="right-items">
              <div className="items">{renderItems}</div>
              <div className="pagination">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Arrivals;
