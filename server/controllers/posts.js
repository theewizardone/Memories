import PostMessage from '../models/postMessage.js';




export const getPosts = async (_req, res) => {
    try {
        const postMessages = await  PostMessage.find();
        console.log(postMessages);
        // 200 is for successful operations
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
        // 404 is for not found messages
    }
};
export const createPost = async (_req, res) => {
    const post = _req.body;
    const newPost = new PostMessage(post);
    try {
        // saving the new post
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};