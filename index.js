const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const port = process.env.port || 3002;

const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");

app.use(express.urlencoded({ extended: false }));

app.use("/users", authRouter);
app.use("/", userRouter);

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, console.log(`Server connected at port ${port}`));
