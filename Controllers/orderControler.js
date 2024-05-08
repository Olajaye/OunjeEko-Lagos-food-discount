import { request } from "express";
import orderModel from "../Models/orderModel.js";
import userModel from '../Models/userModel.js';
import Stripe from "stripe"
//const https = require('https')
import https from "https"

const strip = new Stripe(process.env.STRIPE_SECRET_KEY)


//placing user order for fronend

const placeOrder = async (req, res) => {
  const frontend_url = "https://foodbank.onrender.com"
  
  try {
    
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    })

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} })
    
   /*
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
          
        product_data: { name: item.name },
        
        unit_amount: item.price * 100
      },
      qunatity:item.quantity
    }))


    line_items.push({
       price_data: {
        currency: "usd",
          
        product_data: "Delivery Charges",
        
        unit_amount: 2 * 100
      },
      qunatity:1
    })

    const session = await strip.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    })
    */
  


    

    /*
    const params = JSON.stringify({
      "email": "customer@email.com",
      "amount": "20000"
    })

    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: 'pk_test_d489063fb72a4be698df4cf5f75e3084a0394df0',
        'Content-Type': 'application/json'
      }
    }

    const req = https.request(options, res => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      });

      res.on('end', () => {
        console.log(JSON.parse(data))
        const data = JSON.parse(data)
        res.json({success:true, data})
      })
    }).on('error', error => {
      console.error(error)
    })

    res.json({success:true, params})
    req.write(params)
    req.end()


    */
    
    // res.json({success:true, session})
    
  } catch (error) {
    res.json({success:false, message: "Error"})
  }


}




export { placeOrder }





