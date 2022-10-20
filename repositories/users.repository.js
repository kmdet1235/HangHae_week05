const { Users } = require("../models");

class UsersRepository {
  findUser = async (ID) => {
    const users = await Users.findOne({ where: { ID } });
    console.log(users);
    return users;
  };

  signupUser = async (ID, PW) => {
    const signupUserData = await Users.create({ ID, PW });

    return signupUserData;
  };

  loginUser = async (ID) => {
    const loginUserData = await Users.findOne({ where: { ID } });

    return loginUserData;
  };
}

module.exports = UsersRepository;
