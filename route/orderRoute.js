import express from 'express'
import authMiddleware from '../Middlewear/auth.js'
import { placeOrder } from '../Controllers/orderControler.js'



const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder)

export default orderRouter
