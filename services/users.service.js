const UsersRepository = require("../repositories/users.repository");
const jwt = require("jsonwebtoken");

class UserService {
  usersRepository = new UsersRepository();

  findUser = async (ID) => {
    const infoUser = await this.usersRepository.findUser(ID);
    return infoUser;
  };

  signupUser = async (ID, PW) => {
    const signupUserData = await this.usersRepository.signupUser(ID, PW);
    return {
      ID: signupUserData.ID,
      PW: signupUserData.PW,
    };
  };

  loginUser = async (ID, PW) => {
    const loginUserData = await this.usersRepository.loginUser(ID, PW);
    if (PW !== loginUserData.PW) {
      return { message: "비밀번호를 다시 확인해주세요" };
    }
    // const token = jwt.sign({ ID: loginUserData.ID }, "secret-key");
    return {
      ID: loginUserData.ID,
      PW: loginUserData.PW,
      // token,
    };
  };
}
module.exports = UserService;
