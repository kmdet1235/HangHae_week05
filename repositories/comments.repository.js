const { Comments } = require("../models");

class CommentRepository {
  findAllComment = async (postId) => {
    // ORM인 Sequelize에서 Comments 모델의 findAll 메소들르 사용해 데이터를 호출
    const comments = await Comments.findAll(
      { where: { postId } },
      { order: [["createdAt", "DESC"]] }
    );

    return comments;
  };

  findOneComment = async (commentId) => {
    const comments = await Comments.findByPk(commentId);
    return comments;
  };

  createComment = async (postId, ID, comment) => {
    //ORM인 Sequelize에서 Comments 모델의 create 메소들르 사용해 데이터를 호출
    const createCommentData = await Comments.create({ postId, ID, comment });

    return createCommentData;
  };

  updateComment = async (commentId, comment, ID) => {
    const updateCommentData = await Comments.update(
      { comment: comment },
      { where: { commentId, ID } }
    );
    return updateCommentData;
  };

  deleteComment = async (commentId, ID) => {
    const deleteCommentData = await Comments.destroy({
      where: { commentId, ID },
    });
    return deleteCommentData;
  };
}

module.exports = CommentRepository;
