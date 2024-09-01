// AddSupplier.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ModalOverlay,
  PopupContainer,
  Headline,
  InputField,
  SelectField,
  CloseButton,
  AddButton,
  CancelButton,
  ButtonContainer,
  FirstLine,
  SecondLine,
  ThirdLine,
  ChevronImg,
  DropdownList,
  DropdownItem,
  CalendarImg,
  DatePickerWrapper,
} from "./AddSupplier.styled";
import closeIcon from "../../../assets/svg/close.svg";
import chevronDownIcon from "../../../assets/svg/chevron-down.svg";
import chevronUpIcon from "../../../assets/svg/chevron-up.svg";
import calendarIcon from "../../../assets/svg/calendar.svg";
import { useDispatch } from "react-redux";
import { addSupplier } from "../../../redux/actions/suppliersActions";

const AddSupplier = ({ onClose }) => {
  const dispatch = useDispatch();
  const [supplierInfo, setSupplierInfo] = useState("");
  const [address, setAddress] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [date, setDate] = useState(null);
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const modalRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleAdd = () => {
    const formattedDate = formatDate(date);

    const newSupplier = {
      name: supplierInfo,
      address,
      suppliers,
      date: formattedDate,
      amount,
      status,
    };

    dispatch(addSupplier(newSupplier));
    onClose();
  };

  const handleOverlayClick = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleEscKey = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStatusSelect = (value) => {
    setStatus(value);
    setIsDropdownOpen(false);
  };

  const toggleCalendar = (e) => {
    e.preventDefault();
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOverlayClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleOverlayClick, handleEscKey]);

  const statuses = ["Active", "Deactive"];

  return (
    <ModalOverlay>
      <PopupContainer ref={modalRef}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} width={26} height={26} alt="Close" />
        </CloseButton>
        <Headline>Add a new supplier</Headline>
        <FirstLine>
          <InputField
            placeholder="Supplier Info"
            value={supplierInfo}
            onChange={(e) => setSupplierInfo(e.target.value)}
          />
          <InputField
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FirstLine>
        <SecondLine>
          <InputField
            placeholder="Company"
            value={suppliers}
            onChange={(e) => setSuppliers(e.target.value)}
          />
          <DatePickerWrapper>
            <InputField
              placeholder="Delivery date"
              value={formatDate(date)}
              readOnly
            />
            <CalendarImg
              src={calendarIcon}
              alt="calendar"
              onClick={toggleCalendar}
            />
            {isCalendarOpen && (
              <DatePicker
                selected={date}
                onChange={(date) => {
                  setDate(date);
                  setIsCalendarOpen(false);
                }}
                inline
                onClickOutside={() => setIsCalendarOpen(false)}
              />
            )}
          </DatePickerWrapper>
        </SecondLine>
        <ThirdLine>
          <InputField
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <SelectField onClick={toggleDropdown}>
            {status || "Status"}
            <ChevronImg
              src={isDropdownOpen ? chevronUpIcon : chevronDownIcon}
              alt="chevron"
            />
          </SelectField>
          {isDropdownOpen && (
            <DropdownList ref={dropdownRef}>
              {statuses.map((cat) => (
                <DropdownItem key={cat} onClick={() => handleStatusSelect(cat)}>
                  {cat}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </ThirdLine>
        <ButtonContainer>
          <AddButton onClick={handleAdd}>Add</AddButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonContainer>
      </PopupContainer>
    </ModalOverlay>
  );
};

export default AddSupplier;
