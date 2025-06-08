import { createContext, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    JSON.parse(localStorage.getItem("authTokens")) || null
  );

  const [user, setUser] = useState(() =>
    authTokens ? jwtDecode(authTokens.access) : null
  );

  const loginUser = async (credentials) => {
    try {
      const response = await axios.post("auth/token/", credentials);
      const decoded = jwtDecode(response.data.access);
      console.log("✅ Decoded JWT:", decoded);

      setAuthTokens(response.data);
      setUser(decoded);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data };
    }
  };

  const logoutUser = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      const response = await axios.post("auth/token/refresh/", {
        refresh: authTokens?.refresh,
      });
      const decoded = jwtDecode(response.data.access);
      setAuthTokens(response.data);
      setUser(decoded);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      return true;
    } catch (error) {
      logoutUser();
      return false;
    }
  }, [authTokens, logoutUser]);

  const contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
    refreshToken,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
