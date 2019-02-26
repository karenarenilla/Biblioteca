import Controller from "contrib/interfaces/controllerInterface";
import { Request, Response } from "express";
import PrestamoLibro from "models/builder/prestamoBuilder";
import { PrestamoModel } from "models/mongo/prestamoModel";

export default class implements Controller {
  public async find(req: Request, res: Response): Promise<Response> {
    const prestamos = await PrestamoModel.find();
    return await res.send(prestamos);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const prestamo = new PrestamoLibro()
                    .setFecha(req.body.fecha)
                    .setPersona(req.body.persona)
                    .setLibro(req.body.libro)
                    .buil();
    const newPrestamo = new PrestamoModel(prestamo);
    await newPrestamo.save();
    return await res.json("Registro exitoso");
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const prestamo = {
      fecha: req.body.fecha,
      libro: req.body.libro,
      persona: req.body.persona,
    };
    await PrestamoModel.findByIdAndUpdate(id, {$set: prestamo}, {new: true});
    return res.json("update");
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    await PrestamoModel.findByIdAndRemove(id);
    return res.json("delete");
  }
}
