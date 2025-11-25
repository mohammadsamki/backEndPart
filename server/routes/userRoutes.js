import express from 'express';
import { registerUser,loginUser,getAllUsers,searchUsers } from '../controllers/userController.js';
const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/getAllUsers',getAllUsers)
router.post('/searchUsers',searchUsers)

export default router;