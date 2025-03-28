import mongoose from 'mongoose';
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

export const updatePost = async (_req, res) => {
    const {id: _id} = _req.params;
    const post = _req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
}

export const deletePost = async (_req, res) => {
    const {id} = _req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndRemove(id);
    console.log("Deleted Successfully");
    res.json({message: "Post deleted successfully"});
}

export const likePost = async (_req, res) => {
    const {id} = _req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});
    res.json(updatedPost);
}