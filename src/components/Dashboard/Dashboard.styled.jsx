//Dashboard.styled.jsx
import styled from "styled-components";

export const ScrollableTableContainer = styled.div`
  height: 428px; // 512px (высота TableContainer) - 84px (высота заголовка и отступы)
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
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
`;

export const StatBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 140px;
  height: 20px;
`;

export const StatIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const StatLabel = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);
`;

export const StatValue = styled.div`
  text-align: left;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: var(--background-dark);
`;

export const TableBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  width: 1280px;
  height: 512px;
`;

export const TableContainer = styled.div`
  width: 630px;
  height: 512px;
  display: flex;
  flex-direction: column;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
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
`;

export const Table = styled.div`
  display: table;
  height: 58px;
  width: 100%;
`;

export const TableHeader = styled.div`
  display: table-header-group;
`;

export const TableRow = styled.div`
  display: table-row;
`;

export const TableHeaderCell01 = styled.div`
  display: table-cell;
  padding: 20px 10px 20px 20px;
  width: 198px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);
`;

export const TableHeaderCell02 = styled.div`
  display: table-cell;
  padding: 20px 10px 20px 20px;
  width: 267px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);
`;

export const TableHeaderCell03 = styled.div`
  display: table-cell;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);
`;

export const TableHeaderCell2 = styled.div`
  display: table-cell;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  // border-left: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);
`;

export const TableCell01 = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  width: 200px;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;
export const CellBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
`;

export const TableCell02 = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 267px;
  text-align: left;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

export const TableCell03 = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;
export const TableCell2 = styled.div`
  display: table-cell;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  // border-left: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

export const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: none;
`;

export const TransactionType = styled.span`
  padding: 4px;
  border-radius: 40px;
  font-size: 14px;
  line-height: 17px;
  background-color: ${(props) =>
    props.type === "expense"
      ? "var(--background-accent-red)"
      : props.type === "income"
      ? "var(--background-accent-light)"
      : "var(--background-gray)"};
  color: ${(props) =>
    props.type === "expense"
      ? "var(--accent-red)"
      : props.type === "income"
      ? "var(--accent-green)"
      : "var(--background-dark)"};
`;

export const TransactionAmount = styled.span`
  color: ${(props) =>
    props.type === "expense"
      ? "var(--accent-red)"
      : props.type === "income"
      ? "var(--accent-green)"
      : "var(--background-dark)"};
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 428px; // 512px (высота TableContainer) - 84px (высота заголовка таблицы и отступы)
`;

export const TableHeaderWrapper = styled.div`
  // Оставляем заголовок фиксированным
`;

export const TableBodyWrapper = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeaderRow = styled.tr`
  background: var(--background-white);
`;

export const TableBodyRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--background-accent-light);
  }
`;
