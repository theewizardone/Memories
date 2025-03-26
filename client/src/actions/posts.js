import * as api from '../api';

// ACTION CREATORS using Redux Thunk
export const getPosts = () => async (dispatch) => { // ✅ Now correctly returning a function
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.error("Error creating post:", error);
    }
};
