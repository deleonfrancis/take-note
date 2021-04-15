const express = require("express");
const router = express.Router();
const { body, check, validationResult } = require("express-validator");

// bring in User.js
const User = require("../models/User");

// Resisters a user
router.post(
  "/",
  // username must be an name
  body("firstName", "A first name is required.").not().isEmpty(),
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

    const { firstName, lastName, email, password } = req.body;
    try {
      // check to see if the email already exists 
      let user = await User.findOne({ email });
      // if there is already an email like what the user typed in 
      if(user){
        res.status(400).json({message: `A user with the email ${email} already exist.`})
      }

      // creates a new user
      user = new User({
        firstName,
        lastName,
        email,
        password
      })

      // const payload = {
      //   user:{
      //     id:user.id
      //   }
      // }

      await user.save()

    } catch (error) {}
    res.json({ message: "Hello user post, resisters a user" });
  }
);

module.exports = router;
