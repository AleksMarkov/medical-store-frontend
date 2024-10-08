//Customers.styled.jsx
import styled from "styled-components";
import slideOn from "../../assets/svg/slideOn.svg";

export const OrdersContainer = styled.div`
  width: 100%;
  height: calc(100% - 116px); // 115padding + 1border
  background-color: var(--background-light);
  color: var(--background-dark);
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: var(--border-color);
  padding: 75px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1440px) {
    width: 960px;
    height: 604px;
    padding: 50px 32px 32px 32px;
  }

  @media (max-width: 1024px) {
    width: 704px;
    height: 862px;
    padding: 50px 32px 32px 32px;
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 672px;
    padding: 40px 20px 20px 20px;
    gap: 20px;
    overflow-x: auto;
  }
`;

export const TableContainer = styled.div`
  width: 1280px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;

  @media (max-width: 1440px) {
    width: 960px;
    height: 500px;
  }

  @media (max-width: 1024px) {
    width: 960px;
    height: 500px;
  }

  @media (max-width: 768px) {
    width: 671px;
    height: 460px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const FilterInput = styled.input`
  width: 186px;
  height: 16px;
  padding: 13px 18px;
  border: 1px solid var(--border-color);
  border-radius: 60px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  background-color: var(--background-white);

  &:focus {
    color: var(--background-dark);
    border: 1px solid var(--accent-green);
    outline: none;
  }

  &:hover {
    color: var(--background-dark);
    border: 1px solid var(--accent-green);
  }

  @media (max-width: 768px) {
    width: 182px;
    padding: 13px 13px 13px 18px;
    gap: 8px;
  }
`;

export const FilterButton = styled.div`
  width: 116px;
  height: 44px;
  gap: 8px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-green);
  color: var(--background-white);
  border: none;
  cursor: pointer;
  line-height: 18px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-btn);
  }

  @media (max-width: 768px) {
    width: 112px;
    font-size: 12px;
  }
`;

export const FilterIcon = styled.img`
  width: 14px;
  height: 14px;

  @media (max-width: 768px) {
  }
`;

export const TableTitle = styled.div`
  width: 1240px;
  height: 24px;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  background: var(--background-accent-light);
  color: var(--background-dark);

  @media (max-width: 1440px) {
    width: 920px;
  }
  @media (max-width: 1024px) {
    width: 920px;
  }
  @media (max-width: 768px) {
    width: 643px;
    height: 20px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 225px;

  @media (max-width: 1440px) {
    width: 184px;
  }

  @media (max-width: 1024px) {
    width: 184px;
  }

  @media (max-width: 768px) {
    width: 102px;
    height: 46px;
    align-items: flex-start;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 438px;

  @media (max-width: 768px) {
    height: 412px;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
`;

export const TableBody = styled.div`
  flex-grow: 1;
  max-height: 380px;

  @media (max-width: 768px) {
    height: 370px;
  }
`;

export const TableHeaderCell = styled.div`
  flex: 1;
  height: 17px;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
    height: 13px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 10px 14px 14px;
  }
`;

export const HeaderBox01 = styled.div`
  width: 225px;

  @media (max-width: 1440px) {
    width: 184px;
  }

  @media (max-width: 1024px) {
    width: 184px;
  }

  @media (max-width: 768px) {
    width: 99px;
  }
`;

export const HeaderBox02 = styled.div`
  width: 223px;

  @media (max-width: 1440px) {
    width: 203px;
  }

  @media (max-width: 1024px) {
    width: 203px;
  }

  @media (max-width: 768px) {
    width: 136px;
  }
`;

export const HeaderBox03 = styled.div`
  width: 225px;

  @media (max-width: 1440px) {
    width: 150px;
  }

  @media (max-width: 1024px) {
    width: 150px;
  }

  @media (max-width: 768px) {
    width: 98px;
  }
`;

export const HeaderBox04 = styled.div`
  width: 225px;

  @media (max-width: 1440px) {
    width: 134px;
  }

  @media (max-width: 1024px) {
    width: 134px;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const TableBodyRow = styled.div`
  display: flex;
  &:nth-child(even) {
    background-color: #f7f8fa;
  }
`;

export const TableCell = styled.div`
  flex: 1;
  display: flex;
  height: 37px;
  align-items: center;
  padding: 19px 10px 19px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  @media (max-width: 768px) {
    height: 46px;
    padding: 14px 7px 13px 14px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const TableCellBox02 = styled.div`
  width: 223px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1440px) {
    width: 203px;
  }

  @media (max-width: 1024px) {
    width: 203px;
  }
  @media (max-width: 768px) {
    width: 139px;
       height: 46px
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TableCellBox03 = styled.div`
  width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1440px) {
    width: 150px;
  }

  @media (max-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 46px
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TableCellBox04 = styled.div`
  width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1440px) {
    width: 134px;
  }

  @media (max-width: 1024px) {
    width: 134px;
  }
  @media (max-width: 768px) {
    width: 103px;
    height: 46px
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TableHeaderRow = styled.div`
  display: flex;
  background: var(--background-white);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const PaginationDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19px;
  gap: 8px;

  @media (max-width: 768px) {
    height: 16px;
    gap: 8px;
  }
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const PaginationDot = styled.img`
  width: ${({ src }) => (src === slideOn ? "12px" : "10px")};
  height: ${({ src }) => (src === slideOn ? "12px" : "10px")};
  cursor: pointer;

  @media (max-width: 768px) {
    width: ${({ src }) => (src === slideOn ? "12px" : "10px")};
    height: ${({ src }) => (src === slideOn ? "12px" : "10px")};
  }
`;
