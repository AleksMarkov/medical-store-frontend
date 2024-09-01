//EditProduct.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  ErrorMessage,
  FormContainer,
} from "../AddProduct/AddProduct.styled";
import closeIcon from "../../../assets/svg/close.svg";
import chevronDownIcon from "../../../assets/svg/chevron-down.svg";
import chevronUpIcon from "../../../assets/svg/chevron-up.svg";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../redux/actions/productsActions";
import { productSchema } from "../../../schemas/productSchema"; // Импорт схемы

const EditProduct = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const modalRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: product?.name || "",
      category: product?.category || "",
      stock: product?.stock || "",
      suppliers: product?.suppliers || "",
      price: product?.price || "",
    },
    resolver: yupResolver(productSchema),
  });

  const onSubmit = (data) => {
    dispatch(updateProduct(product._id, data));
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
    setValue("category", value);
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
        <Headline>Edit product</Headline>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FirstLine>
            <div>
              <InputField placeholder="Product Info" {...register("name")} />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </div>
            <div>
              <SelectField onClick={toggleDropdown}>
                {watch("category") || "Category"}
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
              {errors.category && (
                <ErrorMessage>{errors.category.message}</ErrorMessage>
              )}
            </div>
          </FirstLine>
          <SecondLine>
            <div>
              <InputField placeholder="Stock" {...register("stock")} />
              {errors.stock && (
                <ErrorMessage>{errors.stock.message}</ErrorMessage>
              )}
            </div>
            <div>
              <InputField placeholder="Suppliers" {...register("suppliers")} />
              {errors.suppliers && (
                <ErrorMessage>{errors.suppliers.message}</ErrorMessage>
              )}
            </div>
          </SecondLine>
          <div>
            <InputField placeholder="Price" {...register("price")} />
            {errors.price && (
              <ErrorMessage>{errors.price.message}</ErrorMessage>
            )}
          </div>
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

export default EditProduct;
