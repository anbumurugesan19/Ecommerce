import express from "express";
import products from './routes/product.js';
import orders from './routes/order.js';
import connectDatabase from "./config/connectDatabase.js";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "./config/corsOptions.js"
import {dirname} from "path";
import { fileURLToPath } from "url";
import main from "./mail.js";
import userModel from "./models/userModel.js";
import contactModel from "./models/contactModel.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({path: __dirname + "/config/config.env"});

const app = express();
const PORT = process.env.PORT || 3500;

connectDatabase();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/v1', products);
app.use('/api/v1', orders);

app.post('/newsletter', async (req, res) => {
  const {email} = req.body;
  console.log(email);

  await userModel.create({email});
  try {
    await main(email);
    res.status(200).json({ message: "Email Sent" });
  } catch(err){
    res.status(500).json({ message: "Email Not Sent" });
  }
});

app.post('/contact', async (req, res) => {
  try{
    const {fname, lname, email, Pno, message} = req.body;
    await contactModel.create({fname, lname, email, Pno, message});
    res.status(200).json({ message: "Contact form submitted successfully!" });
  }catch(error){
    console.error(error);
    res.status(500).json({ message: "An error occurred while submitting the form." });
  }
    
})

app.listen(PORT, () => {
  console.log(`Server listening to Port ${PORT}`)
})