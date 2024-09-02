//Dashboard.styled.jsx
import styled from "styled-components";

export const ScrollableTableContainer = styled.div`
  height: 428px;
  overflow-y: auto;
`;

export const DashContainer = styled.div`
  width: 1360px;
  height: 681px;
  background-color: var(--background-light);
  color: var(--background-dark);
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: var(--border-color);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-x: visible;

  @media (max-width: 1440px) {
    width: 984px;
    height: 647px;
    padding: 20px;
    gap: 20px;
    overflow-x: auto;
  }

  @media (max-width: 1024px) {
    width: 704px;
    height: 1212px;
    padding: 20px 32px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 1335px;
    padding: 20px;
    gap: 20px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const StatBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px 18px;
  gap: 28px;
  width: 240px;
  height: 108px;
  background: var(--background-white);
  border: 1px solid ${(props) => props.borderColor || "var(--border-color)"};
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 157px;
    height: 98px;
    padding: 14px;
  }
`;

export const StatBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 140px;
  height: 20px;

  @media (max-width: 768px) {
    width: 129px;
    height: 18px;
  }
`;

export const StatIcon = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const StatLabel = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 768px) {
    line-height: 14px;
  }
`;

export const StatValue = styled.div`
  text-align: left;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: var(--background-dark);

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    text-align: left;
  }
`;

export const TableBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  width: 1280px;
  height: 512px;

  @media (max-width: 1440px) {
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 704px;
    height: 1044px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 335px;
    height: 1065px;
    gap: 40px;
  }
`;

export const TableContainer = styled.div`
  width: 630px;
  height: 512px;
  display: table;
  table-layout: fixed;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1440px) {
    width: 630px;
    height: 512px;
  }

  @media (max-width: 1024px) {
    width: 704px;
    height: 512px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 511px;
  }
`;

export const TableTitle = styled.div`
  width: 590px;
  height: 24px;
  padding: 20px;
  text-align: left;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  background: var(--background-accent-light);
  color: var(--background-dark);

  @media (max-width: 1024px) {
    width: 664px;
  }

  @media (max-width: 768px) {
    width: 307px;
    height: 20px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TableHeaderCell01 = styled.div`
  display: table-cell;
  padding: 20px 10px 20px 20px;
  width: 191px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 768px) {
    width: 103px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 10px 14px 14px;
  }
`;

export const TableHeaderCell02 = styled.div`
  display: table-cell;
  width: 246px;
  text-align: left;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 1024px) {
    width: 292px;
  }

  @media (max-width: 768px) {
    width: 204px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 10px 14px 14px;
  }
`;

export const TableHeaderCell03 = styled.div`
  display: table-cell;
  width: 90px;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 768px) {
    width: 61px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 10px 14px 14px;
  }
`;

export const TableHeaderCell2 = styled.div`
  display: table-cell;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    padding: 14px 10px 14px 14px;
  }
`;

export const TableCell01 = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  width: 191px;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 768px) {
    width: 106px;
    padding: 14px 7px 14px 14px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const CellBox = styled.div`
  display: flex;
  width: 191px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  @media (max-width: 768px) {
    width: 106px;
    align-items: flex-start;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TableCell02 = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 261px;
  text-align: left;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 1024px) {
    width: 292px;
  }

  @media (max-width: 768px) {
    width: 211px;
    padding: 14px 7px 14px 10px;
  }
`;

export const CellBox02 = styled.div`
  @media (max-width: 768px) {
    width: 211px;
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TableCell03 = styled.div`
  display: table-cell;
  width: 90px;
  vertical-align: middle;
  text-align: left;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 14px 10px 14px 14px;
    font-size: 12px;
    line-height: 14px;
    width: 61px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TableCell2 = styled.div`
  display: table-cell;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: none;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }
`;

export const TransactionType = styled.span`
  width: 80px;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: -0.05em;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  background-color: ${(props) =>
    props.type === "Expense"
      ? "var(--background-accent-red)"
      : props.type === "Income"
      ? "var(--background-accent-light)"
      : "var(--background-gray)"};
  color: ${(props) =>
    props.type === "Expense"
      ? "var(--accent-red)"
      : props.type === "Income"
      ? "var(--accent-green)"
      : "var(--background-dark)"};
`;

export const TransactionAmount = styled.span`
  color: ${(props) =>
    props.type === "Expense"
      ? "var(--accent-red)"
      : props.type === "Income"
      ? "var(--accent-green)"
      : "var(--background-dark)"};
  text-decoration: ${(props) =>
    props.type === "Expense" || props.type === "Income"
      ? "none"
      : "line-through"};
`;

export const TableBodyWrapper = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableBodyRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--background-light);
  }

  @media (max-width: 1024px) {
    width: 704px;
  }

 @media (max-width: 768px) {
   width: 444px;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px);
  overflow-y: auto;
`;

export const TableHeaderRow = styled.div`
  display: flex;
  background: var(--background-white);
  position: sticky;
  top: 0;
  z-index: 1;
  width: 630px;

  @media (max-width: 1024px) {
    width: 704px;
  }
     @media (max-width: 768px) {
    width: 444px;
`;
