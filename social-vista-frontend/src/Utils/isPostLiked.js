export const isPostLiked = (reqUserId, post) => {
    if (post?.liked) {
        for (let user of post?.liked) {
            if (reqUserId === user.id) {
                return true;
            }
        }
    }
    return false;
}

export const numberOfLikes = (post) => {
    return(post?.liked?.length)
}
