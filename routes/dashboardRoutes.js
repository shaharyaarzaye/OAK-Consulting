import express from 'express';
const router = express.Router();
import dashboardController from '../controllers/dashboardController.js';

router.get('/dashboard', dashboardController.getDashboard);

module.exports = router;