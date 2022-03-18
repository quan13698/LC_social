import { Request, Response } from 'express';
import User from '../user/user.model';
import argon2, { hash } from 'argon2';
import jwt from 'jsonwebtoken';
import { EnvAppConfig } from '../../common/config';
export const login = async (req: Request | any, res: Response) => {
    const { user_name, password } = req.body;
    if (!user_name || !password) {
        res.status(400).json({
            success: false,
            message: 'Missing user_name or password, please try again',
        });
    }
    try {
        const user = await User.findOne({ user_name });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Login Fail!',
            });
        }
        const validPassword = await argon2.verify(user.password, password);
        if (!validPassword) {
            return res.status(400).json({
                success: false,
                message: 'Wrong password!',
            });
        }
        req.session.user_name = user_name;
        req.session.password = password;
        res.status(200).json({
            success: true,
            message: 'Login successfully!',
        });
    } catch (error) {
        console.log(error);
    }
};
export const register = async (req: Request, res: Response) => {
    const { email, user_name, password } = req.body;
    if (!email || !user_name || !password) {
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
            user_name,
            password: hashPassword,
            email,
        };
        const newUser = new User(userInformation);
        await newUser.save();
        const accesstoken = jwt.sign(
            { userId: newUser._id },
            `${EnvAppConfig.ACCESS_TOKEN_SECRET}`,
        );
        res.status(200).json({
            success: true,
            data: newUser,
            accesstoken,
        });
    } catch (error) {
        console.log(error);
    }
};

export const logout = (req: Request | any, res: Response) => {
    req.session.destroy();
    res.status(200).json({
        success: true,
        message: 'Logged Out',
    });
};
