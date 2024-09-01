//productSchema.js
import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Minimum 2 characters")
    .max(20, "Maximum 20 characters")
    .required("Product name is required"),
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
    .min(0, "Stock cannot be negative")
    .required("Stock is required"),
  suppliers: yup
    .string()
    .min(2, "Minimum 2 characters")
    .max(14, "Maximum 14 characters")
    .required("Supplier is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .min(0, "Price cannot be negative")
    .test("is-decimal", "Price must have at most two decimal places", (value) =>
      /^\d+(\.\d{1,2})?$/.test(value)
    )
    .test(
      "max-digits",
      "Price must have at most six digits before the decimal",
      (value) => /^\d{1,6}(\.\d{1,2})?$/.test(value)
    )
    .required("Price is required"),
});
