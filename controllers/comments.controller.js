const CommentsServeice = require("../services/comments.service");

// Comments의 컨트롤러 클래스
class CommentsController {
  commentsServeice = new CommentsServeice(); // Comment 서비스 클래스를 컨트롤러 클래스의 멤버 변수로 할당

  getComment = async (req, res) => {
    // 서비스 계층에 구현된 findAllComment 로직을 실행
    const { postId } = req.params;
    const comments = await this.commentsServeice.findAllComment(postId);

    res.status(200).send({ data: comments });
  };

  createComment = async (req, res) => {
    const { postId } = req.params;
    const { comment } = req.body;
    const { ID } = res.locals.user;

    // 서비스 계층에 구현된 createComment 로직을 실행
    const createCommentData = await this.commentsServeice.createComment(
      postId,
      ID,
      comment
    );

    res.status(200).send({ data: createCommentData });
  };
  updateComment = async (req, res) => {
    const { commentId } = req.params;
    const { comment } = req.body;
    const { ID } = res.locals.user;

    const updateComment = await this.commentsServeice.updateComment(
      commentId,
      comment,
      ID
    );
    res.status(200).json({ message: "댓글이 수정되었습니다." });
  };
  deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const { ID } = res.locals.user;
    const deleteComment = await this.commentsServeice.deleteComment(
      commentId,
      ID
    );
    res.status(200).json({ message: "댓글을 삭제했습니다" });
  };
}

module.exports = CommentsController;
