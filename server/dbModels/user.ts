import mongoose from "mongoose";
import bcrypt from "mongoose-bcrypt";
const schema = new mongoose.Schema(
  {
    name: { type:String, unique: false },
    email: { type: String},
    password: { type: String, bcrypt: true },
    username: { type:String, unique: true }
  },
  { timestamps: true, strict: true, strictQuery: true }
);
schema.plugin(bcrypt);
export default mongoose.model("User", schema, "user");
