import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();
console.log("authContext :", authContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  return (
    <AuthContext.Provider value={[ auth, setAuth ]}>
      {children}
    </AuthContext.Provider>
  );
};
console.log("AuthProvider :", AuthProvider);

const useAuth = useContext(AuthProvider);

export { useAuth, AuthContext };
