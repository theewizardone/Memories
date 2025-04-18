import { FETCH_ALL, CREATE, UPDATE, DELETE,} from '../constants/actionTypes';
 // eslint-disable-next-line no-unused-expressions, import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {

        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
        case 'LIKE':  
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;     
    }
   
}
