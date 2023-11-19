import  express  from "express";
import { createListing, deleteListing, getAllCategories, getAllRegions } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.get('/categories', getAllCategories);
router.get('/regions', getAllRegions);
router.delete('/delete/:id', verifyToken, deleteListing);




export default router;