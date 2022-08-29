import { profile } from 'console';
import User from '../user/user.model';
import Profile from './profile.model';

export const createMyProfile = async (req: Request | any, res: Response | any) => {
    try {
        const userId = req.id;
        const user = await User.findOne({ id: userId });
        // console.log(user);
        const { company, location, status, skills, bio, youtube, linkedIn, tiktok, github } =
            req.body;

        const newProfile = new Profile({
            user: user._id,
            company: company,
            location: location,
            status: status,
            skills: skills,
            bio: bio,
            youtube: youtube,
            linkedIn: linkedIn,
            tiktok: tiktok,
            github: github,
        });
        if (Profile.length < 1) {
            await newProfile.save();
            res.status(200).json({
                success: true,
                data: newProfile,
            });
        } else {
            res.status(400).json({
                success: false,
                data: 'A user is possible to create a profile!',
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateMyProfile = async (req: Request | any, res: Response | any) => {
    try {
        const userId = req.id;
        const { company, location, status, skills, bio, youtube, linkedIn, tiktok, github } =
            req.body;
        const user = await User.findOne({ id: userId });
        // console.log(user);
        const profile = await Profile.findOneAndUpdate(
            { user: user._id },
            {
                company: company,
                location: location,
                status: status,
                skills: skills,
                bio: bio,
                youtube: youtube,
                linkedIn: linkedIn,
                tiktok: tiktok,
                github: github,
            },
        );
        if (profile) {
            res.status(200).json({
                success: true,
            });
        } else {
            res.status(400).json({
                success: false,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const getCurrentProfile = async (req: Request | any, res: Response | any) => {
    try {
        const userId = req.id;
        const user = await User.findOne({ userId });

        const myProfile = await Profile.findOne({ user: user.id });
        if (myProfile) {
            res.status(200).json({
                success: true,
                data: myProfile,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const getProfileById = async (req: Request | any, res: Response | any) => {
    const profileId = req.params.id;
    try {
        const profile = await Profile.findOne({ id: profileId });
        if (!profile) {
            res.status(400).json({
                success: false,
                message: `Profle ID: ${profileId} does not exist`,
            });
        }
        res.status(200).json({
            success: true,
            message: profile,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteProfile = async (req: Request | any, res: Response | any) => {
    try {
        const profileId = req.params.id;
        const profile = await Profile.findOne({ _id: profileId });
        if (profile) {
            res.status(200).json({
                success: true,
                message: `Profile with ID: ${profile} has been removed!`,
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Can not find profile',
            });
        }
    } catch (error) {
        console.log(error);
    }
};

//create Experience
export const createExperience = async (req: Request | any, res: Response | any) => {
    const profileId = req.params.id;
    const { title, company, position, from, to, current } = req.body;
    const profile = await Profile.findOneAndUpdate(
        { _id: profileId },
        { title, company, position, from, to, current },
    );
    
};
