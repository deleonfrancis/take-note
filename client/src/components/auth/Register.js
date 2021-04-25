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
        className="col-lg-4 col-md-6 col-sm-12 p-1 bg-light py-4"
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
            Password
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
            Confirm Password
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
       {/* Register Button */}
        <input
          style={{ width: "50%", margin: "auto" }}
          type="submit"
          value="Register"
          className="btn btn-block loginRegisterBtn mb-3"
        />
        {/* Link to login */}
        <div className="">
          <Link className="loginOptionsLink" to="/login">
            Back to login
          </Link>
        </div>
        
      </form>
    </div>
  );
}

export default Register;
