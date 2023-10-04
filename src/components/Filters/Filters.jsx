import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const Filters = ({ data, handleApplyFilter, pressed, handleFilter }) => {
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const allTypes = Array.from(
    new Set(
      data.filter((item) => item.new === true).map((item) => item.type)
    )
  );
  const maxPrice = Math.max(
    ...data
      .filter((item) => item.new === true)
      .map((item) => item.price),
    100
  );
  const [sliderValue, setSliderValue] = useState([0, maxPrice]);

  const allColors = [
    ...new Set(
      data
        .filter((item) => item.new === true)
        .flatMap((item) =>
          item.colors.map((colorObj) => Object.values(colorObj)[0])
        )
    ),
  ];
  const availableSizes = [
    ...new Set(
      data
        .filter((item) => item.new === true)
        .flatMap((item) => item.sizes.map((sizeObj) => sizeObj.size))
    ),
  ];

  const allStyles = Array.from(
    new Set(
      data.filter((item) => item.new === true).map((item) => item.style)
    )
  );

  
  const handleStyleChange = (style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

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

  const handleApplyFilterClick = () => {
    const filterData = {
      selectedStyles,
      selectedTypes,
      selectedColor,
      selectedSize,
      sliderValue,
    };
    handleApplyFilter(filterData);
  };

  return (
    <div className={"filters" + (pressed ? " show-filter" : "")}>
      <div className="filter">
        <h3>Filters</h3>
        {window.innerWidth > 800 ? <i className="fa-solid fa-filter"></i> : ""}
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
        onClick={handleApplyFilterClick}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;
