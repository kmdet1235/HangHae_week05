const express = require('express');
const router = express.Router;

const LikesController = require('../controllers/likes.controller');      
const LikeControls = new LikesController();  

router.get('/posts/like', LikeControls.LikeFindAll)
router.put("/posts/:postId/like", LikeControls.LikeChange);

module.exports = router;


