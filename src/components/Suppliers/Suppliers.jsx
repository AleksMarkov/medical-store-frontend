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
  StatusBadge,
} from "./Suppliers.styled";
import Modal from "../Modal/Modal";
import AddSupplier from "./AddSupplier/AddSupplier";
import EditSupplier from "./EditSupplier/EditSupplier";
import filterIcon from "../../assets/svg/filter.svg";
import editIcon from "../../assets/svg/edit.svg";
import sliderIcon from "../../assets/svg/Slider.svg";
import { fetchSuppliers } from "../../redux/actions/suppliersActions";

const Suppliers = () => {
  const dispatch = useDispatch();
  const { suppliers, error } = useSelector((state) => state.suppliers);
  const [filterText, setFilterText] = useState("");
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [showAddSupplier, setShowAddSupplier] = useState(false);
  const [showEditSupplier, setShowEditSupplier] = useState(false);
  const [supplierToEdit, setSupplierToEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredSuppliers(suppliers);
  }, [suppliers]);

  const handleFilter = () => {
    if (filterText.trim() === "") {
      setFilteredSuppliers(suppliers);
    } else {
      const filtered = suppliers.filter((supplier) =>
        supplier.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredSuppliers(filtered);
    }
  };

  const handleEditSupplier = (supplier) => {
    setSupplierToEdit(supplier);
    setShowEditSupplier(true);
  };

  if (error) return <div>Error: {error}</div>;
  if (!suppliers) return <div>Loading...</div>;

  return (
    <ProductsContainer>
      <FilterContainer>
        <FilterBlock>
          <FilterInput
            placeholder="Supplier Name"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <FilterButton onClick={handleFilter}>
            <FilterIcon src={filterIcon} alt="filter" />
            Filter
          </FilterButton>
        </FilterBlock>
        <AddBlock>
          {showAddSupplier && (
            <Modal>
              <AddSupplier onClose={() => setShowAddSupplier(false)} />
            </Modal>
          )}
          <AddButton onClick={() => setShowAddSupplier(true)}>
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
            {filteredSuppliers.map((supplier) => (
              <TableBodyRow key={supplier._id}>
                <TableCell>{supplier.name}</TableCell>
                <TableCell>{supplier.address}</TableCell>
                <TableCell>{supplier.suppliers}</TableCell>
                <TableCell>{supplier.date}</TableCell>
                <TableCell>{supplier.amount}</TableCell>
                <TableCell>
                  <StatusBadge status={supplier.status}>
                    {supplier.status}
                  </StatusBadge>
                </TableCell>
                <ActionCell>
                  <EditButton onClick={() => handleEditSupplier(supplier)}>
                    <ActionIcon src={editIcon} alt="Edit" />
                    Edit
                  </EditButton>
                </ActionCell>
              </TableBodyRow>
            ))}
          </TableBody>
        </TableWrapper>
      </TableContainer>
      {showEditSupplier && (
        <Modal>
          <EditSupplier
            supplier={supplierToEdit}
            onClose={() => setShowEditSupplier(false)}
          />
        </Modal>
      )}
      {filteredSuppliers.length >= 6 && (
        <SliderIcon src={sliderIcon} alt="slider" />
      )}
    </ProductsContainer>
  );
};

export default Suppliers;
