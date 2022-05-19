const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const albumRouter = require("./route/album");

const app = express();
const port = 4000;

let sequelize = require("./models").sequelize;
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch(console.error);

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
  })
);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/album", albumRouter);

app.listen(port, () => {
  console.log(`server using Port ${port}`);
});
