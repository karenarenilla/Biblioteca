import Middleware from "contrib/interfaces/middlewareInterface";
import { Request, Response } from "express";
import Joi, { Schema } from "joi";

export default class implements Middleware {
  private schema: Schema;

  constructor() {
    this.schema = Joi.object({
      dates: Joi.object().required(),
      periodo: Joi.string().strict().required(),
      profesion: Joi.string().strict().required(),
    });
  }

  public async validate(req: Request, res: Response, next: CallableFunction): Promise<any> {
    try {
      await this.schema.validate(req.body);

    } catch (error) {
      return await res.send(`${error}`);
    }

    next();
  }
}
