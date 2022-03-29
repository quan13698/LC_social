import express from 'express';
import { checkUser } from '../middleware/authentication.middleware';
import { createMyProfile, getCurrentProfile, getProfileById, updateMyProfile, deleteProfile, createExperience } from './profile.controller';
const router = express.Router();

//create profile
router.post('/', checkUser, createMyProfile);
//update my profile
router.patch('/my-profile/update', checkUser, updateMyProfile);
//get my profile
router.get('/my-profile', checkUser, getCurrentProfile);
//
router.get('/:id', checkUser, getProfileById);
//delete Profile
router.delete("remove/:id", checkUser, deleteProfile);

//create Experience
router.post("/experience", checkUser, createExperience);


export default router;
