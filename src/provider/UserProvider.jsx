import axios from "axios";
import React, { useReducer, createContext, useEffect } from "react";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const UserContext = createContext();

//==============================================================================//

function reducer(state, action) {
  switch (action.type) {
    case "login":
      window.localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.user)
      );
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };

    case "logout":
      window.localStorage.removeItem("userInfo");
      return {
        ...state,
        ...initialState,
        isLoggedIn: false,
      };

    default:
  }
}

function UserProvider(props, children) {
  useEffect(() => {
    let cookie = JSON.parse(window.localStorage.getItem("userInfo"));
    if (cookie) login(cookie);
    //TODO : load login session from cookie
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  function login(user) {
    dispatch({
      type: "login",
      payload: { user: user },
    });
  }

  function logout() {
    dispatch({
      type: "logout",
    });
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
      {...props}
    />
  );
}

export { UserProvider, UserContext };
