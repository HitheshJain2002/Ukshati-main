import express from "express";
import {LoginController} from "../Controllers/Authcontroller.js";


const router = express.Router();

router.post('/',LoginController);

export default router