import express from 'express';
import {
    createDonation,
    getDonationsByRecipient,
    getDonationsByDonor,
    getAllDonations,
    getDonationLeaderboard,
    getDonationById,
    getDonationsForEvent
} from '../controllers/donationController.js';
import { protect } from '../middleware/auth.js';

const donationRoutes = express.Router();

// All routes require authentication
donationRoutes.use(protect);

donationRoutes.get('/leaderboard', getAllDonations);
donationRoutes.get('/stats/leaderboard', getDonationLeaderboard);
donationRoutes.get('/recipient/:recipientId', getDonationsByRecipient);
donationRoutes.get('/:donationId', getDonationById);
donationRoutes.get('/event/:eventId', getDonationsForEvent);
donationRoutes.post('/', createDonation);
donationRoutes.get('/donor/:donorId', getDonationsByDonor);

export default donationRoutes;
