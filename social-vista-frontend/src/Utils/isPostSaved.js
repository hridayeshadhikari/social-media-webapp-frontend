
export const isPostSaved = (userId, post) => {
    return userId && post && post.id && userId.savePost.includes(post.id);
};