import { Request, Response } from "express";

export default interface Middleware {
  validate(req: Request, res: Response, next: CallableFunction): Promise<any>;
}
