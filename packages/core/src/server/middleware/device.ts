import { NextFunction, Request, Response } from 'express';

const mobile =
  /.*(blackberry|android|iphone|ipod|symb|googlebot-mobile|Playstation.Vita|kindle|symbian|windows.phone|BB10|Mobile.*Firefox|Nokia[0-9][0-9]|Nokia[A-Z][0-9]|LG-[A-Z][0-9]|SAMSUNG-GT|SPICE|Opera.Mini).*/i;

export default (req: Request, res: Response, next: NextFunction) => {
  const userAgent = req.header('User-Agent');

  req.device = {
    type: userAgent && mobile.test(userAgent) ? 'mobile' : 'desktop',
  };

  next();
};
