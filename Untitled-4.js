const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let users = JSON.parse(fs.readFileSync("users.json"));

app.post("/send", (req, res) => {
  const { from, to, amount } = req.body;

  users[from] -= Number(amount);
  users[to] += Number(amount);

  fs.writeFileSync("users.json", JSON.stringify(users));
  res.send({ success: true });
});

app.listen(3000, () => console.log("PayGo running"));
