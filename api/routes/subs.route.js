import  express  from "express";
import { checkout, getPrices } from "../controllers/subs.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

    router.get('/prices', verifyToken,getPrices);
    router.post('/session', verifyToken,checkout);

export default router;