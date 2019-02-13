import Controller from "contrib/interfaces/controllerInterface";
import Middleware from "contrib/interfaces/middlewareInterface";
import { Application } from "express";

export default class {
  private controller: Controller;
  private middleware: Middleware;

  constructor(version: string, app: Application, controller: Controller, middleware: Middleware) {
    this.controller = controller;
    this.middleware = middleware;

    app.route(`${version}/persona`)
    .get(this.controller.find)
    .post(this.middleware.validate.bind(this.middleware))
    .post(this.controller.create)
    .put(this.middleware.validate.bind(this.middleware))
    .put(this.controller.update)
    .delete(this.middleware.validate.bind(this.middleware))
    .delete(this.controller.delete);
  }
}
