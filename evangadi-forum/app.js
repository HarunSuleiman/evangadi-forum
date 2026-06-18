const express = require("express");
const app = express();
// const dbConnection = require('./db/dbConfig');
const port = 3000;
//tocheck on the connection to the database on the browser
app.get("/", (req, res) => {
  res.send("Welcome to the Evangadi Forum API");
});


// user routes middleware
const userRoutes = require("./routes/userRout");
app.use("/api/users", userRoutes);


app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
