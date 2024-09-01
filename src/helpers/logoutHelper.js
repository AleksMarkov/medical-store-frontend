//src/helpers/logoutHelper.js
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/authActions";
import api from "../services/api";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async (navigate) => {
    try {
      const response = await api.get("/user/logout");
      if (response.status === 204) {
        dispatch(logoutAction());
        if (navigate) navigate("/login");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Logout error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
      alert(
        `Ошибка при выходе: ${error.message}. Пожалуйста, попробуйте еще раз или обратитесь в службу поддержки.`
      );
    }
  };
  return { logout };
};

export default useLogout;
