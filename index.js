const express = require("express");
const conn = require("./db/conn");

const userRouter = require("./routes/userRoutes");
const addressRouter = require("./routes/addressRoutes");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/address", addressRouter);

conn
  .sync()
  // .sync({ force: true })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log("error to connect to the database: ", err);
  });
