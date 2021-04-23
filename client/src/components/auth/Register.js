import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

function Register(props) {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setAlert("Please Enter All Fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords Must Match", "danger");
    } else {
      register({
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  return (
    <div className="row d-flex justify-content-center mt-5">
      <form
        className="col-lg-8 col-md-10 col-sm-12 p-3 bg-light"
        onSubmit={onSubmit}
      >
        <h3 className="mb-3 signInText">Sign Up </h3>
        {/* First Name Input */}
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
              <i className="fas fa-user fa-lg"></i>
            </span>
          </div>
          <label className="sr-only" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            className="form-control customInput"
            placeholder="Your First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        {/* Last Name Input */}
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
              <i className="fas fa-user-tie fa-lg"></i>
            </span>
          </div>
          <label className="sr-only" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            className="form-control customInput"
            placeholder="Your Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        {/* First and last name input old */}
        {/* <div className="form-group">
          <label htmlFor="firtName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
        </div> */}
        {/* Register Email */}
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
              <i className="fas fa-envelope fa-lg"></i>
            </span>
          </div>
          <label className="sr-only" htmlFor="emailRegister">
            Your Email
          </label>
          <input
            id="emailRegister"
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
        {/* Email old */}
        {/* <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div> */}

        {/* Register Password */}
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
          <label className="sr-only" htmlFor="passwordRegister">
            Username
          </label>
          <input
            id="passwordRegister"
            className="form-control customInput"
            type="password"
            name="password"
            placeholder="Your password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        {/* Password old */}
        {/* <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div> */}

        {/* Confirm Password */}
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
              <i className="fas fa-exclamation-triangle fa-lg"></i>
            </span>
          </div>
          <label className="sr-only" htmlFor="passwordConfirm">
            Username
          </label>
          <input
            id="passwordConfirm"
            className="form-control customInput"
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        {/* Password 2 old */}
        {/* <div className="form-group">
          <label className="sr-only" htmlFor="password2">Confirm Password</label>
          <input
          className="form-control customInput"
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div> */}
        <div className="mb-3">
          <Link className="loginRegisterLink" to="/login">
            Back to login
          </Link>
        </div>
        <input
          style={{ width: "50%", margin: "auto" }}
          type="submit"
          value="Register"
          className="btn btn-block loginRegisterBtn"
        />
      </form>
      {/* <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <div>

      </div> */}
    </div>
  );
}

export default Register;
