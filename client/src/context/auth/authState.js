import React, { useReducer } from "react";
import AuthContext from './authContext'
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken"

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
  const loadUser = async () => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({type: AUTH_ERROR})
    }
  };

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
      loadUser()
    }
  };
  //  Login User
  const loginUser = () => {
    // if(localStorage.token){
    //   setAuthToken(localStorage.token)
    // }
    console.log("loginUser")
  }
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
