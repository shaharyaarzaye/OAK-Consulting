import express from 'express';
import {
  createOrder,
  verifyPayment,
  handleWebhook,
  getPaymentStatus,
  getPaymentHistory
} from '../controllers/paymentController.js';
import { protect } from '../middleware/auth.js';

const paymentRoutes = express.Router();

// All routes require authentication except webhook
paymentRoutes.post('/create-order', protect, createOrder);
// Create a hosted payment link (opens Razorpay hosted page)
paymentRoutes.post('/create-link', protect, async (req, res, next) => {
  // lazy-load controller function to avoid circular import at top-level
  const { createPaymentLink } = await import('../controllers/paymentController.js');
  return createPaymentLink(req, res, next);
});
paymentRoutes.post('/verify-payment', protect, verifyPayment);
paymentRoutes.get('/status/:razorpayOrderId', protect, getPaymentStatus);
paymentRoutes.get('/history', protect, getPaymentHistory);

// Webhook - no auth required (but should verify webhook signature)
paymentRoutes.post('/webhook', handleWebhook);

export default paymentRoutes;
