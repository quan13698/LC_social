import { NextFunction, Request, Response } from 'express';
export const checkUser = (req: Request | any, res: Response, next: NextFunction) => {
    if (!req.session.user_name && !req.session.password) {
        return res.send('Login first');
    }
    next()
};
