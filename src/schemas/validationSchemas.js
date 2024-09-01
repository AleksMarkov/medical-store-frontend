// src/schemas/validationSchemas.js
import * as yup from "yup";

export const supplierSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Minimum 2 characters")
    .required("Supplier info is required"),
  address: yup
    .string()
    .min(2, "Minimum 2 characters")
    .required("Address is required"),
  suppliers: yup
    .string()
    .min(2, "Minimum 2 characters")
    .required("Company is required"),
  date: yup.date().required("Delivery date is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required"),
  status: yup
    .string()
    .oneOf(["Active", "Deactive"], "Invalid status")
    .required("Status is required"),
});

export const productSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Minimum 2 characters")
    .required("Product info is required"),
  category: yup
    .string()
    .oneOf(
      [
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
      ],
      "Invalid category"
    )
    .required("Category is required"),
  stock: yup
    .number()
    .typeError("Stock must be a number")
    .required("Stock is required"),
  suppliers: yup
    .string()
    .min(2, "Minimum 2 characters")
    .required("Suppliers is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required"),
});
