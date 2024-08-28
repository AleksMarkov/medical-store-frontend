//Products.styled.jsx
import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 1360px;
  height: 720px;
  background-color: var(--background-light);
  color: var(--background-dark);
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: var(--border-color);
  padding: 75px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  overflow-x: visible;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
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

  @media (max-width: 768px) {
    width: 182px;
    padding: 13px 13px 13px 18px;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 44px;
  background-color: var(--accent-green);
  color: var(--background-white);
  border: none;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  gap: 8px;

  @media (max-width: 768px) {
    width: 112px;
    font-size: 12px;
  }
`;

export const AddButton = styled(FilterButton)`
  background-color: var(--accent-btn);
  width: auto;
  padding: 0 20px;
`;

export const TableContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1440px) {
    width: 960px;
  }

  @media (max-width: 1024px) {
    width: 704px;
  }

  @media (max-width: 768px) {
    width: 335px;
  }
`;

export const TableTitle = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  background: var(--background-accent-light);
  color: var(--background-dark);

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  width: 100%;
`;

export const TableBody = styled.div`
  overflow-y: auto;
`;

export const TableHeaderRow = styled.div`
  display: flex;
  background: var(--background-white);
`;

export const TableBodyRow = styled.div`
  display: flex;
  &:nth-child(even) {
    background-color: var(--background-light);
  }
`;

export const TableHeaderCell = styled.div`
  flex: 1;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--label-color);

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    padding: 14px 10px 14px 14px;
  }
`;

export const TableCell = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  @media (max-width: 768px) {
    padding: 14px 7px 14px 14px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ActionCell = styled(TableCell)`
  justify-content: flex-start;
  gap: 10px;
`;

export const ActionIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

export const PaginationDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--accent-green)" : "var(--background-gray)"};
  cursor: pointer;
`;
