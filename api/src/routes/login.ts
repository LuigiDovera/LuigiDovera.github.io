import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  console.log(req.headers.authorization);
  res.send("oi");
};
