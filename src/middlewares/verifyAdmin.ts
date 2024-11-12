import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const secretKey =  'defaultSecretKey';
    const token:string  = req.headers["authorization"] as string;
    console.log(token)
    if (!token) {
      res.status(401).json({
        err: "Token must be provieded",
      });
      return;
    }
    console.log(token)
    const payload = jwt.verify(token, secretKey);
    (req as any).user = payload;
    if (!(payload as any).isAdmin) {
      res.status(403).json({
        err: "Sorry, your not yet there, a few more years maybe",
      });
    }
    next();
  } catch (err) {
    res.status(401).json(err as JsonWebTokenError);
  }
};