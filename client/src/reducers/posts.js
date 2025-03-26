 // eslint-disable-next-line no-unused-expressions, import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;     
    }
   
}
