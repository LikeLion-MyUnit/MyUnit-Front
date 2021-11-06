import React, { useReducer, createContext, useEffect } from "react";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const UserContext = createContext({
  isLoggedIn: false,
  user: null,
});

//==============================================================================//

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      };

    case "logout":
      return {
        ...state,
        ...initialState,
      };

    default:
  }
}

function UserProvider(props, children) {
  useEffect(() => {
    //TODO : load login session from cookie
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  async function login() {
    //TODO : request login to django
    dispatch({
      type: "login",
      payload: {
        //TODO : data
      },
    });
  }

  function logout() {
    dispatch({
      type: "setLogout",
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
