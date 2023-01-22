import React, { useState, useEffect } from "react";
import Select from "react-select";

import "./Filter.css";

const sortOptions = [
  { value: "lowtohigh", label: " low to high" },
  { value: "hightolow", label: " high to low" },
];

const FilterSection = ({ products, setProducts }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortedList, setSortedList] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(selectedOption);
  };

  useEffect(() => {
    const handleSort = (option) => {
      if (option.value === "lowtohigh") {
        const sorted = [...products].sort((a, b) => {
          return a.price - b.price;
        });
        setSortedList(sorted);
      }

      if (option.value === "hightolow") {
        const sorted = [...products].sort((a, b) => {
          return b.price - a.price;
        });
        setSortedList(sorted);
      }
    };

    if (selectedOption) {
      handleSort(selectedOption);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (sortedList) {
      setProducts(sortedList);
    }
  }, [sortedList, setProducts]);

  return (
    <div>
      <div className="sidebar-container">
        <div className="sidebar-filters">
          <h3 className="filterLabel">Sort by Price:</h3>
          <Select
            onChange={handleChange}
            options={sortOptions}
            styles={{ width: "5rem", border: "0.3rem solid black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
