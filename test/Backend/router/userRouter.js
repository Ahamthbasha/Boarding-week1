import express from "express"
import userController from "../controller/userController.js"

const router = express.Router()

router.post("/createUser",userController.createUser)

router.get("/getAllUser",userController.getAllUser)

router.get("/existingName/:name",userController.checkExistingName)

export default router