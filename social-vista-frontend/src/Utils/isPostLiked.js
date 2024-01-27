export const isPostLiked = (reqUserId, post) => {
    for(let user of post.liked){
        if(reqUserId===user.id){
            return true;
        }

    }
    return false;
}
