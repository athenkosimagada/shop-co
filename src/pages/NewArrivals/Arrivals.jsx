import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { data } from "../../constants";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./Arrivals.css";
import NewItem from "../../components/NewItem/NewItem";

const Arrivals = () => {
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [applyFilters, setApplyFilters] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleFilter = () => {
    setPressed(!pressed);
  };

  const handleApplyFilter = () => {
    setApplyFilters(true);
  };

  const maxPrice = Math.max(
    ...data.clothes
      .filter((item) => item.new === true)
      .map((item) => item.price),
    100
  );
  const [sliderValue, setSliderValue] = useState([0, maxPrice]);
  const allTypes = Array.from(
    new Set(
      data.clothes.filter((item) => item.new === true).map((item) => item.type)
    )
  );
  const allColors = [
    ...new Set(
      data.clothes
        .filter((item) => item.new === true)
        .flatMap((item) =>
          item.colors.map((colorObj) => Object.values(colorObj)[0])
        )
    ),
  ];
  const availableSizes = [
    ...new Set(
      data.clothes
        .filter((item) => item.new === true)
        .flatMap((item) => item.sizes.map((sizeObj) => sizeObj.size))
    ),
  ];

  const allStyles = Array.from(
    new Set(
      data.clothes.filter((item) => item.new === true).map((item) => item.style)
    )
  );
  const handleStyleChange = (style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };
  useEffect(() => {
    setApplyFilters(false);
    window.scrollTo(0, 0);
  }, []);

  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color === selectedColor ? "" : color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size === selectedSize ? "" : size);
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
          <div className="alt-filters">
            <h2>New Arrivals</h2>
            <div className="alt-right">
              <p>Showing 1-10 of 100 Products</p>
              <i onClick={handleFilter} className="fa-solid fa-filter"></i>
            </div>
          </div>
          <div className="main">
            <div className={"filters" + (pressed ? " show-filter" : "")}>
              <div className="filter">
                <h3>Filters</h3>
                {window.innerWidth > 800 ? (
                  <i className="fa-solid fa-filter"></i>
                ) : (
                  ""
                )}
                <i
                  onClick={handleFilter}
                  className={`fa-solid fa-xmark${
                    window.innerWidth > 800 ? " show-icon" : ""
                  }`}
                ></i>
              </div>
              <div className="types">
                {allTypes.map((type) => (
                  <div key={type} className="type-checkbox">
                    <label>{type}</label>
                    <input
                      type="checkbox"
                      value={type}
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                    />
                  </div>
                ))}
              </div>
              <div className="price-choice">
                <h3>Price</h3>
                <br />
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  step="1"
                  value={sliderValue[0]}
                  onChange={(e) =>
                    setSliderValue([Number(e.target.value), sliderValue[1]])
                  }
                />
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  step="1"
                  value={sliderValue[1]}
                  onChange={(e) =>
                    setSliderValue([sliderValue[0], Number(e.target.value)])
                  }
                />
                <div className="spinner-price">
                  <span>${sliderValue[0]}</span>
                  <span>${sliderValue[1]}</span>
                </div>
              </div>
              <h3>Colors</h3>
              <div className="color-choices">
                {allColors.map((color, index) => {
                  if (color) {
                    const isSelected = color === selectedColor;
                    return (
                      <div
                        key={index}
                        className={`color-choice`}
                        style={{
                          backgroundColor: color,
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                        onClick={() => handleColorChange(color)}
                      >
                        {isSelected && (
                          <FaCheck
                            className="check-icon"
                            style={{
                              marginBottom: "-8px",
                              marginLeft: "7px",
                              color: "white",
                            }}
                          />
                        )}
                      </div>
                    );
                  }
                })}
              </div>
              <h3>Sizes</h3>
              <div className="size-choices">
                {availableSizes.map((size) => (
                  <div
                    key={size}
                    className={`size-choice ${
                      size === selectedSize ? "size-choice-c" : ""
                    }`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
              <h3>Dress Styles</h3>
              <div className="dress-choices">
                {allStyles.map((style) => (
                  <div key={style} className="type-checkbox">
                    <label>{style}</label>
                    <input
                      type="checkbox"
                      value={style}
                      checked={selectedStyles.includes(style)}
                      onChange={() => handleStyleChange(style)}
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="apply-filter"
                onClick={handleApplyFilter}
              >
                Apply Filter
              </button>
            </div>
            <div className="items">
              {data.clothes
                .filter(
                  (item, index) =>
                    item.new === true && shouldDisplayItem(item, index)
                )
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
                ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Arrivals;
