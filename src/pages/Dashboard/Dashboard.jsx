// Dashboard.jsx
import React from "react";
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
} from "./Dashboard.styled";
import coins from "../../assets/svg/coins.svg";
import usersIcon from "../../assets/svg/users.svg";

const Dashboard = () => {
  return (
    <DashContainer>
      <StatsContainer>
        <StatBox borderColor="var(--accent-green)">
          <StatIcon src={coins} alt="Revenue" />
          <StatLabel>Revenue last 30 days</StatLabel>
          <StatValue>$24,780</StatValue>
        </StatBox>
        <StatBox>
          <StatIcon src={usersIcon} alt="Users" />
          <StatLabel>Customers last 30 days</StatLabel>
          <StatValue>1,352</StatValue>
        </StatBox>
        <StatBox>
          <StatIcon src={usersIcon} alt="Users" />
          <StatLabel>All customers</StatLabel>
          <StatValue>140</StatValue>
        </StatBox>
      </StatsContainer>

      <TableContainer>
        <TableTitle>Recent Customers</TableTitle>
        <Table>
          <TableHeader>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Spent</TableCell>
          </TableHeader>
          {/* Add table rows here */}
          <TableRow>
            <TableCell>
              <UserAvatar src="path_to_avatar" alt="Alex Shatov" />
              Alex Shatov
            </TableCell>
            <TableCell>alexshatov@gmail.com</TableCell>
            <TableCell>2,890.66</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </Table>
      </TableContainer>

      <TableContainer>
        <TableTitle>Income/Expenses</TableTitle>
        <Table>
          <TableHeader>
            <TableCell>Today</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableHeader>
          {/* Add table rows here */}
          <TableRow>
            <TableCell>
              <TransactionType type="expense">Expense</TransactionType>
            </TableCell>
            <TableCell>Qonto billing</TableCell>
            <TableCell>
              <TransactionAmount type="expense">-49.88</TransactionAmount>
            </TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </Table>
      </TableContainer>
    </DashContainer>
  );
};

export default Dashboard;
