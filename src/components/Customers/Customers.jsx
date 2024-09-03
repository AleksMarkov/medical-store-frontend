//Customers.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../redux/actions/customersActions";
import placeholderImage from "../../assets/images/placeholderImage.png";
import {
  OrdersContainer,
  FilterContainer,
  FilterInput,
  FilterButton,
  TableContainer,
  TableTitle,
  TableHeaderRow,
  TableBodyRow,
  TableCell,
  UserInfo,
  UserAvatar,
  FilterIcon,
  TableHeaderCell,
  SliderIcon,
  TableWrapper,
  HeaderBox01,
  HeaderBox02,
  TableCellBox02,
  HeaderBox03,
  TableCellBox03,
} from "./Customers.styled";
import filterIcon from "../../assets/svg/filter.svg";
import sliderIcon from "../../assets/svg/Slider.svg";

const Customers = () => {
  const dispatch = useDispatch();
  const { customers, error } = useSelector((state) => state.customers);
  const [filterText, setFilterText] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCustomers(customers);
  }, [customers]);

  const handleFilter = () => {
    if (filterText.trim() === "") {
      setFilteredCustomers(customers);
    } else {
      const filtered = customers.filter((customer) =>
        customer.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredCustomers(filtered);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!customers) return <div>Loading...</div>;

  return (
    <OrdersContainer>
      <FilterContainer>
        <FilterInput
          placeholder="User Name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <FilterButton onClick={handleFilter}>
          <FilterIcon src={filterIcon} alt="filter" />
          Filter
        </FilterButton>
      </FilterContainer>
      <TableContainer>
        <TableTitle>Customers Data</TableTitle>
        <TableWrapper>
          <TableHeaderRow>
            <TableHeaderCell>
              <HeaderBox01>User Info</HeaderBox01>
            </TableHeaderCell>
            <TableHeaderCell>
              <HeaderBox02>Email</HeaderBox02>
            </TableHeaderCell>
            <TableHeaderCell>
              <HeaderBox03>Address</HeaderBox03>
            </TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell>Register date</TableHeaderCell>
          </TableHeaderRow>
          {filteredCustomers.map((customer) => (
            <TableBodyRow key={customer._id}>
              <TableCell>
                <UserInfo>
                  <UserAvatar
                    src={customer.image ? customer.image : placeholderImage}
                    alt={customer.name}
                  />
                  {customer.name}
                </UserInfo>
              </TableCell>
              <TableCell>
                <TableCellBox02>{customer.email}</TableCellBox02>
              </TableCell>
              <TableCell>
                <TableCellBox03>{customer.address}</TableCellBox03>
              </TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.register_date}</TableCell>
            </TableBodyRow>
          ))}
        </TableWrapper>
      </TableContainer>
      {filteredCustomers.length >= 6 && (
        <SliderIcon src={sliderIcon} alt="slider" />
      )}
    </OrdersContainer>
  );
};

export default Customers;
