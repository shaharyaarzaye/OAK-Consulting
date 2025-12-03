import express from 'express';
import Creator from '../models/creatorModel.js';

const creatorRouter = express.Router();

// Get all creators
creatorRouter.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const creators = await Creator.find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await Creator.countDocuments();

        console.log(`📤 Fetching creators: Found ${creators.length} creators`);

        res.json({
            success: true,
            creators: creators.map(creator => ({
                _id: creator._id,
                creatorName: creator.creatorName,
                email: creator.email,
                phoneNumber: creator.phoneNumber,
                profilePic: creator.creatorPics?.[0] || creator.profilePic || '',
                creatorPics: creator.creatorPics || [],
                address: creator.address || '',
                title: creator.title || 'Spiritual Leader',
                description: creator.description || '',
                followers: creator.followers || 0,
                following: creator.following || 0,
                posts: creator.posts || 0,
                isVerified: creator.isVerified || false,
                createdAt: creator.createdAt
            })),
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('❌ Error fetching creators:', error);
        res.status(500).json({ message: 'Error fetching creators', error: error.message });
    }
});

// Get creator by ID
creatorRouter.get('/:id', async (req, res) => {
    try {
        const creator = await Creator.findById(req.params.id);
        
        if (!creator) {
            return res.status(404).json({ message: 'Creator not found' });
        }

        res.json({
            success: true,
            creator: {
                _id: creator._id,
                creatorName: creator.creatorName,
                email: creator.email,
                phoneNumber: creator.phoneNumber,
                profilePic: creator.creatorPics?.[0] || creator.profilePic || '',
                creatorPics: creator.creatorPics || [],
                address: creator.address || '',
                title: creator.title || 'Spiritual Leader',
                description: creator.description || '',
                followers: creator.followers || 0,
                following: creator.following || 0,
                posts: creator.posts || 0,
                isVerified: creator.isVerified || false,
                createdAt: creator.createdAt
            }
        });
    } catch (error) {
        console.error('❌ Error fetching creator:', error);
        res.status(500).json({ message: 'Error fetching creator', error: error.message });
    }
});

export default creatorRouter;