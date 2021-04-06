const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const jwt_validator = require("../validators/user-jwt-validate");
const Joi = require("joi");
const params_validator = require("../validators/params-validator");

const User = require("../models/user");

router.post(
  "/register",
  params_validator.validateParams({
    email: Joi.string()
      .pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      .required(),
    password: Joi.string()
      .pattern(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&(=)<>.,/])[A-Za-z\d@$!%*#?&(=)<>.,/]{6,}$/
      )
      .max(20)
      .required(),
    name: Joi.string()
      .pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)
      .max(20)
      .required(),
  }),
  (req, res, next) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    console.log(newUser);

    User.getUserByEmail(newUser.email, (err, user) => {
      if (err) {
        return res.json({ success: false, msg: "Something went wrong." });
      }
      if (user) {
        return res.json({ success: false, msg: "Email Taken" });
      }

      User.addUser(newUser, (err) => {
        if (err) {
          return res.json({
            success: false,
            msg: "Something went wrong.",
          });
        }
        return res.json({
          success: true,
          msg: "Registration Was Successful.",
        });
      });
    });
  }
);

router.post("/authenticate", (req, res, next) => {
  const username = req.body.email;
  const password = req.body.password;
  console.log("/authenticate");
  if (!username || !password) {
    return res.json({ success: false, msg: "Fill in all the fields." });
  }

  console.log(username, password);

  User.getUserByEmail(username, (err, emailUser) => {
    if (err) {
      return res.json({ success: false, msg: "Something went wrong." });
    }
    if (!emailUser) {
      return res.json({ success: false, msg: "Invalid Credentials." });
    }

    User.comparePassword(password, emailUser.password, (err, isMatch) => {
      if (err) {
        return res.json({ success: false, msg: "Something went wrong." });
      }
      if (!isMatch) {
        return res.json({ success: false, msg: "Invalid Credentials." });
      }

      const token = jwt.sign({ data: emailUser }, config.secret, {});
      res.json({
        success: true,
        msg: "Logged in Successfully",
        token: "JWT " + token,
        user: {
          id: emailUser._id,
          email: emailUser.email,
          name: emailUser.name,
        },
      });
    });
  });
});

router.get(
  "/profile",
  passport.authenticate("user", { session: false }),
  (req, res, next) => {
    res.json({ success: true, user: req.user });
  }
);

router.post("/check_current_password", (req, res, next) => {
  let user = jwt_validator.validateUserJWTToken(req.body.token);
  if (!user) return res.json({ success: false, msg: "Invalid Token." });

  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };

  if (!newUser.username || !newUser.password)
    return res.json({ success: false, msg: "Fill in all the fields." });

  User.getUserByUsername(newUser.username, (err, user) => {
    if (err) {
      return res.json({ success: false, msg: "Something went wrong." });
    }
    if (!user) {
      return res.json({ success: false, msg: "Invalid Username." });
    }
    User.comparePassword(newUser.password, user.password, (err, isMatch) => {
      if (err) {
        return res.json({ success: false, msg: "Something went wrong." });
      }
      if (!isMatch) {
        return res.json({ success: false, msg: "Invalid Password." });
      }
      res.json({ success: true, msg: "Enter Your New Password" });
    });
  });
});

router.post("/update_password", (req, res, next) => {
  let user = jwt_validator.validateUserJWTToken(req.body.token);
  if (!user) return res.json({ success: false, msg: "Invalid Token." });

  const newUser = {
    username: req.body.username,
    currentPassword: req.body.currentPassword,
    newPassword: req.body.newPassword,
    newConfirmPassword: req.body.newConfirmPassword,
  };

  if (newUser.newPassword != newUser.newConfirmPassword) {
    return res.json({ success: false, msg: "Both Fields Do Not Match." });
  }

  if (newUser.currentPassword == newUser.newPassword) {
    return res.json({
      success: false,
      msg: "Current Password Matches With The New Password.",
    });
  }

  User.getUserByUsername(newUser.username, (err, user) => {
    if (err) {
      return res.json({ success: false, msg: "Something went wrong." });
    }
    if (!user) {
      return res.json({ success: false, msg: "User Not Found." });
    }
    User.comparePassword(
      newUser.currentPassword,
      user.password,
      (err, isMatch) => {
        if (err) {
          return res.json({ success: false, msg: "Something went wrong." });
        }
        if (!isMatch) {
          return res.json({ success: false, msg: "Incorrect Password." });
        }
        User.updatePassword(newUser, (err) => {
          if (err) {
            return res.json({ success: false, msg: "Something went wrong." });
          }
          return res.json({ success: true, msg: "Password Updated." });
        });
      }
    );
  });
});

module.exports = router;
