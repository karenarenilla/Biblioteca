import { PersonaSchema } from "models/postgres/personaModel";
import { prop, Typegoose } from "typegoose";

export class Director extends Typegoose {
  public static getDirector(): Director {
    if (!Director.director) {
      Director.director = new Director();
    }
    return this.director;
  }
  private static director: Director;
  @prop() public dates?: PersonaSchema;
  @prop() public profesion?: string;
  @prop() public periodo?: string;
  public DirectorModel = new Director().getModelForClass(Director);

  public super(dates: PersonaSchema, profesion: string, periodo: string) {
    this.dates = dates;
    this.profesion = profesion;
    this.periodo = periodo;
  }
}
