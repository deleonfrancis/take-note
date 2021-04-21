const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// bring in User.js
const User = require("../models/User");

// bring in config

// Resisters a user
router.post(
  "/",
  // username must have a fist name
  body("firstName", "A first name is required.").not().isEmpty(),
   // username must have a last name
  body("lastName", "A last name is required.").not().isEmpty(),
  // username must be an email
  body("email", " A valid email is required.").isEmail(),
  // password must be at least 6 chars long
  body("password", "Password of 6 or more characters is required.").isLength({
    min: 6,
  }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructor firstName, lastName, email, password from the request.body
    const { firstName, lastName, email, password } = req.body;

    try {
      // check to see if the email already exists
      let user = await User.findOne({ email });
      // if there is already an email like what the user typed in
      if (user) {
        // bad request with message
        res
          .status(400)
          // .json({ message: `A user with the email ${email} already exist.` });
          .json({ msg: "User already exists" });
      }

      // creates a new user
      user = new User({
        firstName,
        lastName,
        email,
        password,
      });

      // expression 'salt' that will hash(encrypt) the password
      const salt = await bcrypt.genSalt(10);

      // hash(encrypt) the password and assign it to the user object
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // res.send("user saved")

      // get jwt token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      // server error
      res.status(500).send("Server Error");
    }
    // res.json({ message: "Hello user post, resisters a user" });
  }
);

module.exports = router;
