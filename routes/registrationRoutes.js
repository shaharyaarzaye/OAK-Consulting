import express from 'express';
const router = express.Router();
import registrationController from '../controllers/registrationController.js';

router.get('/', (req, res) => {
    res.render('registration');
});

router.post('/user', registrationController.registerUser);
router.post('/temple', registrationController.registerTemple);
router.post('/creator', registrationController.registerCreator);

module.exports = router;