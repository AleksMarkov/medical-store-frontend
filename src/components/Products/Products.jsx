//Products.jsx
import React, { useState } from "react";
import {
  ProductsContainer,
  FilterContainer,
  FilterInput,
  FilterButton,
  AddButton,
  TableContainer,
  TableTitle,
  TableWrapper,
  TableHeader,
  TableBody,
  TableHeaderRow,
  TableBodyRow,
  TableHeaderCell,
  TableCell,
  ActionCell,
  ActionIcon,
  PaginationContainer,
  PaginationDot,
} from "./Products.styled";
import addIcon from "../../assets/svg/add.svg";
import filterIcon from "../../assets/svg/filter.svg";
import editIcon from "../../assets/svg/edit.svg";
import trashIcon from "../../assets/svg/trash.svg";
import sliderIcon from "../../assets/svg/Slider.svg";

const Products = () => {
  const [filterText, setFilterText] = useState("");

  // Dummy data for demonstration
  const products = [
    {
      name: "Moringa",
      category: "Medicine",
      stock: 12,
      suppliers: "Square",
      price: 89.66,
    },
    {
      name: "Antibiotic 250 mg",
      category: "Heart",
      stock: 19,
      suppliers: "Acme",
      price: 34.16,
    },
    {
      name: "Headache Relief",
      category: "Head",
      stock: 9,
      suppliers: "Beximco",
      price: 53.76,
    },
    {
      name: "Pharmacy",
      category: "Hand",
      stock: 14,
      suppliers: "ACI",
      price: 28.57,
    },
    {
      name: "Magnesium",
      category: "Leg",
      stock: 10,
      suppliers: "Uniliver",
      price: 56.34,
    },
  ];

  return (
    <ProductsContainer>
      <FilterContainer>
        <FilterInput
          placeholder="Product Name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <FilterButton>
          <img src={filterIcon} alt="filter" />
          Filter
        </FilterButton>
        <AddButton>
          <img src={addIcon} alt="add" />
          Add a new product
        </AddButton>
      </FilterContainer>
      <TableContainer>
        <TableTitle>All products</TableTitle>
        <TableWrapper>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Product Info</TableHeaderCell>
              <TableHeaderCell>Category</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
              <TableHeaderCell>Suppliers</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableBodyRow key={index}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.suppliers}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <ActionCell>
                  <ActionIcon src={editIcon} alt="Edit" />
                  <ActionIcon src={trashIcon} alt="Delete" />
                </ActionCell>
              </TableBodyRow>
            ))}
          </TableBody>
        </TableWrapper>
      </TableContainer>
      <PaginationContainer>
        <PaginationDot active />
        <PaginationDot />
        <PaginationDot />
        <PaginationDot />
      </PaginationContainer>
      {products.length >= 6 && <img src={sliderIcon} alt="slider" />}
    </ProductsContainer>
  );
};

export default Products;
