//Suppliers.styled.jsx
import styled from "styled-components";
import slideOn from "../../assets/svg/slideOn.svg";

export const ProductsContainer = styled.div`
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

export const FilterContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    width: 960px;
  }

  @media (max-width: 1024px) {
    width: 960px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 18px;
  }
`;

export const FilterBlock = styled.div`
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

export const FilterButton = styled.button`
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

export const AddButton = styled.div`
  width: 196px;
  height: 16px;
  background: var(--background-white);
  color: var(--background-dark);
  border-radius: 60px;
  border: 1px solid var(--btn--accent-green);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  padding: 13px;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-btn);
    color: var(--background-white);
  }
`;

export const AddBlock = styled.div`
  width: 177px;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

export const TableContainer = styled.div`
  width: 1280px;
  height: 500px;
  display: table;
  table-layout: fixed;
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
    width: 712px;
    height: 460px;
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
    width: 684px;
    height: 20px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
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
  height: 380px;

  @media (max-width: 768px) {
    height: 370px;
  }
`;

export const TableHeaderRow = styled.div`
  display: flex;
  background: var(--background-white);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TableBodyRow = styled.div`
  display: flex;
  &:nth-child(even) {
    background-color: var(--background-light);
  }
`;

export const TableHeaderCell = styled.div`
  width: 200px;
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
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 13px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 7px 14px 14px;
  }
`;

export const TableCell = styled.div`
  width: 200px;
  flex: 1;
  display: flex;
  height: 17px;
  align-items: center;
  padding: 29px 5px 29px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 1440px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 13px;
    padding: 30px 5px 30px 14px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ActionCell = styled(TableCell)`
  justify-content: flex-start;
  gap: 10px;
`;

export const ActionIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const EditButton = styled.div`
  width: 80px;
  height: 32px;
  border-radius: 30px;
  border: 1px solid var(--btn--accent-green);
  color: var(--accent-green);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  gap: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 70px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const StatusBadge = styled.span`
  display: flex;
  width: 92px;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ status }) => {
    switch (status) {
      case "Active":
        return "#59B17A";
      case "Deactive":
        return "#E85050";
      default:
        return "#1D1E21";
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case "Active":
        return "rgba(89, 177, 122, 0.1)";
      case "Deactive":
        return "rgba(232, 80, 80, 0.1)";
      default:
        return "#E0E0E0";
    }
  }};

  @media (max-width: 768px) {
    width: 70px;
    padding: 4px 2px;
    font-size: 12px;
    line-height: 14px;
  }
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
