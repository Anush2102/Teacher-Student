const express = require("express");
const db = require("../config/db");

const router = express.Router();

// Add Teacher
router.post("/", (req, res) => {
  const { name, subject, email } = req.body;

  db.query(
    "INSERT INTO teachers (name, subject, email) VALUES (?, ?, ?)",
    [name, subject, email],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Teacher added successfully" });
    }
  );
});

// Get All Teachers
router.get("/", (req, res) => {
  db.query("SELECT * FROM teachers", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
