import { prop, Typegoose } from "typegoose";

export class PersonaSchema extends Typegoose {
  @prop() public document?: string;
  @prop() public name?: string;
  @prop() public roll?: string;
}

export const PersonaModel = new PersonaSchema().getModelForClass(PersonaSchema);
