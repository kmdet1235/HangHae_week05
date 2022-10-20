const { Posts } = require("../models");
const { Users } = require("../models");
const {
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} = require("../exception/custonException");

class PostRepository {
  PostFindAll = async () => {
    try {
      return await Posts.findAll({});
    } catch {
      throw new NotFoundException(`테이블에서 값을 불러오지 못합니다.`);
    }
  };

  PostFindOne = async (postId) => {
    try {
      return await Posts.findOne({ where: { postId } });
    } catch {
      throw new ForbiddenException(`테이블에서 값을 불러오지 못합니다.`);
    }
  };

  PostCreate = async (ID, title, content) => {
    try {
      // console.log({ ID, title, content });
      await Posts.create({ ID, title, content });
    } catch {
      throw new BadRequestException(`게시글 생성에 실패 했습니다.`);
    }
  };

  PostUpdate = async (postId, ID, title, content) => {
    try {
      await Posts.update({ title, content }, { where: { postId, ID } });
    } catch {
      throw new ForbiddenException(`수정 실패!`);
    }
  };

  PostDelete = async (postId, ID) => {
    try {
      console.log(1);
      await Posts.destroy({ where: { postId, ID } });
      console.log(2);
    } catch {
      throw new ForbiddenException(`삭제 실패!`);
    }
  };
}

module.exports = PostRepository;
