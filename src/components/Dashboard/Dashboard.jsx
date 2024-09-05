//Dashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../redux/actions/dashboardActions";
import placeholderImage from "../../assets/images/placeholderImage.png";
import {
  DashContainer,
  StatsContainer,
  StatBox,
  StatIcon,
  StatLabel,
  StatValue,
  TableContainer1,
  TableContainer2,
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
  TableWrapper1,
  TableWrapper2,
  TableHeaderRow,
  TableBodyRow,
  CellBox,
  CellBox02,
  CellBox2,
  TableCell3,
} from "./Dashboard.styled";
import coins from "../../assets/svg/coins.svg";
import usersIcon from "../../assets/svg/users.svg";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state) => state.dashboard.data);
  const error = useSelector((state) => state.dashboard.error);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (error) return <div>Error: {error}</div>;
  if (!dashboardData) return <div>Loading...</div>;

  const sortedCustomers = [...dashboardData.recentCustomers].sort((a, b) => {
    const dateA = new Date(a.register_date);
    const dateB = new Date(b.register_date);
    return dateB - dateA;
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
        <TableContainer1>
          <TableTitle>Recent Customers</TableTitle>
          <TableWrapper1>
            <TableHeaderRow>
              <TableHeaderCell01>Name</TableHeaderCell01>
              <TableHeaderCell02>Email</TableHeaderCell02>
              <TableHeaderCell03>Spent</TableHeaderCell03>
            </TableHeaderRow>
            {sortedCustomers.map((customer) => (
              <TableBodyRow key={customer._id}>
                <TableCell01>
                  <CellBox>
                    <UserAvatar
                      src={customer.image ? customer.image : placeholderImage}
                      alt={customer.name}
                    />
                    {customer.name}
                  </CellBox>
                </TableCell01>
                <TableCell02>
                  <CellBox02>{customer.email}</CellBox02>
                </TableCell02>
                <TableCell03>{customer.spent}</TableCell03>
              </TableBodyRow>
            ))}
          </TableWrapper1>
        </TableContainer1>

        <TableContainer2>
          <TableTitle>Income/Expenses</TableTitle>
          <TableWrapper2>
            <TableHeaderRow>
              <TableHeaderCell2>Type</TableHeaderCell2>
            </TableHeaderRow>
            {dashboardData.incomeExpenseList.map((transaction) => (
              <TableBodyRow key={transaction._id}>
                <TableCell2>
                  <TransactionType type={transaction.type}>
                    {transaction.type}
                  </TransactionType>
                </TableCell2>
                <TableCell2>
                  <CellBox2>{transaction.name}</CellBox2>
                </TableCell2>
                <TableCell3>
                  <TransactionAmount type={transaction.type}>
                    {transaction.amount}
                  </TransactionAmount>
                </TableCell3>
              </TableBodyRow>
            ))}
          </TableWrapper2>
        </TableContainer2>
      </TableBox>
    </DashContainer>
  );
};

export default Dashboard;
