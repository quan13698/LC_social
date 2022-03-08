import { NextFunction, Request, Response } from "express";
export const authMiddleware = (req: Request | any, res: Response, next: NextFunction) => {
    if(req.session.user_name) {
        next()
    }else{
        return res.json({
            success: false,
            message: "Session fail"
        })
    }
};
