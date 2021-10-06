const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, body, validationResult } = require("express-validator");
//@route POST /api/users
//@descp register a user
//@access  Public
router.post(
  "/",
  [
    check("firstName", "First Name is required").not().isEmpty(),
    check("lastName", "Last Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("tel", "Please enter a valid phone number"),
    check("address", "Please enter a valid address"),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, tel, address, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: "User already exist" });
      }
      user = new User({ firstName, lastName, tel, address, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;
