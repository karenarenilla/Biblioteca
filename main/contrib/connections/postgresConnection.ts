import { PersonaSchema } from "models/postgres/personaModel";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export default class {
  constructor() {
    const typeOrmConfig: PostgresConnectionOptions = {
      type: "postgres",
      // tslint:disable-next-line:object-literal-sort-keys
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "admin",
      database: "biblioteca",
      synchronize: true,
      logging: false,
      entities: [
          PersonaSchema,
      ],
    };
    createConnection(typeOrmConfig);
  }
}
