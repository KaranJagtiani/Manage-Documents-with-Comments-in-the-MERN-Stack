const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const jwt_validator = require("../validators/user-jwt-validate");
const Joi = require("joi");
const params_validator = require("../validators/params-validator");

const User = require("../models/user");
const Document = require("../models/document");

router.post(
  "/",
  params_validator.validateParams({
    name: Joi.string().max(20).min(3).required(),
    content: Joi.string().max(1000).min(3).required(),
  }),
  (req, res, next) => {
    let user = jwt_validator.validateUserJWTToken(req.body.token);
    if (!user) return res.json({ success: false, msg: "Invalid Token." });

    let newDocument = new Document({
      email: user.email,
      name: req.body.name,
      content: req.body.content,
    });

    Document.getDocumentByNameAndEmail(newDocument, (err, doc) => {
      if (err) throw err;
      if (doc) {
        return res.json({
          success: false,
          msg: "Document with this name already exists.",
        });
      }
      Document.addDocument(newDocument, (err) => {
        if (err) throw err;
        return res.json({ success: true, msg: "Document successfully added." });
      });
    });
  }
);

router.get("/", (req, res, next) => {
  console.log(req.query);
  let user = jwt_validator.validateUserJWTToken(req.query.token);
  if (!user) return res.json({ success: false, msg: "Invalid Token." });

  Document.getDocumentsByEmail(user.email, (err, documents) => {
    if (err) throw err;
    console.log(documents);
    return res.json({
      success: true,
      documents: documents,
    });
  });
});

router.patch("/", (req, res, next) => {
  console.log(req.body);
  let user = jwt_validator.validateUserJWTToken(req.body.token);
  if (!user) return res.json({ success: false, msg: "Invalid Token." });

  let obj = {
    email: user.email,
    name: req.body.name,
    comments: req.body.comments,
  };

  // return res.json({ success: false, msg: "Okay." });
  Document.updateComments(obj, (err, updated) => {
    if (err) throw err;
    console.log("UPDATED");
    console.log(updated);
    if (!updated) {
      return res.json({
        success: false,
        msg: "Something went wrong.",
      });
    }
    Document.getDocumentByNameAndEmail(obj, (err, document) => {
      console.log(document);
      if (err) throw err;
      return res.json({
        success: true,
        document: document,
        msg: "Document succesfully updated.",
      });
    });
  });
});

router.delete("/", (req, res, next) => {
  console.log(req.body);
  let user = jwt_validator.validateUserJWTToken(req.body.token);
  if (!user) return res.json({ success: false, msg: "Invalid Token." });

  let obj = {
    email: user.email,
    name: req.body.name,
  };
  console.log(obj);
  // return res.json({ success: false, msg: "Okay." });
  Document.getDocumentByNameAndEmail(obj, (err, document) => {
    if (err) throw err;
    console.log("FOUND");
    console.log(document);
    if (!document) {
      return res.json({
        success: false,
        msg: "No such document.",
      });
    }
    Document.deleteDocument(obj, (err, deleted) => {
      console.log(deleted);
      if (err) throw err;
      return res.json({
        success: true,
        msg: "Document succesfully deleted.",
      });
    });
  });
});

module.exports = router;
