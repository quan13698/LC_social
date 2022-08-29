import express from 'express';
import homeService from './home/home.router';
import authenticationService from './authentication/authentication.router';
import userService from '../services/user/user.router';
import profileService from '../services/profile/profile.router';
import postServiece from '../services/post/post.router'
const router = express.Router();

//home
router.use('/', homeService);
router.use('/auth', authenticationService);
router.use('/user', userService);
router.use('/profile', profileService)
router.use('post', postServiece)
export default router