const dbConnection = require("../db/dbConfig");

//importing bcrypt
const bcrypt = require("bcrypt");
// const { statusCodes } = require("http-status-codes");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!username || !firstname || !lastname || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    if (password.length < 8) {
      return res.status(400).json({
        message: "password must be at least 8 characters",
      });
    }
    const [user] = await dbConnection.query(
      "select username,userid from users where username=? or email=?",
      [username, email],
    );
    console.log(user);
    if (user.length > 0) {
      return res.status(400).json({ message: "user alresdy registered " });
    }

    //encript the password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    await dbConnection.query(
      "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)",
      [username, firstname, lastname, email, hashpassword],
    );
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error" });
  }
}
async function login(req, res) {
  // login using email and password 
  

}
async function checkUser(req, res) {
  res.send("check");
}
module.exports = { register, login, checkUser };
