import { Request, Response } from 'express';
export const indexController = async (req: Request, res: Response) => {
    return res.send('hello world');
};
