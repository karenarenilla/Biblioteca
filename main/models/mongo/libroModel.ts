import { prop, Typegoose } from "typegoose";

class LibroSchema extends Typegoose {
  @prop() public name?: string;
  @prop() public categoria?: string;
  }

export const LibroModel = new LibroSchema().getModelForClass(LibroSchema);
