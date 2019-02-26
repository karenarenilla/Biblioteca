import { prop, Typegoose } from "typegoose";

export class LibroSchema extends Typegoose {
  @prop() public name?: string;
  @prop() public categoria?: string;
  }

export const LibroModel = new LibroSchema().getModelForClass(LibroSchema);
