const LikeRepository = require('../repositories/likes.repository');
const {BadRequestException} = require('../exception/custonException')
class LikesService {
    likesrepository = new LikeRepository();

    LikeFindAll = async(ID) =>{                 //내가 좋아요를 누른 게시글 찾기
        const likefindall = await this.likesrepository.LikeFindAll(ID)
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

    LikeFindOne= async (ID,postId) => {              //내가 하트를 누를때의 색깔개념처럼 내가 이미 좋아요를 눌렀는지 안눌렀는지 판단할 때
        // try{
            const isExist = await this.likesrepository.LikeFindOne(ID,postId);
            console.log(isExist)
            return isExist
        // }catch{
        // throw new BadRequestException(`에러`);
        // } 
    };

    LikePush = async(ID,postId)=>{
        try{
            const isExist =await this.LikeFindOne(ID,postId);
            
            if(!isExist){
                await this.likesrepository.LikeCreate(ID,postId);
            }
            else{
                await this.likesrepository.LikeDelete(ID,postId);
            }
        }catch{
            throw new BadRequestException(`에러`);
        }
    }
}

    module.exports = LikesService;