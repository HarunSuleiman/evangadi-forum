const express = require("express");
const app = express();
// const dbConnection = require('./db/dbConfig');
const port = 3000;

//db connection
const dbConnection = require("./db/dbConfig");



//tocheck on the connection to the database on the browser
app.get("/", (req, res) => {
  res.send("Welcome to the Evangadi Forum API");
});

// user routes middleware
const userRoutes = require("./routes/userRout");
//middleware to parse JSON request bodies it is before the user routes middleware so that the request body can be parsed before it reaches the user routes
app.use(express.json());

app.use("/api/users", userRoutes);

async function start() {
  try {
    // Test the database connection
    const result = await dbConnection.execute("select 'test' ");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log("Database connection successful");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();
