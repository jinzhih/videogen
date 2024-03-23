import express from "express";
import mysql from "mysql2";

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "env",
});

app.get("/", (req, res) => {
  res.json("hello this is the video gen root route");
});

app.get("/chapters", (req, res) => {
  const q = "SELECT * FROM chapter";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
