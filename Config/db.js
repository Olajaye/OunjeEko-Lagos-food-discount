import mongoose from "mongoose";
import 'dotenv/config'
export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://ounjeeko:ounjeeko123@cluster0.gyygq12.mongodb.net/ounjeEko").then(() => console.log("DB Connected"));
}