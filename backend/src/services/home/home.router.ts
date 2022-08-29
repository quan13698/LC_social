import express from 'express';
import { indexController } from './home.controller';
import { checkUser } from '../middleware/authentication.middleware';
const router = express.Router();

router.get('/home', checkUser, indexController);
export default router;
