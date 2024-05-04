export const isCommentLiked = (reqUserId, comment) => {
    if (comment?.liked) {
        for (let user of comment?.liked) {
            if (reqUserId === user.id) {
                return true;
            }
        }
    }
    return false;
}

export const numberOfLikes = (comment) => {
    return(comment?.liked?.length)
}
