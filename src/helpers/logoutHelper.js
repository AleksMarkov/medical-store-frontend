//src/helpers/logoutHelper.js
import { useDispatch } from "react-redux";
import { logoutAction } from "../actions/authActions";
import api from "../services/api";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async (navigate) => {
    try {
      await api.post("/user/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      dispatch(logoutAction());
      if (navigate) navigate("/login");
    }
  };

  return { logout };
};

export default useLogout;
