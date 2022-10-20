const PostRepository = require("../repositories/posts.repository");
const {
  BadRequestException,
  NotFoundException,
} = require("../exception/custonException");

class PostServices {
  postrepository = new PostRepository();

  PostFindAll = async () => {
    const postfindall = await this.postrepository.PostFindAll();
    try {
      postfindall.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
      return postfindall;
    } catch {
      throw new BadRequestException(`error`);
    }
  };
  PostFindOne = async (postId) => {
    const postfindone = await this.postrepository.PostFindOne(postId);
    try {
      return {
        postId: postfindone.postId,
        ID: postfindone.ID,
        title: postfindone.title,
        content: postfindone.content,
        createdAt: postfindone.createdAt,
        updatedAt: postfindone.updatedAt,
      };
    } catch {
      throw new BadRequestException(`에러`);
    }
  };

  PostCreate = async (ID, title, content) => {
    if (title === undefined || content == undefined) {
      throw new BadRequestException(`제목이나 내용을 기입해주세요.`);
    }
    await this.postrepository.PostCreate(ID, title, content);
    return { result: true, message: "게시글이 생성되었습니다." };
  };

  PostUpdate = async (postId, ID, title, content) => {
    const postfindone = await this.postrepository.PostFindOne(postId);
    if (title === undefined || content === undefined) {
      throw new BadRequestException(`제목이나 내용을 기입해주세요.`);
    }
    if (!postfindone) {
      throw new NotFoundException(`게시글 찾을 수 없다.`);
    } else {
      await this.postrepository.PostUpdate(postId, ID, title, content);
      return { result: true, message: "게시글 수정 했습니다." };
    }
  };

  PostDelete = async (postId, ID) => {
    const postfindone = await this.postrepository.PostFindOne(postId);
    if (!postfindone) {
      throw new NotFoundException("게시글을 찾을 수 없습니다.");
    } else {
      await this.postrepository.PostDelete(postId, ID);
      return { result: true, message: "게시글이 삭제되었습니다." };
    }
  };
}

module.exports = PostServices;
