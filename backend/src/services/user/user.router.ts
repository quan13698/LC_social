import express from 'express';
import { getUserById,getAllUser, updateUser, removeUser } from './user.controller';
import { checkUser } from '../middleware/authentication.middleware';
const router = express.Router();

// get all user
router.get('/all', checkUser, getAllUser);
//get user by ID
router.get('/:id',checkUser, getUserById);
//update user
router.patch("/update/:id", checkUser, updateUser);
//delete User
router.delete("/remove/:id", checkUser, removeUser);

export default router;