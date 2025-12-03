import express from 'express';
import {
    getConversations,
    getMessages,
    sendMessage,
    markAsRead,
    getOrCreateConversation,
    deleteConversation,
    getUnreadCount
} from '../controllers/messageController.js';

const messageRoutes = express.Router();

// Get all conversations for a user
messageRoutes.get('/conversations/:userId', getConversations);

// Get messages for a specific conversation
messageRoutes.get('/messages/:conversationId', getMessages);

// Send a new message
messageRoutes.post('/send', sendMessage);

// Mark messages as read
messageRoutes.post('/read', markAsRead);

// Get or create a conversation between two users
messageRoutes.post('/conversation', getOrCreateConversation);

// Delete a conversation
messageRoutes.delete('/conversation/:conversationId', deleteConversation);

// Get total unread count for a user
messageRoutes.get('/unread/:userId', getUnreadCount);

export default messageRoutes;