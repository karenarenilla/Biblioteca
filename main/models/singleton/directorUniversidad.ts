import { PersonaSchema } from "models/postgres/personaModel";

export default class Director {
  public static getDirector(datosDirector: PersonaSchema): Director {
    if (!Director.director) {
      this.director = new Director(datosDirector);
    }
    return this.director;
  }
  private static director: Director;
  public datosDirector: PersonaSchema;
  private constructor(persona: PersonaSchema) {
    this.datosDirector = persona;
  }
}
