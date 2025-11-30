import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// AuthProvider wraps your app
export function AuthProvider({ children }) {
  const AUTH_CHECK_API = process.env.REACT_APP_AUTH_CHECK_API_URL;
  const LOGIN_API = process.env.REACT_APP_LOGIN_API_URL;

  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("access") // true if JWT exists
  );

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        AUTH_CHECK_API,
        LOGIN_API
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context in components
export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
