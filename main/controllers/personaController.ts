import Controller from "contrib/interfaces/controllerInterface";
import { Request, Response } from "express";
import Log from "loglevel";
import { PersonaModel } from "models/mongo/personaModel";

export default class implements Controller {
  public async find(req: Request, res: Response): Promise<Response> {
    const personas = await PersonaModel.find();
    return await res.send(personas);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const persona = new PersonaModel(req.body);
    await persona.save();
    return await res.json("Registro exitoso");
  }
  public async update(req: Request, res: Response): Promise<Response> {
    const document = req.body.document;
    const persona = {
      document: req.body.document,
      name: req.body.name,
      roll: req.body.roll,
    };
    Log.info(persona);
    await PersonaModel.findOneAndUpdate(document, {$set: persona}, {new: true});
    return res.json("update");
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    await PersonaModel.findOneAndDelete(req.body);
    return res.json("delete");
  }
}
