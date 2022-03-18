import express from 'express';
import {login,logout,register} from './authentication.controller';
import { checkUser } from '../middleware/authentication.middleware';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get("/logout", checkUser, logout);
export default router