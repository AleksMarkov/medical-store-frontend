//Dashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../actions/dashboardActions";
import {
  DashContainer,
  StatsContainer,
  StatBox,
  StatIcon,
  StatLabel,
  StatValue,
  TableContainer,
  TableTitle,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  UserAvatar,
  TransactionType,
  TransactionAmount,
  StatBlock,
  TableBox,
  TableHeaderCell,
  TableHeaderCell2,
  TableCell2,
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
          <Table>
            <TableHeader>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Spent</TableHeaderCell>
            </TableHeader>
            {dashboardData.recentCustomers.map((customer) => (
              <TableRow key={customer._id}>
                <TableCell>
                  <UserAvatar src={customer.photo} alt={customer.name} />
                  {customer.name}
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.spent}</TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>

        <TableContainer>
          <TableTitle>Income/Expenses</TableTitle>
          <Table>
            <TableHeader>
              <TableHeaderCell2>Type</TableHeaderCell2>
              <TableHeaderCell2>Name</TableHeaderCell2>
              <TableHeaderCell2>Amount</TableHeaderCell2>
            </TableHeader>
            {dashboardData.incomeExpenseList.map((transaction) => (
              <TableRow key={transaction._id}>
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
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      </TableBox>
    </DashContainer>
  );
};

export default Dashboard;
