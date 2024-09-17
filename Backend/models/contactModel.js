import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  Pno: String,
  message: String
});

const contactModel = mongoose.model('Contact', contactSchema);

export default contactModel;