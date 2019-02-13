import libroMiddleware from "contrib/middlewares/libroMiddleware";
import personaMiddleware from "contrib/middlewares/personaMiddleware";
import libroController from "controllers/libroController";
import personaController from "controllers/personaController";
import { Application } from "express";
import personaRoutes from "routes/personaRoutes";
import libroRoutes from "./libroRoutes";

export default class {
  private version: string;
  constructor(app: Application) {
    this.version = "/api/v1";
    new personaRoutes(this.version, app, new personaController(), new personaMiddleware());
    new libroRoutes(this.version, app, new libroController(), new libroMiddleware());
  }
}
