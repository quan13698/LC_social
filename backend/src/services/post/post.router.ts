import express from 'express';
import { checkUser } from '../middleware/authentication.middleware';
const router = express.Router();

router.post('/create-post', checkUser);


export default router