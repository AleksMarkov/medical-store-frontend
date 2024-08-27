// Orders.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../actions/ordersActions";
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
  SliderIcon,
  TableWrapper,
  TableHeader,
  TableBody,
} from "./Orders.styled";
import filterIcon from "../../assets/svg/filter.svg";
import sliderIcon from "../../assets/svg/Slider.svg";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, error } = useSelector((state) => state.orders);
  const [filterText, setFilterText] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    setFilteredOrders(orders); // Сначала устанавливаем все заказы
  }, [orders]);

  const handleFilter = () => {
    if (filterText.trim() === "") {
      setFilteredOrders(orders); // Если поле фильтра пустое, показываем все заказы
    } else {
      const filtered = orders.filter((order) =>
        order.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredOrders(filtered);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!orders) return <div>Loading...</div>;

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
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>User Info</TableHeaderCell>
              <TableHeaderCell>Address</TableHeaderCell>
              <TableHeaderCell>Products</TableHeaderCell>
              <TableHeaderCell>Order date</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
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
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.products}</TableCell>
                <TableCell>{order.order_date}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>
                  <StatusBadge status={order.status}>
                    {order.status}
                  </StatusBadge>
                </TableCell>
              </TableBodyRow>
            ))}
          </TableBody>
        </TableWrapper>
      </TableContainer>
      {filteredOrders.length >= 6 && (
        <SliderIcon src={sliderIcon} alt="slider" />
      )}
    </OrdersContainer>
  );
};

export default Orders;
