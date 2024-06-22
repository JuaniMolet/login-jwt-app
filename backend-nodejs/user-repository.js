import DBlocal from "db-local";
import crypto from "crypto";
const { Schema } = new DBlocal({ path: "./db" });

const User = Schema("User", {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default class UserRepository {
  static create({ username, password}) {
    //validaciones de username y password
    if(typeof username !== "string" || typeof password !== "string"){
      throw new Error("Username and password must be strings");
    }
    if(username.length < 4 || password.length < 4){
      throw new Error("Username and password must be at least 4 characters long");
    }
    //validar si el usuario ya existe
    const user = User.findOne({ username });
    if(user){
      throw new Error("User already exists");
    }
    //crear usuario
    const id = crypto.randomUUID();
    
  }
  static login(user) {
    return DBlocal.login(user);
  }
}
