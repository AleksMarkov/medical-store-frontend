//supplierSchema.js;
import * as yup from "yup";

export const supplierSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Minimum 2 characters")
    .max(20, "Miaximum 20 characters")
    .required("Supplier's name is required"),
  address: yup
    .string()
    .min(2, "Minimum 2 characters")
    .max(24, "Miaximum 24 characters")
    .required("Address is required"),
  suppliers: yup
    .string()
    .min(2, "Minimum 2 characters")
    .max(14, "Miaximum 14 characters")
    .required("Company name is required"),
  date: yup.date().required("Delivery date is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .test(
      "is-decimal",
      "Amount must have at most two decimal places",
      (value) => {
        if (value !== undefined && value !== null) {
          return /^\d+(\.\d{1,2})?$/.test(value);
        }
        return true;
      }
    )
    .test(
      "max-digits",
      "Amount must have at most six digits before the decimal",
      (value) => {
        if (value !== undefined && value !== null) {
          return /^\d{1,6}(\.\d{1,2})?$/.test(value);
        }
        return true;
      }
    ),
  status: yup
    .string()
    .oneOf(["Active", "Deactive"], "Invalid status")
    .required("Status is required"),
});
