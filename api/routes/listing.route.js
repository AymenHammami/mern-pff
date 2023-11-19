import  express  from "express";
import { createListing, deleteListing, getAllCategories, getAllRegions, updateListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.get('/categories', getAllCategories);
router.get('/regions', getAllRegions);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);





export default router;