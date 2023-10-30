import  express  from "express";
import { createListing, getAllCategories, getAllRegions } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.get('/categories', getAllCategories);
router.get('/regions', getAllRegions);


export default router;