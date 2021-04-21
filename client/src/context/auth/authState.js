import React, { useReducer } from "react";
import AuthContext from './authContext'
import authReducer from "./authReducer";
import axios from "axios";

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from "../types";

const AuthState = (props) => {
  const initialState = {
    //   access the browser to get the token
      token:localStorage.getItem('token'),
    //   tells us if user is logged in or not
      isAuthenticated: null,   
    loading: true,
    user:null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  
  //   Load User
  const loadUser = () => console.log("loadUser");


  //  Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": " application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };
  //  Login User
  const loginUser = () => console.log("loginUser");

  // Logout
  const logoutUser = () => console.log("logoutUser");

  // Clear Errors
  const clearErrors = () => dispatch({type: CLEAR_ERRORS});


  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        register,
        loginUser,
        logoutUser,
        clearErrors
        
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
