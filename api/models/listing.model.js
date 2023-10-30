import mongoose from "mongoose";
const listingSchema = new mongoose.Schema(
    {
        titre: {
             type: String, 
            required: true 
        },
        description: { 
            type: String,
            required: true 
        },
        categorie: {
             type: String, 
            required: true 
        },
        prix: {
             type: Number, 
            required: true 
        },
        phone: { 
            type: String,
            required: true 
        },
        imageUrls: {
             type: Array,
             required: true
            }, // Store image URLs array bc its more thaan one image
        region: { 
            type: String, 
            required: true
        },
        userRef:{
                type: String, 
                required: true 
        },
}, {timestamps:true}

);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing ;