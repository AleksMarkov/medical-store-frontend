//AddProduct.styled.jsx
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-menu);
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  position: absolute;
  width: 536px;
  height: 412px;
  left: 440px;
  top: 166px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
  background-color: var(--background-white);
  border-radius: 12px;
  padding: 40px;
  box-sizing: border-box;
  z-index: 1001;

  @media (max-width: 1440px) {
    left: 240px;
    top: 166px;
  }

  @media (max-width: 1024px) {
    left: 110px;
    top: 300px;
  }

  @media (max-width: 768px) {
    left: 20px;
    top: 200px;
  }
`;

export const Headline = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: var(--background-dark);
  margin-bottom: 26px;
`;

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 456px;
  height: 44px;
`;
export const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 456px;
  height: 44px;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  width: 224px;
  height: 44px;
  background-color: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 60px;
  padding: 0 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--background-dark);

  &::placeholder {
    color: var(--label-color);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 26px;
  height: 26px;
  right: 14px;
  top: 14px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 26px;
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 52px;
  width: 133px;
  height: 44px;
  background-color: var(--accent-green);
  border-radius: 60px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--background-white);
  cursor: pointer;

  &:hover {
    background-color: var(--accent-btn);
  }
`;

export const CancelButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 43px;
  width: 133px;
  height: 44px;
  background-color: var(--border-color);
  border-radius: 60px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--label-color);
  cursor: pointer;

  &:hover {
    background-color: var(--background-white);
    color: var(--accent-green);
    border: 1px solid var(--accent-green);
  }
`;

export const SelectField = styled.div`
  box-sizing: border-box;
  width: 224px;
  height: 44px;
  background-color: var(--background-white);
  border: 1px solid
    ${(props) =>
      props.isOpen ? "rgba(89, 177, 122, 0.4)" : "var(--border-color)"};
  border-radius: 60px;
  padding: 10px 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--background-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`;

export const ChevronImg = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 20px;
`;

export const DropdownList = styled.div`
  position: absolute;
  width: 224px;
  max-height: 140px;
  overflow-y: auto;
  background-color: var(--accent-green);
  border-radius: 15px;
  top: 160px;
  left: 272px;
  z-index: 1002;
  padding: 10px 0px;
`;

export const DropdownItem = styled.div`
  padding: 3px 18px;
  background-color: var(--accent-green);
  color: var(--background-light);
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  &:hover {
    background-color: var(--accent-btn);
    color: var(--background-white);
  }
`;
