const express = require('express');
const router = express.Router();


//register route
router.post("/register", (req, res) => {
  // Handle user registration logic here
  res.send("User registration endpoint");
});



//login route
router.post("/login", (req, res) => {
  // Handle user login logic here
  res.send("User login endpoint");
});

//check user
router.get("/check", (req, res) => {
  // Handle user check logic here
  res.send("User check endpoint");
});

//module export
module.exports = router;
