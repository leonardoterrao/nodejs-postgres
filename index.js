const express = require("express");
const conn = require("./db/conn");
const User = require("./models/User");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

app.post("/users/create", async (req, res) => {
  const { name, occupation, newsletter } = req.body;
  
  await User.create({name, occupation, newsletter})

  res.status(201).json({
    status: 'success'
  })
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log("error to connect to the database: ", err);
  });
