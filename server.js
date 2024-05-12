import express from "express";
import cors from "cors"
import 'dotenv/config'


import { connectDB } from "./Config/db.js";


import foodRouter from "./route/foodRoute.js";
import userRouter from "./route/userRoute.js";
import cartRouter from "./route/cartRoute.js";
import orderRouter from "./route/orderRoute.js";



//app config
const app = express()
const port = process.env.PORT

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
  res.send("Api working")
})


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})


