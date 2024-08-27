//Orders.styled.jsx
import styled from "styled-components";

export const OrdersContainer = styled.div`
  width: 1360px;
  height: 606px;
  background-color: var(--background-light);
  color: var(--background-dark);
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: var(--border-color);
  padding: 75px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto; /* Центрирование контейнера */

  @media (max-width: 1440px) {
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

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
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
`;

export const FilterIcon = styled.img`
  width: 14px;
  height: 14px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const TableTitle = styled.div`
  width: 100%;
  height: 24px;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  background: var(--background-accent-light);
  color: var(--background-dark);

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
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
  width: 100%;

  @media (max-width: 768px) {
    width: 84px;
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
      case "Completed":
        return "#59B17A";
      case "Confirmed":
        return "#8059E4";
      case "Pending":
        return "#F79042";
      case "Cancelled":
        return "#E85050";
      case "Processing":
        return "#70A6E8";
      case "Shipped":
        return "#4A90E2";
      case "Delivered":
        return "#50C878";
      default:
        return "#1D1E21";
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case "Completed":
        return "rgba(89, 177, 122, 0.1)";
      case "Confirmed":
        return "rgba(128, 89, 228, 0.1)";
      case "Pending":
        return "rgba(247, 144, 66, 0.1)";
      case "Cancelled":
        return "rgba(232, 80, 80, 0.1)";
      case "Processing":
        return "rgba(112, 166, 232, 0.1)";
      case "Shipped":
        return "rgba(74, 144, 226, 0.1)";
      case "Delivered":
        return "rgba(80, 200, 120, 0.1)";
      default:
        return "#E0E0E0";
    }
  }};
`;

export const SliderIcon = styled.img`
  width: 127px;
  height: 19px;
  margin-left: 576px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const TableContainer = styled.div`
  width: 1280px;
  height: 502px;
  display: flex;
  flex-direction: column;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1440px) {
    width: 704px;
    height: 512px;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 511px;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px); // Вычитаем высоту заголовка таблицы
`;

export const TableHeader = styled.div`
  width: 100%;
`;

export const TableBody = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

export const TableHeaderRow = styled.div`
  display: flex;
  background: var(--background-white);
`;

export const TableHeaderCell = styled.div`
  flex: 1;
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
    width: 83px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 10px 14px 14px;
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
  align-items: center;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  @media (max-width: 768px) {
    width: 106px;
    padding: 14px 7px 14px 14px;
    font-size: 12px;
    line-height: 14px;
  }
`;
