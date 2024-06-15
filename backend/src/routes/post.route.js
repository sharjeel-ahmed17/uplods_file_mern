const express = require('express');
const multer = require('multer');
const { getPosts, createPost } = require('../controllers/post.controller');
const router = express.Router();

// Image upload configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

router.get('/', getPosts);
router.post('/', upload.single('image'), createPost);

module.exports = router;
