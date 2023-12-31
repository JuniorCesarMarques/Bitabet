import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { AuthContext, SignUpType } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      setUser(userToken);
    }
  });

  const signup = async (signupParam: SignUpType) => {
    const data = await api.signup(signupParam);
    if (data) {
      return true;
    }
    
    return false;
  };

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.name && data.accessToken) {
      setUser(data.name);
      localStorage.setItem("user", JSON.stringify(data));
      return true;
    }

    return false;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isUserLoggedIn: user != null && user != undefined,
        signup,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
