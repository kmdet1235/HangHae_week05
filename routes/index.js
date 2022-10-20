const express = require("express");
const router = express.Router();


const UserRouter = require("./users.routes");
const PostRouter = require("./posts.routes");
const CommentRouter = require("./comments.routes");
const LikeRouter = require("./likes.routes")

router.use("/", [UserRouter]);
router.use("/posts", [PostRouter]);
router.use("/comments", [CommentRouter]);
router.use("/likes",[LikeRouter]);
module.exports = router;
