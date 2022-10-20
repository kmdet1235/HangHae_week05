const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const custonException = require("../exception/custonException");

const PostsController = require("../controllers/posts.controller"); //controller에서 가지고올거야
const postController = new PostsController(); //새롭게 Post를 만들어주지

router.get("/", postController.PostFindAll);
router.get("/:postId", postController.PostFindOne);
router.post("/", authMiddleware, postController.PostCreate);
router.put("/:postId", authMiddleware, postController.PostUpdate);
router.delete("/:postId", authMiddleware, postController.PostDelete);

module.exports = router;
