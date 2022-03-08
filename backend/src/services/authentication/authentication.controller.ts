import { Request, Response } from 'express';
import User from '../../models/user.model';
import argon2, { hash } from 'argon2';
import jwt from 'jsonwebtoken';
import { EnvAppConfig } from '../../common/config';
export const login = (req: Request, res: Response) => {};
export const register = async (req: Request, res: Response) => {
    const { first_name, last_name, email, user_name, password } = req.body;
    if (!first_name || !last_name || !email || !user_name || !password) {
        return res.status(400).json({
            success: false,
            message: 'Missing information, please fill in all information to register!',
        });
    }
    const user = await User.findOne({ user_name, email });
    try {
        if (user) {
            return res.status(400).json({
                success: false,
                message: 'Username or email already used, please try again to register!',
            });
        }
        const hashPassword = await argon2.hash(password);
        const userInformation = {
            first_name,
            last_name,
            user_name,
            password:hashPassword,
            email,
        }
        const newUser = new User(userInformation);
        await newUser.save();
        const accesstoken = jwt.sign({userId: newUser._id}, `${EnvAppConfig.ACCESS_TOKEN_SECRET}`)
        res.status(200).json({
            success: true,
            data: newUser,
            accesstoken
        })
    } catch (error) {
        console.log(error);
    }
};
