//Modal.jsx
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById("modal-root"));
};

export default Modal;
