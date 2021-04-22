const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const auth = require("../middleware/auth")

// bring in User.js
const User = require("../models/User");

// gets logged in user
router.get("/", auth,  async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error")
  }
  // res.json({ message: "hello get logged in user" });
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
       res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        // bad request with message
         res.status(400).json({ msg: "Invalid Password" });
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

// delete a user
// router.delete("/:id", auth,  async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndRemove(req.params.id).exec();

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error")
//   }
//   res.json({ message: "user deleted" });
// });

module.exports = router;
