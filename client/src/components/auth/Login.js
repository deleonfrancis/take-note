import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

function Login(props) {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials" || error === "Invalid Password") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("All fields are required", "danger");
    } else {
      loginUser({
        email,
        password,
      });
    }
  };

  // get current time
  let date = new Date();
  let hour = date.getHours();
  // console.log(hour);

  const morning = hour >= 5 && hour < 12;
  const afterNoon = hour >= 12 && hour < 18;
  const evening = hour >= 18 && hour < 5;

  return (
    <div className="">
      <h1 className="mt-5 mb-3">
        {morning && "Good morning"}
        {afterNoon && "Good afternoon"}
        {evening && "Good evening"}
      </h1>
      <h2 className="mb-3">
        welcome to <span>takeNote</span>
      </h2>
      <p className="mb-5">a secure place to keep your notes.</p>
      <div className="row d-flex justify-content-center">
        <form
          className="col-lg-8 col-md-10 col-sm-12 p-3 bg-light"
          onSubmit={onSubmit}
        >
          <h3 className="mb-3 signInText">Sign In </h3>
          {/* Sign in with google*/}
          {/* <button
            id="loginGoogle"
            style={{ width: "30%", margin: "auto" }}
            value="Google"
            className="btn btn-block googleBtn mb-3"
          >
            <i className="fab fa-google fa-lg"></i>
          </button> 

          <p className="mb-3">or user your account</p>*/}

          {/* Login Email */}
          <div
            style={{ width: "70%", margin: "auto" }}
            className="input-group mb-3"
          >
            <div className="input-group-prepend">
              <span
                style={{ border: "none", background: "none" }}
                className="input-group-text"
                id="basic-addon1"
              >
                <i className="fas fa-envelope fa-lg"></i>
              </span>
            </div>
            <label className="sr-only" htmlFor="emailLogin">
              Username
            </label>
            <input
              id="emailLogin"
              className="form-control customInput"
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={onChange}
              autoComplete="email"
              required
            />
          </div>
          {/* Login Password */}
          <div
            style={{ width: "70%", margin: "auto" }}
            className="input-group mb-4"
          >
            <div className="input-group-prepend">
              <span
                style={{ border: "none", background: "none" }}
                className="input-group-text"
                id="basic-addon1"
              >
                <i className="fas fa-lock fa-lg"></i>
              </span>
            </div>
            <label className="sr-only" htmlFor="passwordLogin">
              Username
            </label>
            <input
              id="passwordLogin"
              className="form-control customInput"
              type="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={onChange}
              autoComplete="current-password"
              required
            />
          </div>
          {/* Link to Sign Up  */}
          <div className="mb-3">
            <Link className="registerLink" to="/register">Not a user? Sign up</Link>
          </div>
          {/* Login Button */}
          <input
            style={{ width: "50%", margin: "auto" }}
            type="submit"
            value="LOGIN"
            className="btn btn-block loginBtn"
          />

          {/* <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
          className="customInput"
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={onChange}
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            autoComplete="current-password"
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
        <Link to="/register">Register</Link>
        <div></div> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
