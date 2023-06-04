import {createContext, useState} from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null
  });

  const setUserAuthInfo = ({token , user}) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    setAuthState({
      token:localStorage.getItem("token"),
      user:localStorage.getItem("user")
    });
  };

  const isUserAuthenticated = () => {
    if (localStorage.getItem("token") != undefined) {
      return true
    }
    return false
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };