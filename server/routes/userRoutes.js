// ES6 Module Syntax
import express from 'express';
import { registerUser, loginUser, insertDemographics, editDemographics } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/demographics', insertDemographics);
router.post('/editdemographics', editDemographics);

export default router;
