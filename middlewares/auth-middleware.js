const jwt = require("jsonwebtoken");
const { Users } = require("../models");

module.exports = (req, res, next) => {
  const { token } = req.cookies;

  // const { authorization } = req.headers;
  // const [authType, authToken] = (authorization || "").split(" ");

  // if (!authToken || authType !== "Bearer") {
  //   res.status(401).send({
  //     errorMessage: "로그인 후 이용가능한 기능입니다",
  //   });
  //   return;
  // }
  if (!token) {
    res.status(400).json({ message: "로그인 후 이용가능한 기능입니다." });
  }
  // try {
  const { ID } = jwt.verify(token, "customized-secret-key");
  res.locals.user = { ID };
  next();
  // Users.findByPk(ID).then((user) => {
  //   console.log(user);
  //   res.locals.user = user;
  //   next();
  // });
  // } catch (err) {
  //   // console.log(err);
  //   res.status(400).json({ message: err.message });
  // }
};
