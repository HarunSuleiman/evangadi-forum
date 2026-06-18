const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  host: "localhost",
  user: "evangadi-forum-admin",
  password: "123456",
  database: "evangadi-forum",
  connectionLimit: 10,
});

// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
module.exports = dbConnection.promise();