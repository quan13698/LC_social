import express from 'express';
import homeService from './home/home.router';
import authenticationService from './authentication/authentication.router';
const router = express.Router();

//home
router.use('/', homeService);
router.use('/auth', authenticationService)
export default router