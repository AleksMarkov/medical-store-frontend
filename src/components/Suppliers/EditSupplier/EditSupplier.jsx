//EditSupplier.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
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
} from "./EditSupplier.styled";
import closeIcon from "../../../assets/svg/close.svg";
import chevronDownIcon from "../../../assets/svg/chevron-down.svg";
import chevronUpIcon from "../../../assets/svg/chevron-up.svg";
import { updateProduct } from "../../../actions/productsActions";

const EditSupplier = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState(product?.name || "");
  const [category, setCategory] = useState(product?.category || "");
  const [stock, setStock] = useState(product?.stock || "");
  const [suppliers, setSuppliers] = useState(product?.suppliers || "");
  const [price, setPrice] = useState(product?.price || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (product) {
      setProductInfo(product.name);
      setCategory(product.category);
      setStock(product.stock);
      setSuppliers(product.suppliers);
      setPrice(product.price);
    }
  }, [product]);

  const handleEdit = () => {
    const updatedProduct = {
      name: productInfo,
      category,
      stock,
      suppliers,
      price,
    };

    dispatch(updateProduct(product._id, updatedProduct));
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
        <Headline>Edit supplier</Headline>
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
            <DropdownList>
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
          <AddButton onClick={handleEdit}>Save</AddButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonContainer>
      </PopupContainer>
    </ModalOverlay>
  );
};

export default EditSupplier;
