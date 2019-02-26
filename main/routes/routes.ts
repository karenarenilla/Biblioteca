import libroMiddleware from "contrib/middlewares/libroMiddleware";
import personaMiddleware from "contrib/middlewares/personaMiddleware";
import prestamoMiddleware from "contrib/middlewares/prestamoMiddleware";
import libroController from "controllers/libroController";
import personaController from "controllers/personaController";
import prestamoController from "controllers/prestamoController";
import { Application } from "express";
import personaRoutes from "routes/personaRoutes";
import libroRoutes from "./libroRoutes";
import prestamoRoutes from "./prestamoRoutes";

export default class {
  private version: string;
  constructor(app: Application) {
    this.version = "/api/v1";
    new personaRoutes(this.version, app, new personaController(), new personaMiddleware());
    new libroRoutes(this.version, app, new libroController(), new libroMiddleware());
    new prestamoRoutes(this.version, app, new prestamoController(), new prestamoMiddleware());
  }
}
