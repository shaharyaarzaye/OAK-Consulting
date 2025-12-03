import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import {
    getAllReels,
    getReelsByUser,
    createReel,
    likeReel,
    addReelComment,
    getReelComments,
    incrementViews,
    deleteReel
} from '../controllers/reelController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reelRoutes = express.Router();

// Configure multer for video uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../uploads/reels');
        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, `reel-${uniqueSuffix}${ext}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100 * 1024 * 1024 // 100MB max file size
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only MP4, MOV, AVI, and WebM are allowed.'), false);
        }
    }
});

// Upload video endpoint
reelRoutes.post('/upload', upload.single('video'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No video file uploaded' });
        }

        // Build the video URL
        const videoUrl = `/uploads/reels/${req.file.filename}`;
        
        console.log(`📹 Video uploaded: ${req.file.filename}`);
        res.json({
            message: 'Video uploaded successfully',
            videoUrl: videoUrl,
            filename: req.file.filename,
            size: req.file.size
        });
    } catch (error) {
        console.error('❌ Error uploading video:', error);
        res.status(500).json({ message: 'Error uploading video', error: error.message });
    }
});

// Get all reels
reelRoutes.get('/', getAllReels);

// Get reels by user
reelRoutes.get('/user/:userId', getReelsByUser);

// Create a new reel (after video is uploaded)
reelRoutes.post('/', createReel);

// Like/unlike a reel
reelRoutes.post('/:reelId/like', likeReel);

// Increment view count
reelRoutes.post('/:reelId/view', incrementViews);

// Get comments for a reel
reelRoutes.get('/:reelId/comments', getReelComments);

// Add comment to a reel
reelRoutes.post('/:reelId/comments', addReelComment);

// Delete a reel
reelRoutes.delete('/:reelId', deleteReel);

export default reelRoutes;