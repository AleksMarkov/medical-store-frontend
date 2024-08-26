//Dashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../actions/dashboardActions";
import placeholderImage from "../../assets/images/placeholderImage.png"; // Импорт изображения-заполнителя
import {
  DashContainer,
  StatsContainer,
  StatBox,
  StatIcon,
  StatLabel,
  StatValue,
  TableContainer,
  TableTitle,
  TableCell01,
  TableCell02,
  TableCell03,
  UserAvatar,
  TransactionType,
  TransactionAmount,
  StatBlock,
  TableBox,
  TableHeaderCell01,
  TableHeaderCell02,
  TableHeaderCell03,
  TableHeaderCell2,
  TableCell2,
  TableWrapper,
  TableHeaderWrapper,
  TableBodyWrapper,
  StyledTable,
  TableHeaderRow,
  TableBodyRow,
  CellBox,
} from "./Dashboard.styled";
import coins from "../../assets/svg/coins.svg";
import usersIcon from "../../assets/svg/users.svg";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state) => state.dashboard.data); // Access data from Redux store
  const error = useSelector((state) => state.dashboard.error);

  useEffect(() => {
    dispatch(fetchDashboardData()); // Dispatch action to fetch data
  }, [dispatch]);

  if (error) return <div>Error: {error}</div>;
  if (!dashboardData) return <div>Loading...</div>;

  // Преобразуем строки дат в объекты Date и сортируем массив recentCustomers по дате в порядке убывания
  const sortedCustomers = [...dashboardData.recentCustomers].sort((a, b) => {
    const dateA = new Date(a.register_date);
    const dateB = new Date(b.register_date);
    return dateB - dateA; // Сортировка по убыванию даты
  });

  return (
    <DashContainer>
      <StatsContainer>
        <StatBox borderColor="var(--accent-green)">
          <StatBlock>
            <StatIcon src={coins} alt="Revenue" />
            <StatLabel>All products</StatLabel>
          </StatBlock>
          <StatValue>{dashboardData.allProducts}</StatValue>
        </StatBox>
        <StatBox>
          <StatBlock>
            <StatIcon src={usersIcon} alt="Users" />
            <StatLabel>All suppliers</StatLabel>
          </StatBlock>
          <StatValue>{dashboardData.allSuppliers}</StatValue>
        </StatBox>
        <StatBox>
          <StatBlock>
            <StatIcon src={usersIcon} alt="Users" />
            <StatLabel>All customers</StatLabel>
          </StatBlock>
          <StatValue>{dashboardData.allCustomers}</StatValue>
        </StatBox>
      </StatsContainer>

      <TableBox>
        <TableContainer>
          <TableTitle>Recent Customers</TableTitle>
          <TableWrapper>
            <TableHeaderWrapper>
              <StyledTable>
                <thead>
                  <TableHeaderRow>
                    <TableHeaderCell01>Name</TableHeaderCell01>
                    <TableHeaderCell02>Email</TableHeaderCell02>
                    <TableHeaderCell03>Spent</TableHeaderCell03>
                  </TableHeaderRow>
                </thead>
              </StyledTable>
            </TableHeaderWrapper>
            <TableBodyWrapper>
              <StyledTable>
                <tbody>
                  {sortedCustomers.map((customer) => (
                    <TableBodyRow key={customer._id}>
                      <TableCell01>
                        <CellBox>
                          <UserAvatar
                            src={
                              customer.image ? customer.image : placeholderImage
                            }
                            alt={customer.name}
                          />
                          {customer.name}
                        </CellBox>
                      </TableCell01>
                      <TableCell02>{customer.email}</TableCell02>
                      <TableCell03>{customer.spent}</TableCell03>
                    </TableBodyRow>
                  ))}
                </tbody>
              </StyledTable>
            </TableBodyWrapper>
          </TableWrapper>
        </TableContainer>

        <TableContainer>
          <TableTitle>Income/Expenses</TableTitle>
          <TableWrapper>
            <TableHeaderWrapper>
              <StyledTable>
                <thead>
                  <TableHeaderRow>
                    <TableHeaderCell2>Type</TableHeaderCell2>
                    <TableHeaderCell2></TableHeaderCell2>
                    <TableHeaderCell2></TableHeaderCell2>
                  </TableHeaderRow>
                </thead>
              </StyledTable>
            </TableHeaderWrapper>
            <TableBodyWrapper>
              <StyledTable>
                <tbody>
                  {dashboardData.incomeExpenseList.map((transaction) => (
                    <TableBodyRow key={transaction._id}>
                      <TableCell2>
                        <TransactionType type={transaction.type}>
                          {transaction.type}
                        </TransactionType>
                      </TableCell2>
                      <TableCell2>{transaction.name}</TableCell2>
                      <TableCell2>
                        <TransactionAmount type={transaction.type}>
                          {transaction.amount}
                        </TransactionAmount>
                      </TableCell2>
                    </TableBodyRow>
                  ))}
                </tbody>
              </StyledTable>
            </TableBodyWrapper>
          </TableWrapper>
        </TableContainer>
      </TableBox>
    </DashContainer>
  );
};

export default Dashboard;
