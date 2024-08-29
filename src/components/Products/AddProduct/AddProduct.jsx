// AddProduct.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
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
  ChevronImg,
  DropdownList,
  DropdownItem,
} from "./AddProduct.styled";
import closeIcon from "../../../assets/svg/close.svg";
import chevronDownIcon from "../../../assets/svg/chevron-down.svg";
import chevronUpIcon from "../../../assets/svg/chevron-up.svg";

const AddProduct = ({ onClose, onAdd }) => {
  const [productInfo, setProductInfo] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [suppliers, setSuppliers] = useState("");
  const [price, setPrice] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const modalRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleAdd = () => {
    onAdd({ productInfo, category, stock, suppliers, price });
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

  const handleCategorySelect = (value) => {
    setCategory(value);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOverlayClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleOverlayClick, handleEscKey]);

  const categories = [
    "Medicine",
    "Head",
    "Hand",
    "Heart",
    "Leg",
    "Dental Care",
    "Skin Care",
    "Eye Care",
    "Vitamins & Supplements",
    "Orthopedic Products",
    "Baby Care",
  ];

  return (
    <ModalOverlay>
      <PopupContainer ref={modalRef}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} width={26} height={26} alt="Close" />
        </CloseButton>
        <Headline>Add a new product</Headline>
        <FirstLine>
          <InputField
            placeholder="Product Info"
            value={productInfo}
            onChange={(e) => setProductInfo(e.target.value)}
          />
          <SelectField onClick={toggleDropdown}>
            {category || "Category"}
            <ChevronImg
              src={isDropdownOpen ? chevronUpIcon : chevronDownIcon}
              alt="chevron"
            />
          </SelectField>
          {isDropdownOpen && (
            <DropdownList ref={dropdownRef}>
              {categories.map((cat) => (
                <DropdownItem
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </FirstLine>
        <SecondLine>
          <InputField
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <InputField
            placeholder="Suppliers"
            value={suppliers}
            onChange={(e) => setSuppliers(e.target.value)}
          />
        </SecondLine>
        <InputField
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <ButtonContainer>
          <AddButton onClick={handleAdd}>Add</AddButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonContainer>
      </PopupContainer>
    </ModalOverlay>
  );
};

export default AddProduct;
