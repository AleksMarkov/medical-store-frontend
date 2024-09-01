//AddSupplier.styled.jsx
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
    width: 335px;
    height: 542px;
    padding: 40px 20px;
  }
`;

export const Headline = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: var(--background-dark);
  margin-bottom: 26px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 6px;
  }
`;

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 456px;
  height: 44px;

  @media (max-width: 768px) {
    width: 295px;
    height: 102px;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 14px;
  }
`;
export const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 456px;
  height: 44px;

  @media (max-width: 768px) {
    width: 295px;
    height: 102px;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 14px;
  }
`;

export const ThirdLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 456px;
  height: 44px;

  @media (max-width: 768px) {
    width: 295px;
    height: 102px;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 14px;
  }
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
    width: 295px;
    height: 44px;
    padding: 13px 18px;
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

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
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

  @media (max-width: 768px) {
    width: 146px;
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

  @media (max-width: 768px) {
    width: 146px;
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
  color: var(--label-color)
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

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
    width: 295px;
    padding: 13px 18px;
  }
`;

export const CalendarImg = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 20px;
  top: 14px;
  cursor: pointer;
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
  top: 275px;
  left: 272px;
  z-index: 1002;
  padding: 10px 0px;

  @media (max-width: 768px) {
    width: 295px;
    top: 426px;
    left: 20px;
  }
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

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 224px;

  .react-datepicker {
    font-family: Arial, sans-serif;
    border-radius: 4px;
    border: 1px solid var(--border-color);
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1003;
  }

  .react-datepicker__header {
    background-color: var(--accent-green);
    border-bottom: none;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: var(--background-white);
  }

  .react-datepicker__day--selected {
    background-color: var(--accent-green);
  }

  @media (max-width: 768px) {
    width: 295px;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--accent-red);
  font-size: 10px;
  margin-left: 16px;
`;

export const FormContainer = styled.form`
  width: 456px;
  height: 304px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;

  @media (max-width: 1440px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    width: 295px;
    height: 462px;
  }
`;
