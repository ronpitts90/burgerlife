
// Set up MySQL connection.
const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "scorpion1990",
    database: "burgers_db"
  });
}
connection.connect();
// Exporting connection. 
module.exports = connection;



// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3000,
//   user: "root",
//   password: "scorpion1990",
//   database: "burgers_db"
// });
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });


