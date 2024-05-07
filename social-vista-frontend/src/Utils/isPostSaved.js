export const isPostSaved = (post, item) => {
    // console.log("$$$$$$$---->", post[0]?.id);
    // console.log("$$$$$$$====>", item.id);

    return post.some(items => items.id === item.id);
}
