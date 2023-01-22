import React, { useState, useEffect } from "react";
import "./Filter.css";
// import axios from "axios";
import Select from "react-select";
import { Checkbox } from "@mui/material";
import { Box } from "@mui/system";
const sortOptions = [
  { value: "lowtohigh", label: " low to high" },
  { value: "hightolow", label: " high to low" },
];

const FilterSection = ({ products, setProducts }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortedList, setSortedList] = useState(null);
  const [brand, setBrand] = useState("");
  const [allProducts, setAllProducts] = useState(() => products);

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
      // console.log(selectedOption)
      handleSort(selectedOption);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (sortedList) {
      setProducts(sortedList);
    }
  }, [sortedList, setProducts]);

  //   const clearFilters = () => {
  //     async function data() {
  //       const { fetchData } = await axios.get("products");
  //       setProducts(fetchData);
  //     }
  //     data();
  //   };
  const brandFilter = (e) => {
    setBrand(e.target.value);
    setSortedList(() =>
      [...products].filter((prod) => prod.brand.includes(brand))
    );
  };

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
          {/* <div className="sidebar-button">
            <button className="clearFilters" onClick={clearFilters}>
              Clear Filters
            </button> 
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
