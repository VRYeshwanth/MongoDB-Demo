import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true}
});

// This line tells us that whatever operation is being performed on the DB
// Will be performed on the collection 'users'
// It pluralizes and lowercases the 'User' word to form the collection name
const User = mongoose.model("User", userSchema);

export default User;