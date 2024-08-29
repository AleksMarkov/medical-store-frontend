//DeleteSupplier.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ModalOverlay,
  PopupContainer,
  Headline,
  InputField,
  CloseButton,
  AddButton,
  CancelButton,
  ButtonContainer,
  FirstLine,
  SecondLine,
} from "./DeleteSupplier.styled";
import closeIcon from "../../../assets/svg/close.svg";

const DeleteSupplier = ({ product, onClose, onConfirmDelete }) => {
  const [productInfo, setProductInfo] = useState(product?.name || "");
  const [category, setCategory] = useState(product?.category || "");
  const [stock, setStock] = useState(product?.stock || "");
  const [suppliers, setSuppliers] = useState(product?.suppliers || "");
  const [price, setPrice] = useState(product?.price || "");
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

  const handleDelete = () => {
    onConfirmDelete();
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

  useEffect(() => {
    document.addEventListener("mousedown", handleOverlayClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleOverlayClick, handleEscKey]);

  return (
    <ModalOverlay>
      <PopupContainer ref={modalRef}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} width={26} height={26} alt="Close" />
        </CloseButton>
        <Headline>DELETE THIS SUPPLIER ?</Headline>
        <FirstLine>
          <InputField>{productInfo}</InputField>
          <InputField>{category}</InputField>
        </FirstLine>
        <SecondLine>
          <InputField>{stock}</InputField>
          <InputField>{suppliers}</InputField>
        </SecondLine>
        <InputField>{price}</InputField>
        <ButtonContainer>
          <AddButton onClick={handleDelete}>Yes</AddButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonContainer>
      </PopupContainer>
    </ModalOverlay>
  );
};

export default DeleteSupplier;
