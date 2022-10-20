const {Posts,Likes} =require('../models');
const {NotFoundException,BadRequestException,ForbiddenException}=require('../exception/custonException')
class LikeRepository{
  
    LikeFindAll = async (ID) => {
      // try{
        return await Likes.findAll({where :{ID}});
      // }catch{
      //   throw new NotFoundException(`테이블에서 값을 불러오지 못합니다.`);
      // };
    };

    LikeFindOne = async (ID,postId) => {
      // try{
        return await Likes.findOne({where:{ID,postId}});
      // }catch{
      // throw new ForbiddenException(`테이블에서 값을 불러오지 못합니다.`)
      // };
    };

    LikeCreate = async (ID,postId) => {
      try{
        await Likes.create({ID,postId});
      }catch{
        throw new BadRequestException(`게시글 생성에 실패 했습니다.`)
      };
    };
    
    LikeDelete = async (ID,postId) => {
      try{
        await Likes.destroy({where: {ID,postId}});
      }catch{
        throw new ForbiddenException(`삭제 실패!`);
      };
    };  
};
module.exports = LikeRepository;
