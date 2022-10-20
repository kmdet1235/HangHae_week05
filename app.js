const express = require("express");
const app = express();
const routes = require("./routes/index");
const PORT = 3000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸습니다.");
});
