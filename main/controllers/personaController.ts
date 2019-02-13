import Controller from "contrib/interfaces/controllerInterface";
import { Request, Response } from "express";
import { PersonaModel } from "models/mongo/personaModel";

export default class implements Controller {
  public async find(req: Request, res: Response): Promise<Response> {
    return res.send("send!");
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const persona = new PersonaModel(req.body);
    await persona.save();
    return await res.json("Registro exitoso");
  }
  public async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const persona = {
      document: req.body.document,
      name: req.body.name,
      roll: req.body.roll,
    };
    await PersonaModel.findByIdAndUpdate(id, {$set: persona}, {new: true});
    return res.json("update");
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    await PersonaModel.findByIdAndRemove(id);
    return res.json();
  }
}
