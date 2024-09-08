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
  TableWrapper,
  HeaderBox01,
  HeaderBox02,
  TableCellBox02,
  HeaderBox03,
  TableCellBox03,
  TableCellBox04,
  HeaderBox04,
  PaginationDotsContainer,
  PaginationBox,
  PaginationDot,
} from "./Customers.styled";
import filterIcon from "../../assets/svg/filter.svg";
import slideOn from "../../assets/svg/slideOn.svg";
import slideOff from "../../assets/svg/slideOff.svg";

const Customers = () => {
  const dispatch = useDispatch();
  const { customers, error } = useSelector((state) => state.customers);
  const [filterText, setFilterText] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
    setCurrentPage(1);
  };

  if (error) return <div>Error: {error}</div>;
  if (!customers) return <div>Loading...</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <TableHeaderCell>
              <HeaderBox04>Phone</HeaderBox04>
            </TableHeaderCell>
            <TableHeaderCell>Register date</TableHeaderCell>
          </TableHeaderRow>
          {currentCustomers.map((customer) => (
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
              <TableCell>
                <TableCellBox04>{customer.phone}</TableCellBox04>
              </TableCell>
              <TableCell>{customer.register_date}</TableCell>
            </TableBodyRow>
          ))}
        </TableWrapper>
      </TableContainer>
      {filteredCustomers.length > 5 && (
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
    </OrdersContainer>
  );
};

export default Customers;
