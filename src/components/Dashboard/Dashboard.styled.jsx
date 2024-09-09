//Dashboard.styled.jsx
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export const DashContainer = styled.div`
  width: 1360px;
  height: 661px;
  background-color: var(--background-light);
  color: var(--background-dark);
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: var(--border-color);
  padding: 20px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1440px) {
    width: 1344px;
    height: 650px;
    padding: 20px 32px 40px 32px;
    gap: 40px;
  }

  @media (max-width: 1343px) {
    width: 704px;
    height: 1172px;
    padding: 20px 32px 40px 32px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 1313px;
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

  @media (max-width: 1343px) {
    flex-direction: column;
    align-items: center;
    width: 704px;
    height: 1024px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 335px;
    height: 1011px;
    gap: 40px;
  }
`;

export const TableContainer1 = styled.div`
  width: 628px;
  height: 510px;
  display: table;
  table-layout: fixed;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;

  @media (max-width: 1440px) {
  }

  @media (max-width: 1343px) {
    width: 704px;
  }

  @media (max-width: 768px) {
    width: 333px;
    height: 458px;
  }
`;

export const TableContainer2 = styled.div`
  width: 628px;
  height: 510px;
  display: table;
  table-layout: fixed;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;

  @media (max-width: 1440px) {
  }

  @media (max-width: 1343px) {
    width: 704px;
    height: 510px;
  }

  @media (max-width: 768px) {
    width: 333px;
    height: 515px;
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

  @media (max-width: 1343px) {
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
  width: 192px;
  border-right: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 1343px) {
    width: 224px;
  }

  @media (max-width: 768px) {
    width: 84px;
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 7px 14px 14px;
  }
`;

export const TableHeaderCell02 = styled.div`
  display: table-cell;
  width: 238px;
  text-align: left;
  padding: 20px 10px 20px 20px;
  border-right: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 1343px) {
    width: 248px;
  }

  @media (max-width: 768px) {
    width: 128px;
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 7px 14px 14px;
  }
`;

export const TableHeaderCell03 = styled.div`
  display: table-cell;
  width: 108px;
  padding: 20px 10px 20px 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 1343px) {
    width: 140px;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 7px 14px 14px;
  }
`;

export const TableCell01 = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  width: 192px;
  height: 35px;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 1343px) {
    width: 224px;
  }

  @media (max-width: 768px) {
    width: 84px;
    height: 45px;
    padding: 14px 7px 14px 14px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const CellBox = styled.div`
  display: flex;
  width: 192px;
  height: 35px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  @media (max-width: 1343px) {
    width: 224px;
  }

  @media (max-width: 768px) {
    width: 84px;
    height: 45px;
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
  width: 237px;
  height: 17px;
  text-align: left;
  padding: 29px 10px 29px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 1343px) {
    width: 248px;
  }

  @media (max-width: 768px) {
    width: 132px;
    height: 45px;
    padding: 14px 7px 14px 10px;
  }
`;

export const CellBox02 = styled.div`
  width: 238px;
  height: 17px;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1343px) {
    width: 248px;
  }

  @media (max-width: 768px) {
    width: 132px;
    height: 13px;
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TableCell03 = styled.div`
  display: table-cell;
  width: 107px;
  height: 35px;
  vertical-align: middle;
  text-align: start;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 1343px) {
    width: 140px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 45px;
    padding: 14px 7px 14px 10px;
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TableHeaderCell2 = styled.div`
  display: table-cell;
  padding: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 768px) {
    width: 312px;
    height: 18px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 7px 14px 14px;
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
  height: 24px;
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

  @media (max-width: 768px) {
    height: 22px;
    font-size: 12px;
    line-height: 14.52px;
  }
`;

export const CellBox2 = styled.div`
  width: 350px;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 1343px) {
    width: 424px;
  }

  @media (max-width: 768px) {
    width: 112px;
    font-size: 14px;
    line-height: 18px;
  }
`;
export const TableCell3 = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: start;
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 14px 14px 14px 0;
  }
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

  font-weight: 500;
  display: block;
  text-align: end;
  width: 80px;
  font-size: 16px;
  line-height: 18px;

  @media (max-width: 768px) {
    display: block;
    text-align: end;
    width: 70px;
    font-size: 12px;
    line-height: 14.52px;
  }
`;

export const TableBodyWrapper = styled.div``;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableBodyRow = styled.tr`
  width: 630px;
  height: 76px;

  @media (max-width: 1343px) {
    width: 704px;
  }

  @media (max-width: 768px) {
    width: 333x;
    height: 74px;
  }
`;

export const TableBodyRow2 = styled.tr`
  width: 630px;

  @media (max-width: 1343px) {
    width: 704px;
  }

  @media (max-width: 768px) {
    width: 333x;
  }
`;

export const TableWrapper1 = styled(SimpleBar)`
  height: 436px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: 410px;
  }
`;

export const TableWrapper2 = styled(SimpleBar)`
  height: 436px;
  overflow-x: hidden;

  @media (max-width: 1343px) {
    height: 446px;
  }

  @media (max-width: 768px) {
    height: 467px;
  }
`;

export const TableHeaderRow = styled.div`
  display: flex;
  background: var(--background-white);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 1;
  width: 630px;
  height: 57px;

  @media (max-width: 1343px) {
    width: 704px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 41px;
  }
`;

export const TableHeaderRow2 = styled.div`
  display: flex;
  background: var(--background-white);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 1;
  width: 630px;
  height: 57px;

  @media (max-width: 1343px) {
    width: 704px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 45px;
  }
`;
