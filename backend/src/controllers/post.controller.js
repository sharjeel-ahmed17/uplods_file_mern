const Post = require('../models/post.model');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPost = async (req, res) => {
    const { title, content } = req.body;
    const image = req.file ? req.file.path : null;

    try {
        const newPost = new Post({ title, content, image });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getPosts, createPost };
