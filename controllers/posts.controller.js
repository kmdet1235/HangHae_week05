const PostServices = require("../services/posts.service"); //가져와 service에서 PostServices에 넣어.
const CustonException = require("../exception/custonException");

class PostControllers {
  postServices = new PostServices();

  PostFindAll = async (req, res) => {
    try {
      const postfindall = await this.postServices.PostFindAll();
      res.status(200).json({ data: postfindall });
    } catch (err) {
      const exception = new CustonException(err);
      return res.status(exception.statusCode).json(exception.message);
    }
  };
  PostFindOne = async (req, res) => {
    try {
      const { postId } = req.params;
      const postfindone = await this.postServices.PostFindOne(postId);
      res.status(200).json({ data: postfindone });
    } catch (err) {
      const exception = new CustonException(err);
      return res.status(exception.statusCode).json(exception.message);
    }
  };
  PostCreate = async (req, res) => {
    try {
      const { ID } = res.locals.user;
      const { title, content } = req.body;
      const postcreate = await this.postServices.PostCreate(ID, title, content);
      res.status(200).json({ data: postcreate });
    } catch (err) {
      // const exception = new CustonException(err);
      console.log(err);
      return res.status(exception.statusCode).json(exception.message);
    }
  };

  PostUpdate = async (req, res) => {
    try {
      const { ID } = res.locals.user;
      const { postId } = req.params;
      const { title, content } = req.body;
      const postupdate = await this.postServices.PostUpdate(
        postId,
        ID,
        title,
        content
      );
      res.status(200).json({ data: postupdate });
    } catch (err) {
      const exception = new CustonException(err);
      return res.status(exception.statusCode).json(exception.message);
    }
  };

  PostDelete = async (req, res) => {
    try {
      const { ID } = res.locals.user;
      const { postId } = req.params;
      const postdelete = await this.postServices.PostDelete(postId, ID);
      res.status(200).json({ data: postdelete });
    } catch {
      const exception = new CustonException(err);
      return res.status(exception.statusCode).json(exception.message);
    }
  };
}

module.exports = PostControllers;
