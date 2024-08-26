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
  StatBlock,
  TableBox,
  TableHeaderCell,
  TableHeaderCell2,
  TableCell2,
} from "./Dashboard.styled";
import coins from "../../assets/svg/coins.svg";
import usersIcon from "../../assets/svg/users.svg";

const Dashboard = () => {
  return (
    <DashContainer>
      <StatsContainer>
        <StatBox borderColor="var(--accent-green)">
          <StatBlock>
            <StatIcon src={coins} alt="Revenue" />
            <StatLabel>All products</StatLabel>
          </StatBlock>
          <StatValue>8,430</StatValue>
        </StatBox>
        <StatBox>
          <StatBlock>
            <StatIcon src={usersIcon} alt="Users" />
            <StatLabel>All suppliers</StatLabel>
          </StatBlock>
          <StatValue>211</StatValue>
        </StatBox>
        <StatBox>
          <StatBlock>
            <StatIcon src={usersIcon} alt="Users" />
            <StatLabel>All customers</StatLabel>
          </StatBlock>
          <StatValue>140</StatValue>
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
              <TableHeaderCell2>Today</TableHeaderCell2>
              <TableHeaderCell2></TableHeaderCell2>
              <TableHeaderCell2></TableHeaderCell2>
            </TableHeader>
            {/* Add table rows here */}
            <TableRow>
              <TableCell2>
                <TransactionType type="expense">Expense</TransactionType>
              </TableCell2>
              <TableCell2>Qonto billing</TableCell2>
              <TableCell2>
                <TransactionAmount type="expense">-49.88</TransactionAmount>
              </TableCell2>
            </TableRow>
            {/* Add more rows as needed */}
          </Table>
        </TableContainer>
      </TableBox>
    </DashContainer>
  );
};

export default Dashboard;
