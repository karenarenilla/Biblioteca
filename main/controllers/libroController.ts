import Controller from "contrib/interfaces/controllerInterface";
import { Request, Response } from "express";
import { LibroModel } from "models/mongo/libroModel";

export default class implements Controller {
  public async find(req: Request, res: Response): Promise<Response> {
    const libro = await LibroModel.findById(req.params);
    return await res.json(libro);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const libro = new LibroModel(req.body);
    await libro.save();
    return await res.json("Registro exitoso");
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const libro = {
      categoria: req.body.document,
      name: req.body.name,
    };
    await LibroModel.findByIdAndUpdate(id, {$set: libro}, {new: true});
    return res.json("update");
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    await LibroModel.findByIdAndRemove(id);
    return res.json("delete");
  }
}
