import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true
  },
});

const userModel = mongoose.model('Customer', userSchema);

export default userModel;