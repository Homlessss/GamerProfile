const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./Server/api/module/users/user.router");
const playerRouter = require("./Server/api/module/players/player.router");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const authRouter = require("./Server/api/module/auth/auth.router");

mongoose.connect(config.mongoConnectionString);
const PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static("../client"));
app.use("/api/player", playerRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, function() {
  console.log(`Server listening in ${PORT}`);
});
