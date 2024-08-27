// Orders.jsximport React from "react";
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
  const orders = [
    // Пример данных, их можно заменить на данные из API
    {
      id: 1,
      photo: "https://i.imgur.com/1As0akH.png1",
      name: "Taras Shevchenko",
      address: "Khreshchatyk, Bldg. 51, Apt. 137",
      products: "12",
      price: "890.66",
      status: "Completed",
      order_date: "July 31, 2023",
    },
    // Добавить другие заказы
  ];

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
              <TableBodyRow key={order.id}>
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
      <SliderIcon src={sliderIcon} alt="fslider" />
    </OrdersContainer>
  );
};

export default Orders;
