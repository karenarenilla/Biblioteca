import * as appModulePath from "app-module-path";
appModulePath.addPath(__dirname);
import * as bodyParser from "body-parser";
import MongoConnection from "contrib/connections/mongoConnection";
import PostgresConnection from "contrib/connections/postgresConnection";
import express = require("express");
import Log from "loglevel";
import Routes from "routes/routes";

Log.enableAll();
const port = 3000;
const app: express.Application = express();
app.use(bodyParser.json());

new PostgresConnection();
new MongoConnection();
new Routes(app);
app.listen(port, () => {
    Log.info(`server on port ${port}`);
});
