import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const GetToken = (authorizationHeader: string) =>
  authorizationHeader.replace("Bearer ", "");

const ThrowRequestError = (code: Number) => {
  throw code;
};

export default (req: Request, res: Response, next: NextFunction) => {
  const decodedToken = req.headers.authorization
    ? jwt.verify(GetToken(req.headers.authorization), "texugo")
    : ThrowRequestError(401);
  next();
};
