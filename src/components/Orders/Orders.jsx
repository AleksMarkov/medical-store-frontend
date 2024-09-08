// Orders.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/actions/ordersActions";
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
  StatusBadge,
  FilterIcon,
  TableHeaderCell,
  PaginationDotsContainer,
  TableWrapper,
  TableCellBox02,
  HeaderBox01,
  HeaderBox02,
  PaginationDot,
  PaginationBox,
} from "./Orders.styled";
import filterIcon from "../../assets/svg/filter.svg";
import slideOn from "../../assets/svg/slideOn.svg";
import slideOff from "../../assets/svg/slideOff.svg";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, error } = useSelector((state) => state.orders);
  const [filterText, setFilterText] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  const handleFilter = () => {
    if (filterText.trim() === "") {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter((order) =>
        order.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredOrders(filtered);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!orders) return <div>Loading...</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

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
        <TableTitle>All orders</TableTitle>
        <TableWrapper>
          <TableHeaderRow>
            <TableHeaderCell>
              <HeaderBox01>User Info</HeaderBox01>
            </TableHeaderCell>
            <TableHeaderCell>
              <HeaderBox02>Address</HeaderBox02>
            </TableHeaderCell>
            <TableHeaderCell>Products</TableHeaderCell>
            <TableHeaderCell>Order date</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableHeaderRow>
          {currentOrders.map((order) => (
            <TableBodyRow key={order._id}>
              <TableCell>
                <UserInfo>
                  <UserAvatar
                    src={order.photo ? order.photo : placeholderImage}
                    alt={order.name}
                  />
                  {order.name}
                </UserInfo>
              </TableCell>
              <TableCell>
                <TableCellBox02>{order.address}</TableCellBox02>
              </TableCell>
              <TableCell>{order.products}</TableCell>
              <TableCell>{order.order_date}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>
                <StatusBadge status={order.status}>{order.status}</StatusBadge>
              </TableCell>
            </TableBodyRow>
          ))}
        </TableWrapper>
      </TableContainer>
      <PaginationDotsContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationBox>
            <PaginationDot
              key={index}
              src={currentPage === index + 1 ? slideOn : slideOff}
              alt={`page ${index + 1}`}
              onClick={() => handlePageClick(index + 1)}
            />
          </PaginationBox>
        ))}
      </PaginationDotsContainer>
    </OrdersContainer>
  );
};

export default Orders;
