//Products.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  FilterIcon,
  AddIcon,
  AddBlock,
  FilterBlock,
  SliderIcon,
  EditButton,
  DeleteButton,
} from "./Products.styled";
import Modal from "../Modal/Modal";
import AddProduct from "./AddProduct/AddProduct";
import EditProduct from "./EditProduct/EditProduct";
import addIcon from "../../assets/svg/add.svg";
import filterIcon from "../../assets/svg/filter.svg";
import editIcon from "../../assets/svg/edit.svg";
import trashIcon from "../../assets/svg/trash.svg";
import sliderIcon from "../../assets/svg/Slider.svg";
import { fetchProducts } from "../../actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.products);
  const [filterText, setFilterText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilter = () => {
    if (filterText.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowEditProduct(true);
  };

  if (error) return <div>Error: {error}</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <ProductsContainer>
      <FilterContainer>
        <FilterBlock>
          <FilterInput
            placeholder="Product Name"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <FilterButton onClick={handleFilter}>
            <FilterIcon src={filterIcon} alt="filter" />
            Filter
          </FilterButton>
        </FilterBlock>
        <AddBlock>
          {showAddProduct && (
            <Modal>
              <AddProduct onClose={() => setShowAddProduct(false)} />
            </Modal>
          )}
          <AddButton onClick={() => setShowAddProduct(true)}>
            <AddIcon src={addIcon} alt="add" />
          </AddButton>
          Add a new product
        </AddBlock>
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
            {filteredProducts.map((product) => (
              <TableBodyRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.suppliers}</TableCell>
                <TableCell>${product.price}</TableCell>
                <ActionCell>
                  <EditButton onClick={() => handleEditProduct(product)}>
                    <ActionIcon src={editIcon} alt="Edit" />
                  </EditButton>
                  <DeleteButton>
                    <ActionIcon src={trashIcon} alt="Delete" />
                  </DeleteButton>
                </ActionCell>
              </TableBodyRow>
            ))}
          </TableBody>
        </TableWrapper>
      </TableContainer>
      {showEditProduct && (
        <Modal>
          <EditProduct
            product={productToEdit}
            onClose={() => setShowEditProduct(false)}
          />
        </Modal>
      )}
      {filteredProducts.length >= 6 && (
        <SliderIcon src={sliderIcon} alt="slider" />
      )}
    </ProductsContainer>
  );
};

export default Products;
