import { LibroSchema } from "models/mongo/libroModel";
import { PersonaSchema } from "models/mongo/personaModel";
import PrestamoSchema, { PrestamoModel } from "models/mongo/prestamoModel";

export default class PrestamoLibro {
  public prestamo: PrestamoSchema;

  constructor() {
    this.prestamo = new PrestamoModel();

  }

  public setFecha(fecha: string): PrestamoLibro {
    this.prestamo.fecha = fecha;
    return this;
  }
  public setPersona(persona: PersonaSchema): PrestamoLibro {
    this.prestamo.persona = persona;
    return this;
  }

  public setLibro(libro: LibroSchema): PrestamoLibro {
    this.prestamo.libro = libro;
    return this;
  }

  public buil(): PrestamoSchema {
    return this.prestamo;
  }
}
