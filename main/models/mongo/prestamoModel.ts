import { LibroSchema } from "models/mongo/libroModel";
import { PersonaSchema } from "models/postgres/personaModel";
import { prop, Typegoose } from "typegoose";

export default class PrestamoSchema extends Typegoose  {

  @prop()  public persona?: PersonaSchema;
  @prop()  public libro?: LibroSchema;
  @prop()  public fecha?: string;
}
export const PrestamoModel = new PrestamoSchema().getModelForClass(PrestamoSchema);
