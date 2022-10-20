const LikesService = require('../services/like.service');
const CustonException = require("../exception/custonException");

class LikesController{
    
    likesServices = new LikesService()


LikeFindAll = async (req, res) => {
    try {
      const { ID } = res.locals.user;
      const likefindall = await this.likesServices.LikeFindAll( ID );
      res.status(200).json({ data:likefindall });
    } catch (error) {
      console.log(error)
    }
  };

LikeFindOne= async (req,res) => {
    try{
      const {ID} = res.locals.user;
      const {postId} = req.params;
      const isExist = await this.likesServices.LikeFindOne({ID,postId});
      res.status(200).json({data:isExist})
    }catch(error){
      console.log(error)
    } 
};

LikePush =async(req,res)=>{
  try{
    const{ID}=res.locals.user;
    const{postId}=req.params;
    console.log(1);
    const likepush = await this.likesServices.LikePush(ID,postId);
    console.log(2);
    res.status(200).json({data:likepush})
  }catch(err){
    console.log(err)
  }
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