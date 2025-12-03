import express from 'express';
import {
    createEvent,
    getAllEvents,
    getEventById,
    getEventsByOrganizer,
    attendEvent,
    cancelEventAttendance,
    updateEvent,
    deleteEvent,
    getEventAttendees
} from '../controllers/eventController.js';
import { protect } from '../middleware/auth.js';

const eventRoutes = express.Router();

// All routes require authentication
eventRoutes.use(protect);

eventRoutes.get('/', getAllEvents);
eventRoutes.get('/:eventId', getEventById);
eventRoutes.get('/organizer/:organizerId', getEventsByOrganizer);
eventRoutes.get('/:eventId/attendees', getEventAttendees); 
eventRoutes.post('/', createEvent);
eventRoutes.post('/:eventId/attend', attendEvent);
eventRoutes.post('/:eventId/cancel-attendance', cancelEventAttendance);
eventRoutes.put('/:eventId', updateEvent);
eventRoutes.delete('/:eventId', deleteEvent);

export default eventRoutes;
