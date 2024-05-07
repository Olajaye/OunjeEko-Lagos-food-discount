import orderModel from "../Models/orderModel.js";
import userModel from '../Models/userModel.js';




//placing user order for fronend

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173"
  
  try {
    
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address
    })

   

    
    res.json({success:true, message: "success"})
    
  } catch (error) {
    res.json({success:false, message: "Payment will be verified"})
  }


}




export { placeOrder }





