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
    localStorage.setItem("user", user)
    setAuthState({
      token :data.access_token,
      user:user
    });
  };

  const isUserAuthenticated = () => {

    if (localStorage.getItem("token") != null && localStorage.getItem("user") != null) {
      setAuthState({
        token :localStorage.getItem("token"),
        user: localStorage.getItem("user")
      })
    }
    if (authState.token != null && authState.user != null) {
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