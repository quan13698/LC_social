import argon2 from 'argon2';
import User from './user.model';
export const getUserById = async (req: Request | any, res: Response | any) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(400).json({
                sucsses: false,
                data: `Can not find user with _id: ${userId}`,
            });
        }
        const returnUser = {
            id: user._id,
            user_name: user.user_name,
        };
        return res.status(200).json({
            sucsses: true,
            data: returnUser,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllUser = async (req: Request, res: Response | any) => {
    try {
        const users = await User.find();
        res.status(200).json({
            succese: true,
            data: users,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (req: Request | any, res: Response | any) => {
    try {
        const userId = req.params.id;
        const { user_name, password } = req.body;
        const hashPassword = await argon2.hash(password);
        const user = await User.findOneAndUpdate({ _id: userId }, { user_name, password: hashPassword });
        if (user) {
            const newUserInfo = {
                user_name,
                password: hashPassword,
            };
            res.status(200).json({
                success: true,
                data: newUserInfo,
            });
        }
        res.status(400).json({
            success: false,
        });
    } catch (error) {
        console.log(error);
    }
};

export const removeUser = async (req: Request | any, res: Response | any) => {
    try {
        const userId = req.params.id;
        const user = await User.findOneAndDelete({_id: userId});
        if(!user) {
            return res.status(400).json({
                success: false,
                message: `Can not find user with id: ${userId}`
            })
        }
        res.status(200).json({
            success: true,
            message: "User has been removed"
        })
    } catch (error) {
        
    }
}
