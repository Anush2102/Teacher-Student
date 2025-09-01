const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // change if you have another MySQL user
  password: "Anu&hka@21", // put your MySQL root password
  database: "projectdb"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

module.exports = db;
