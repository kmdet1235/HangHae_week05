const CommentRepository = require("../repositories/comments.repository");

class CommentService {
  commentRepository = new CommentRepository();

  findAllComment = async (postId) => {
    // Repository에서 데이터를 요청
    const allComment = await this.commentRepository.findAllComment(postId);

    return allComment;
  };

  createComment = async (postId, ID, comment) => {
    // Repository에 데이터요청
    const createCommentData = await this.commentRepository.createComment(
      postId,
      ID,
      comment
    );

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공함
    return {
      //
      ID: createCommentData.ID,
      comment: createCommentData.comment,
      createdAt: createCommentData.createdAt,
      updatedAt: createCommentData.updatedAt,
    };
  };

  updateComment = async (commentId, comment, ID) => {
    const findOneComment = await this.commentRepository.findOneComment(
      commentId
    );
    if (findOneComment.ID == ID) {
      const updateCommentData = await this.commentRepository.updateComment(
        commentId,
        comment,
        ID
      );
    }
  };

  deleteComment = async (commentId, ID) => {
    const findOneComment = await this.commentRepository.findOneComment(
      commentId
    );
    if (findOneComment.ID == ID) {
      const deleteCommentData = await this.commentRepository.deleteComment(
        commentId,
        ID
      );
    }
  };
}
module.exports = CommentService;
