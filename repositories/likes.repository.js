const {Posts,Likes} =require('../models');

class LikeRepository{
  
    LikeFindAll = async (userId) => {
      try{
        await Likes.findAll({where :{userId}});
      }catch{
        throw new NotFoundException(`테이블에서 값을 불러오지 못합니다.`);
      };
    };

    LikeFindOne = async (userId,postId) => {
      try{
        await Likes.findOne({where:{userId,postId}});
      }catch{
      throw new ForbiddenException(`테이블에서 값을 불러오지 못합니다.`)
      };
    };

    LikeCreate = async (userId,postId) => {
      try{
        await Likes.create({userId,postId});
      }catch{
        throw new BadRequestException(`게시글 생성에 실패 했습니다.`)
      };
    };
    
    LikeDelete = async (userId,postId) => {
      try{
        await Likes.destroy({where: {userId,postId}});
      }catch{
        throw new ForbiddenException(`삭제 실패!`);
      };
    };  
};
module.exports = LikeRepository;
