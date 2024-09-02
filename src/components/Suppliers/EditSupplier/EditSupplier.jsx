//EditSupplier.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  ErrorMessage,
  FormContainer,
} from "../AddSupplier/AddSupplier.styled";
import closeIcon from "../../../assets/svg/close.svg";
import chevronDownIcon from "../../../assets/svg/chevron-down.svg";
import chevronUpIcon from "../../../assets/svg/chevron-up.svg";
import calendarIcon from "../../../assets/svg/calendar.svg";
import { updateSupplier } from "../../../redux/actions/suppliersActions";
import { supplierSchema } from "../../../schemas/supplierSchema";
import { useDispatch } from "react-redux";

const EditSupplier = ({ supplier, onClose }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(supplierSchema),
    defaultValues: {
      name: supplier.name,
      address: supplier.address,
      suppliers: supplier.suppliers,
      date: supplier.date ? new Date(supplier.date) : null,
      amount: supplier.amount,
      status: supplier.status,
    },
  });

  const date = watch("date");

  const onSubmit = (data) => {
    const formattedDate = formatDate(data.date);
    const updatedSupplier = { ...data, date: formattedDate };
    dispatch(updateSupplier(supplier._id, updatedSupplier));
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
    setValue("status", value);
    setIsDropdownOpen(false);
  };

  const toggleCalendar = (e) => {
    e.preventDefault();
    setIsCalendarOpen(!isCalendarOpen);
  };

  const formatDate = (date) => {
    if (!date || !(date instanceof Date)) return "";
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
        <Headline>Edit supplier</Headline>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FirstLine>
            <div>
              <InputField placeholder="Supplier Info" {...register("name")} />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </div>
            <div>
              <InputField placeholder="Address" {...register("address")} />
              {errors.address && (
                <ErrorMessage>{errors.address.message}</ErrorMessage>
              )}
            </div>
          </FirstLine>
          <SecondLine>
            <div>
              <InputField placeholder="Company" {...register("suppliers")} />
              {errors.suppliers && (
                <ErrorMessage>{errors.suppliers.message}</ErrorMessage>
              )}
            </div>
            <DatePickerWrapper>
              <InputField
                placeholder="Delivery date"
                value={formatDate(date)}
                readOnly
                onClick={toggleCalendar}
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
                    setValue("date", date);
                    setIsCalendarOpen(false);
                  }}
                  inline
                  onClickOutside={() => setIsCalendarOpen(false)}
                />
              )}
              {errors.date && (
                <ErrorMessage>{errors.date.message}</ErrorMessage>
              )}
            </DatePickerWrapper>
          </SecondLine>
          <ThirdLine>
            <div>
              <InputField placeholder="Amount" {...register("amount")} />
              {errors.amount && (
                <ErrorMessage>{errors.amount.message}</ErrorMessage>
              )}
            </div>
            <div>
              <SelectField onClick={toggleDropdown}>
                {watch("status") || "Status"}
                <ChevronImg
                  src={isDropdownOpen ? chevronUpIcon : chevronDownIcon}
                  alt="chevron"
                />
              </SelectField>
              {isDropdownOpen && (
                <DropdownList ref={dropdownRef}>
                  {statuses.map((status) => (
                    <DropdownItem
                      key={status}
                      onClick={() => handleStatusSelect(status)}
                    >
                      {status}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
              {errors.status && (
                <ErrorMessage>{errors.status.message}</ErrorMessage>
              )}
            </div>
          </ThirdLine>
          <ButtonContainer>
            <AddButton type="submit">Save</AddButton>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </ButtonContainer>
        </FormContainer>
      </PopupContainer>
    </ModalOverlay>
  );
};

export default EditSupplier;
