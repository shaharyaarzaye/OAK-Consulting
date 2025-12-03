import express from 'express';
import Temple from '../models/templeModel.js';

const router = express.Router();

// GET /api/temples - Get all temples with optional search and pagination
// Returns all fields: bankDetails, timings, coordinates, etc.
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 20, search } = req.query;
        
        let query = {};
        if (search) {
            query = {
                $or: [
                    { templeName: { $regex: search, $options: 'i' } },
                    { address: { $regex: search, $options: 'i' } },
                    { city: { $regex: search, $options: 'i' } },
                    { state: { $regex: search, $options: 'i' } }
                ]
            };
        }

        const temples = await Temple.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 })
            .select('+timings +coordinates +savedPosts'); // Explicitly include all fields

        const total = await Temple.countDocuments(query);

        console.log(`📋 Fetched ${temples.length} temples (page ${page})`);

        res.json({
            success: true,
            data: temples,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Error fetching temples:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching temples', 
            error: error.message 
        });
    }
});

// GET /api/temples/search - Search temples
// Returns all fields: bankDetails, timings, coordinates, etc.
router.get('/search', async (req, res) => {
    try {
        const { q } = req.query;
        
        if (!q) {
            return res.json({ success: true, data: [] });
        }

        const temples = await Temple.find({
            $or: [
                { templeName: { $regex: q, $options: 'i' } },
                { address: { $regex: q, $options: 'i' } },
                { city: { $regex: q, $options: 'i' } },
                { state: { $regex: q, $options: 'i' } },
                { description: { $regex: q, $options: 'i' } }
            ]
        })
            .limit(20)
            .select('+timings +coordinates +savedPosts'); // Explicitly include all fields

        console.log(`🔍 Search for "${q}" found ${temples.length} temples`);

        res.json({
            success: true,
            data: temples
        });
    } catch (error) {
        console.error('Error searching temples:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error searching temples', 
            error: error.message 
        });
    }
});

// GET /api/temples/nearby - Get nearby temples (simplified, no geospatial)
// Returns all fields: bankDetails, timings, coordinates, etc.
router.get('/nearby', async (req, res) => {
    try {
        const { lat, lng, radius = 50 } = req.query;
        
        // For now, return all temples since we don't have geospatial index
        // In production, you'd use MongoDB's geospatial queries
        const temples = await Temple.find({})
            .limit(20)
            .select('+timings +coordinates +savedPosts'); // Explicitly include all fields

        console.log(`📍 Nearby temples request (lat: ${lat}, lng: ${lng})`);

        res.json({
            success: true,
            data: temples
        });
    } catch (error) {
        console.error('Error fetching nearby temples:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching nearby temples', 
            error: error.message 
        });
    }
});

// GET /api/temples/:id - Get temple by ID
// Returns all fields: bankDetails, timings, coordinates, savedPosts, etc.
router.get('/:id', async (req, res) => {
    try {
        const temple = await Temple.findById(req.params.id)
            .select('+timings +coordinates +savedPosts'); // Explicitly include all fields

        if (!temple) {
            return res.status(404).json({ 
                success: false, 
                message: 'Temple not found' 
            });
        }

        console.log(`📿 Fetched temple: ${temple.templeName}`);

        res.json({
            success: true,
            data: temple
        });
    } catch (error) {
        console.error('Error fetching temple:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching temple', 
            error: error.message 
        });
    }
});

// POST /api/temples/follow/:id - Follow a temple
router.post('/follow/:id', async (req, res) => {
    try {
        const temple = await Temple.findByIdAndUpdate(
            req.params.id,
            { $inc: { followers: 1 } },
            { new: true }
        );

        if (!temple) {
            return res.status(404).json({ 
                success: false, 
                message: 'Temple not found' 
            });
        }

        console.log(`👥 Temple ${temple.templeName} now has ${temple.followers} followers`);

        res.json({
            success: true,
            message: 'Temple followed successfully',
            data: temple
        });
    } catch (error) {
        console.error('Error following temple:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error following temple', 
            error: error.message 
        });
    }
});

// POST /api/temples/unfollow/:id - Unfollow a temple
router.post('/unfollow/:id', async (req, res) => {
    try {
        const temple = await Temple.findByIdAndUpdate(
            req.params.id,
            { $inc: { followers: -1 } },
            { new: true }
        );

        if (!temple) {
            return res.status(404).json({ 
                success: false, 
                message: 'Temple not found' 
            });
        }

        console.log(`👥 Temple ${temple.templeName} now has ${temple.followers} followers`);

        res.json({
            success: true,
            message: 'Temple unfollowed successfully',
            data: temple
        });
    } catch (error) {
        console.error('Error unfollowing temple:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error unfollowing temple', 
            error: error.message 
        });
    }
});

export default router;
