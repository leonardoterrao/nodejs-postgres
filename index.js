const express = require("express");
const conn = require("./db/conn");

const userRouter = require('./routes/userRoutes');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use('/api/v1/users', userRouter);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log("error to connect to the database: ", err);
  });
