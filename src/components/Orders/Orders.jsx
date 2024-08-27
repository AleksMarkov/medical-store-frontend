// Orders.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../actions/ordersActions";
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
} from "./Orders.styled";
import filterIcon from "../../assets/svg/filter.svg";
import sliderIcon from "../../assets/svg/Slider.svg";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (error) return <div>Error: {error}</div>;
  if (!orders) return <div>Loading...</div>;

  return (
    <OrdersContainer>
      <FilterContainer>
        <FilterInput placeholder="User Name" />
        <FilterButton>
          <FilterIcon src={filterIcon} alt="filter" />
          Filter
        </FilterButton>
      </FilterContainer>
      <TableContainer>
        <TableTitle>All orders</TableTitle>
        <table>
          <thead>
            <TableHeaderRow>
              <TableHeaderCell>User Info</TableHeaderCell>
              <TableHeaderCell>Address</TableHeaderCell>
              <TableHeaderCell>Products</TableHeaderCell>
              <TableHeaderCell>Order date</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableHeaderRow>
          </thead>
          <tbody>
            {orders.map((order) => (
              <TableBodyRow key={order._id}>
                <TableCell>
                  <UserInfo>
                    <UserAvatar src={order.photo} alt={order.name} />
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
          </tbody>
        </table>
      </TableContainer>
      <SliderIcon src={sliderIcon} alt="slider" />
    </OrdersContainer>
  );
};

export default Orders;
