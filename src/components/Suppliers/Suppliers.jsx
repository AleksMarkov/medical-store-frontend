//Suppliers.jsx
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
  AddBlock,
  FilterBlock,
  SliderIcon,
  EditButton,
  DeleteButton,
} from "./Suppliers.styled";
import Modal from "../Modal/Modal";
import AddSupplier from "./AddSupplier/AddSupplier";
import EditSupplier from "./EditSupplier/EditSupplier";
import DeleteSupplier from "./DeleteSupplier/DeleteSupplier";
import filterIcon from "../../assets/svg/filter.svg";
import editIcon from "../../assets/svg/edit.svg";
import trashIcon from "../../assets/svg/trash.svg";
import sliderIcon from "../../assets/svg/Slider.svg";
import { fetchProducts, deleteProduct } from "../../actions/productsActions";

const Suppliers = () => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.products);
  const [filterText, setFilterText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

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

  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
    setShowDeleteProduct(true);
  };

  const confirmDeleteProduct = async () => {
    if (productToDelete) {
      await dispatch(deleteProduct(productToDelete._id));
      setShowDeleteProduct(false);
      dispatch(fetchProducts());
    }
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
              <AddSupplier onClose={() => setShowAddProduct(false)} />
            </Modal>
          )}
          <AddButton onClick={() => setShowAddProduct(true)}>
            Add a new supplier
          </AddButton>
        </AddBlock>
      </FilterContainer>
      <TableContainer>
        <TableTitle>All suppliers</TableTitle>
        <TableWrapper>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Suppliers Info</TableHeaderCell>
              <TableHeaderCell>Address</TableHeaderCell>
              <TableHeaderCell>Company</TableHeaderCell>
              <TableHeaderCell>Delivery date</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
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
                  <DeleteButton onClick={() => handleDeleteProduct(product)}>
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
          <EditSupplier
            product={productToEdit}
            onClose={() => setShowEditProduct(false)}
          />
        </Modal>
      )}
      {showDeleteProduct && (
        <Modal>
          <DeleteSupplier
            product={productToDelete}
            onClose={() => setShowDeleteProduct(false)}
            onConfirmDelete={confirmDeleteProduct}
          />
        </Modal>
      )}
      {filteredProducts.length >= 6 && (
        <SliderIcon src={sliderIcon} alt="slider" />
      )}
    </ProductsContainer>
  );
};

export default Suppliers;
