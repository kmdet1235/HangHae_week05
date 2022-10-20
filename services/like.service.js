const LikeRepository = require('../respositories/likes.repository');

class LikesService {
    likesrepository = new LikeRepository();

    LikeFindAll = async(userId) =>{                 //내가 좋아요를 누른 게시글 찾기
        const likefindall = await this.likesrepository.LikeFindAll(userId)
        try{
            if (!likefindall) {
                throw new BadRequestException(`게시글의 좋아요를 찾을 수 없습니다.`);
            }
            likefindall.sort((a,b)=>{
            return b.createdAt - a.createdAt;
            });
            return likefindall
        } catch{
            throw new BadRequestException(`error`);
        }
    };

    LikeFindOne= async (userId,postId) => {              //내가 하트를 누를때의 색깔개념처럼 내가 이미 좋아요를 눌렀는지 안눌렀는지 판단할 때
        try{
            const isExist = await this.likesrepository.LikeFindOne(userId,postId);
            return isExist
        }catch{
        throw new BadRequestException(`에러`);
        } 
    };

    LikePush = async(userId,postId)=>{
        try{
            const isExist = this.LikeFindOne(userId,postId);
            if(!isExist){
                await this.likesrepository.LikeCreate(userId,postId);
            }
            else{
                await this.likesrepository.LikeDelete(userId,postId);
            }
        }catch{
            throw new BadRequestException(`에러`);
        }
    }
}
    // LikeCreate = async (userId,postId)=>{
        
    //     const likecreate = await this.likesrepository.LikeFindOne(userId,postId)
    //     if (!userId || !postId)
    //         throw new BadRequestException(`인증해주세요`);
    //     if(!likecreate){
    //     await this.likesrepository.LikeCreate(userId);
    //     await this.likesrepository.LikeUpPost(postId)
    //     return {result : true, message:"좋아요 완료"}
    //     }
    // };
    
    // LikeDelete = async (postId,userId) => {
    //     const likefindone = await this.likesrepository.LikeFindOne(userId,postId);
    //     if (likefindone)
    //     await this.likesrepository.Likedelete(postId,userId);
    //     await this.likesrepository.LikeDownPost(postId)
    //     return{ result : true, message : "좋아요 취소"}
    //     };
    // };

    module.exports = LikesService;