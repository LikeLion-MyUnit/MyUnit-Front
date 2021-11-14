import axios from "axios";
import React, { useReducer, createContext, useEffect } from "react";
import { getUserProfile } from "../service/AuthService";

const initialState = {
  isLoggedIn: false,
  user: null,
  details: null,
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
        details: action.payload.details,
      };

    case "logout":
      window.localStorage.removeItem("userInfo");
      return {
        ...state,
        ...initialState,
        isLoggedIn: false,
      };

      case "updateProfile":
        return {
          ...state,
          details: action.payload.details,
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

  async function login(user) {

    let details = await getUserProfile(user.token, user.user_pk);

    dispatch({
      type: "login",
      payload: { user: user , details : details},
    });
  }

  function logout() {
    dispatch({
      type: "logout",
    });
  }

  function updateProfile(details) {
    dispatch({
      type: 'updateProfile',
      payload : {details : details}
    })
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        login,
        logout,
        updateProfile
      }}
      {...props}
    />
  );
}

export { UserProvider, UserContext };
