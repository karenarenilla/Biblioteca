import mongoose from "mongoose";

export default class {
  constructor() {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/biblioteca", {useNewUrlParser: true});
  }
}
