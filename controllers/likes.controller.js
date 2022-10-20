const LikesService = require('../services/like.service');


class LikesController{
    
    likeServices = LikesService()
}

LikeFindAll = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const likefindall = await this.likesService.LikeFindAll({ userId });
      res.status(200).json({ data:likefindall });
    } catch (error) {
      const exception = exceptionHandler(err);
      return res.status(exception.statusCode).json(exception.message);
    }
  };

LikeFindOne= async (req,res,next) => {
    try{
      const {userId} = res.locals.user;
      const {postId} = req.params;
      const isExist = await this.likesService.LikeFindOne({userId,postId});
      res.status(200).json({data:isExist})
    }catch{
      const exception = exceptionHandler(err);
      return res.status(exception.statusCode).json(exception.message);
    } 
};

LikePush =async(req,res,next)=>{
  try{
    const{userId}=res.locals.user;
    const{postId}=req.params;
    const likepush = await this.likesService.LikePush({userId,postId});
    res.status(200).json({data:likepush})
  }catch{
    const exception = exceptionHandler(err);
    return res.status(exception.statusCode).json(exception.message);
  }
}

// LikeCreate = async (req,res,next)=>{
//     try{
//       const {userId} = res.locals.user;
//       const {postId} = res.params;
//       const likecreate = await this.likesrepository.LikeFindOne(userId,postId)
//       res.status(200).json({data:likecreate})
//     }catch{

//     }
// };

// LikeDelete = async (req,res,next) => {
//   try{
//     const {userId} = res.locals.user;
//     const {postId} = res.params;
//     const likefindone = await this.likesrepository.LikeFindOne(userId,postId);
//     res.status(200).json({data:likefindone})
//   }catch{

//   }  
// };

module.exports = LikesController;