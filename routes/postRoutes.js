import express from 'express';
import {
    getAllPosts,
    getPostsByUser,
    createPost,
    likePost,
    addComment,
    getComments,
    deletePost
} from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';

const postRoutes = express.Router();

// All routes require authentication
postRoutes.use(protect);

postRoutes.get('/', getAllPosts);
postRoutes.get('/user/:userId', getPostsByUser);
postRoutes.get('/:postId/comments', getComments);
postRoutes.post('/', createPost);
postRoutes.post('/:postId/like', likePost);
postRoutes.post('/:postId/comments', addComment);
postRoutes.delete('/:postId', deletePost);

export default postRoutes;