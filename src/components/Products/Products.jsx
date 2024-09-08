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
  EditButton,
  DeleteButton,
  CellBox,
  PaginationDotsContainer,
  PaginationBox,
  PaginationDot,
} from "./Products.styled";
import Modal from "../Modal/Modal";
import AddProduct from "./AddProduct/AddProduct";
import EditProduct from "./EditProduct/EditProduct";
import DeleteProduct from "./DeleteProduct/DeleteProduct";
import addIcon from "../../assets/svg/add.svg";
import filterIcon from "../../assets/svg/filter.svg";
import editIcon from "../../assets/svg/edit.svg";
import trashIcon from "../../assets/svg/trash.svg";
import slideOn from "../../assets/svg/slideOn.svg";
import slideOff from "../../assets/svg/slideOff.svg";
import {
  fetchProducts,
  deleteProduct,
} from "../../redux/actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.products);
  const [filterText, setFilterText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
    setCurrentPage(1);
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          <AddButton onClick={() => setShowAddProduct(true)}>
            <AddIcon src={addIcon} alt="add" />
          </AddButton>
          Add a new product
        </AddBlock>
      </FilterContainer>
      <TableContainer>
        <TableTitle>All products</TableTitle>
        <TableWrapper>
          <TableHeaderRow>
            <TableHeaderCell>Product Info</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Stock</TableHeaderCell>
            <TableHeaderCell>Suppliers</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableHeaderRow>
          {currentProducts.map((product) => (
            <TableBodyRow key={product._id}>
              <TableCell>
                <CellBox>{product.name}</CellBox>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.suppliers}</TableCell>
              <TableCell>{product.price}</TableCell>
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
        </TableWrapper>
      </TableContainer>
      {filteredProducts.length > 5 && (
        <PaginationDotsContainer>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationBox key={index}>
              <PaginationDot
                src={currentPage === index + 1 ? slideOn : slideOff}
                alt={`page ${index + 1}`}
                onClick={() => handlePageClick(index + 1)}
              />
            </PaginationBox>
          ))}
        </PaginationDotsContainer>
      )}
      {showAddProduct && (
        <Modal>
          <AddProduct onClose={() => setShowAddProduct(false)} />
        </Modal>
      )}
      {showEditProduct && (
        <Modal>
          <EditProduct
            product={productToEdit}
            onClose={() => setShowEditProduct(false)}
          />
        </Modal>
      )}
      {showDeleteProduct && (
        <Modal>
          <DeleteProduct
            product={productToDelete}
            onClose={() => setShowDeleteProduct(false)}
            onConfirmDelete={confirmDeleteProduct}
          />
        </Modal>
      )}
    </ProductsContainer>
  );
};

export default Products;
