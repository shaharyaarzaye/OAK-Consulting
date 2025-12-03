import express from 'express';
import {login, registerUser, registerTemple, registerCreator, updateProfile, refreshTokenHandler, logoutHandler, requestPasswordReset, resetPasswordWithOTP, resendPasswordResetOTP} from '../controllers/authController.js';
const authRoute = express.Router();

// Handle login form submission
authRoute.post('/login', login);

// Registration routes
authRoute.post('/registerUser', registerUser);
authRoute.post('/registerTemple', registerTemple);
authRoute.post('/registerCreator', registerCreator);

// Profile routes
authRoute.post('/updateProfile', updateProfile);

// Token routes
authRoute.post('/refresh', refreshTokenHandler);
authRoute.post('/logout', logoutHandler);

// Password reset routes (with OTP)
authRoute.post('/forgot-password', requestPasswordReset);
authRoute.post('/reset-password', resetPasswordWithOTP);
authRoute.post('/resend-reset-otp', resendPasswordResetOTP);

export default authRoute;
