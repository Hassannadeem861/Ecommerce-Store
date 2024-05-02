import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();
// console.log("AuthContext :", AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      console.log("parseData: ", parseData);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
// console.log("AuthProvider :", AuthProvider);

// coustom hook
const useAuth = () => useContext(AuthContext);
// console.log("useAuth :", useAuth);

export { useAuth, AuthProvider };
