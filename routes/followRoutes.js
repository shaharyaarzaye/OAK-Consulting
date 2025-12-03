import express from 'express';
import {
    followEntity,
    unfollowEntity,
    getFollowers,
    getFollowing,
    isFollowing,
    getMutualFollows,
    getFollowStats
} from '../controllers/followController.js';
import { protect } from '../middleware/auth.js';

const followRoutes = express.Router();

// All routes require authentication
followRoutes.use(protect);

followRoutes.get('/followers/:userId', getFollowers);
followRoutes.get('/following/:userId', getFollowing);
followRoutes.get('/stats/:userId', getFollowStats);
followRoutes.get('/mutuals/:userId', getMutualFollows);
followRoutes.post('/', followEntity);
followRoutes.delete('/:followingId', unfollowEntity);
followRoutes.get('/check/:followingId', isFollowing);

export default followRoutes;
