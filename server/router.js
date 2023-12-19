import { Router } from "express";
import * as rh from "./request-handler.js"


const router=Router();
router.route("/").get(rh.test);

export default router