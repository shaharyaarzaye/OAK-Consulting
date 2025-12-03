import express from 'express';
import Temple from '../models/templeModel.js';
import Creator from '../models/creatorModel.js';

const router = express.Router();

// GET /api/search - Unified search for temples and creators
router.get('/', async (req, res) => {
    try {
        const { q, type = 'all', limit = 20 } = req.query;

        if (!q || q.trim() === '') {
            return res.json({
                success: true,
                results: [],
                message: 'Please provide a search query'
            });
        }

        const searchRegex = { $regex: q, $options: 'i' };
        let temples = [];
        let creators = [];

        // Search temples if type is 'all' or 'temples'
        if (type === 'all' || type === 'temples') {
            temples = await Temple.find({
                $or: [
                    { templeName: searchRegex },
                    { address: searchRegex },
                    { city: searchRegex },
                    { state: searchRegex },
                    { description: searchRegex }
                ]
            }).limit(parseInt(limit));
        }

        // Search creators if type is 'all' or 'creators'
        if (type === 'all' || type === 'creators') {
            creators = await Creator.find({
                $or: [
                    { creatorName: searchRegex },
                    { title: searchRegex },
                    { address: searchRegex },
                    { description: searchRegex }
                ]
            }).limit(parseInt(limit));
        }

        // Format results into unified structure
        const results = [];

        // Add temples to results
        temples.forEach(temple => {
            results.push({
                id: temple._id,
                name: temple.templeName || 'Unknown Temple',
                profilePic: temple.templePics?.[0] || '',
                type: 'temple',
                location: temple.city ? `${temple.city}, ${temple.state || ''}`.trim() : (temple.address || ''),
                followers: temple.followers || 0,
                isVerified: temple.isVerified || false,
                rating: temple.rating || 0,
                description: temple.description || ''
            });
        });

        // Add creators to results
        creators.forEach(creator => {
            results.push({
                id: creator._id,
                name: creator.creatorName || 'Unknown Creator',
                profilePic: creator.creatorPics?.[0] || creator.profilePic || '',
                type: 'creator',
                location: creator.address || '',
                followers: creator.followers || 0,
                isVerified: creator.isVerified || false,
                title: creator.title || 'Spiritual Leader',
                description: creator.description || ''
            });
        });

        console.log(`🔍 Search for "${q}" found ${temples.length} temples and ${creators.length} creators`);

        res.json({
            success: true,
            query: q,
            results: results,
            count: {
                total: results.length,
                temples: temples.length,
                creators: creators.length
            }
        });
    } catch (error) {
        console.error('❌ Search error:', error);
        res.status(500).json({
            success: false,
            message: 'Error performing search',
            error: error.message
        });
    }
});

// GET /api/search/suggestions - Get search suggestions
router.get('/suggestions', async (req, res) => {
    try {
        const { q, limit = 10 } = req.query;

        if (!q || q.length < 2) {
            return res.json({
                success: true,
                suggestions: []
            });
        }

        const searchRegex = { $regex: `^${q}`, $options: 'i' };

        // Get temple name suggestions
        const templeSuggestions = await Temple.find(
            { templeName: searchRegex },
            { templeName: 1 }
        ).limit(parseInt(limit) / 2);

        // Get creator name suggestions
        const creatorSuggestions = await Creator.find(
            { creatorName: searchRegex },
            { creatorName: 1 }
        ).limit(parseInt(limit) / 2);

        const suggestions = [
            ...templeSuggestions.map(t => ({ name: t.templeName, type: 'temple' })),
            ...creatorSuggestions.map(c => ({ name: c.creatorName, type: 'creator' }))
        ];

        res.json({
            success: true,
            suggestions: suggestions
        });
    } catch (error) {
        console.error('❌ Suggestions error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching suggestions',
            error: error.message
        });
    }
});

export default router;