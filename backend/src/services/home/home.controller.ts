import { Request, Response } from 'express';
export const indexController = async (req: Request | any, res: Response) => {    
    return res.send('hello world');
};
