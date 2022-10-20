const UsersService = require("../services/users.service");
const jwt = require("jsonwebtoken");

class UsersContoller {
  usersService = new UsersService();

  signupUser = async (req, res) => {
    const { ID, PW, confirm } = req.body;
    if (PW !== confirm) {
      res.status(400).send({ message: "패스워드가 일치하지 않습니다." });
    }

    try {
      const existUser = await this.usersService.findUser(ID);
      if (existUser) {
        res.status(400).send({ message: "중복된 아이디 입니다." });
      }
      const signupUser = await this.usersService.signupUser(ID, PW);
      res.status(201).send({ message: "회원가입에 성공했습니다." });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };

  loginUser = async (req, res) => {
    const { ID, PW } = req.body;

    try {
      const confirmUser = await this.usersService.loginUser(ID, PW);
      if (!confirmUser) {
        res.status(400).json({ message: "아이디가 잘못됐습니다." });
      } else if (PW != confirmUser.PW) {
        console.log(PW, confirmUser.PW);
        res.status(400).json({ message: "비밀번호가 틀렸습니다." });
      } else {
        // 토큰 & 쿠키 추가
        const token = jwt.sign({ ID: confirmUser.ID }, "customized-secret-key");
        res.cookie("token", token);
        res.json({ token });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
}

module.exports = UsersContoller;
