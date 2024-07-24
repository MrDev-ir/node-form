const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.js");
});

router.get("/forms", (req, res) => {
  res.sendFile("forms.html" , {root:"./public"});
});

module.exports = router;