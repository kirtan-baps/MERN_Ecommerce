import express from "express";
import { registerController, loginController, testController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleWare.js";

// router Object
const router = express.Router()

// ROUTING

// Register || POST
router.post('/register', registerController)
// Login || POST
router.post('/login', loginController)

// test routes
router.get('/test', requireSignIn, isAdmin, testController)

// protected route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

export default router;