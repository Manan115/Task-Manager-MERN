import express from 'express';
import { getCurrentUser, registerUser, loginUser, updateProfile, updatePassword } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const userRouter = express.Router();

//Publlic Routes 

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

//Private Routes protect 
userRouter.get('/me',authMiddleware, getCurrentUser);
userRouter.put('/profile',authMiddleware, updateProfile);
userRouter.put('/password',authMiddleware, updatePassword);

export default userRouter;