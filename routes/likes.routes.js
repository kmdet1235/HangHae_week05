const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const LikesController = require('../controllers/likes.controller');      
const LikeControls = new LikesController();  

router.get('/posts/like', authMiddleware,LikeControls.LikeFindAll);
router.put("/posts/:postId/like",authMiddleware, LikeControls.LikePush);

module.exports = router;


