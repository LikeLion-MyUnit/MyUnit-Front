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
        user: action.payload.user,
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

  async function login(user) {
    //TODO : save to cookie
    dispatch({
      type: "login",
      payload: { user: user },
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
