const mongoose = require("mongoose");
const { Schema } = mongoose;

//Uses mongoose to create a collection for MongoDB via model

const userSchema = new Schema({
  googleId: String
});

//"users" is the name of the MongoDB collections and userSchema is the schema name
mongoose.model("users", userSchema);
