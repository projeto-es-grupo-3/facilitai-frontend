import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
    user:""
  });

  const setUserAuthInfo = ({ data , user}) => {
    localStorage.setItem("token", data.access_token);
    setAuthState({
      token :data.access_token,
      user:user
    });
  };

  const isUserAuthenticated = () => {
    if (authState.token) {
      return true;
    } 
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