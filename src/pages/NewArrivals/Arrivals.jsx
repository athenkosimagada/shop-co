import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { Link } from "react-router-dom";
import "./Arrivals.css";
import NewItem from "../../components/NewItem/NewItem";
import Filters from "../../components/Filters/Filters";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pegination/Pagination";

const Arrivals = ({ data, currentPageName }) => {
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

  const [filterDataArray, setFilterDataArray] = useState([]);

  const handleApplyFilter = (filterData) => {
    setPressed(!pressed);
    setItemsPerPage(calculateItemsPerPage());
    setFilterDataArray(filterData);
    setApplyFilters(true);
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  const shouldDisplayItem = (item, index) => {
    if (!applyFilters) {
      return true;
    }

    if (
      filterDataArray.selectedTypes.length === 0 &&
      filterDataArray.selectedColor.length === 0 &&
      filterDataArray.selectedSize.length === 0 &&
      filterDataArray.selectedStyles.length === 0
    ) {
      return (
        (item.price - item.price * item.discount) >= filterDataArray.sliderValue[0] &&
        (item.price - item.price * item.discount) <= filterDataArray.sliderValue[1]
      );
    }
    return (
      (filterDataArray.selectedTypes.length === 0 ||
        filterDataArray.selectedTypes.includes(item.type)) &&
      (filterDataArray.selectedColor.length === 0 ||
        item.colors.some((colorObj) =>
          filterDataArray.selectedColor.includes(Object.values(colorObj)[0])
        )) &&
      (filterDataArray.selectedSize.length === 0 ||
        item.sizes.some(
          (sizeItem) => filterDataArray.selectedSize === sizeItem.size
        )) &&
      (filterDataArray.selectedStyles.length === 0 ||
        filterDataArray.selectedStyles.includes(item.style)) &&
      (item.price - item.price * item.discount) >= filterDataArray.sliderValue[0] &&
      (item.price - item.price * item.discount) <= filterDataArray.sliderValue[1]
    );
  };

  const displayData = data.filter(
    (item, index) => shouldDisplayItem(item, index) && true
  );

  const totalPages = Math.ceil(displayData.length / itemsPerPage);

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
    displayData.length
  );

  const renderItems = displayData
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
          {currentPageName === "Men" || currentPageName === "Women" 
          ?<>
          <Link to="/">
            <p>Home</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <Link to="/shop">
            <p>Shop</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p>{currentPageName}</p>
          </>
          :<>
          <Link to="/">
            <p>Home</p> <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p>{currentPageName}</p>
          </>
          }
        </div>
        <div className="page">
          <Filter
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}
            totalFilteredItems={displayData}
            handleFilter={handleFilter}
            pressed={pressed}
            currentPageName={currentPageName}
          />
          <div className="main">
            <Filters
              data={data}
              handleApplyFilter={handleApplyFilter}
              pressed={pressed}
              handleFilter={handleFilter}
            />
            <div className="right-items">
              {renderItems.length > 0 ? (
                <div className="items">{renderItems}</div>
              ) : (
                <p className="center">No items found!</p>
              )}
              <div className="pagination">
                {renderItems.length > 0 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Arrivals;
