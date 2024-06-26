import express from "express";
import { addFood, listFood, removeFood } from "../Controllers/ounjeEkoController.js";
import multer from "multer";


const foodRouter = express.Router();

//Image Storage Engine

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    return cd(null,"Uploads")
  },
  filename: (req, file, cd) => {
    return cd(null,`${Date.now()}${file.originalname}`)
  }
})


const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)





export default foodRouter;