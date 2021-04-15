const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// bring in User.js
const User = require("../models/User");

// gets logged in user
router.get("/", (req, res) => {
  res.json({ message: "hello get logged in user" });
});

// sends the data to get authenticated and return a token.
router.post(
  "/",
  // username must be an email
  body("email", " A valid email is required.").isEmail(),
  // password must be at least 6 chars long
  body("password", "Password of 6 or more characters is required.").exists(),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructor email, password from the request.body
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        // bad request with message
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        // bad request with message
        return res.status(400).json({ message: "Invalid Password" });
      }
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
    // res.json({
    //   message:
    //     "hello post user, sends the data to get authenticated and return a token.",
    // });
  }
);

module.exports = router;
