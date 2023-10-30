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
        category: {
             type: String, 
            required: true,
            enum: {
                values:[    
                    
                    'animaux',
                    'emploi',
                    'enfants',
                    'immobilier',
                    'loisir',
                    'mode',
                    'multimedia',
                    'pour la maison',
                    'sante',
                    'service',
                    'vehicules',
                    'voyage'
                 ]
            }
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
            required: true,
            enum:{
                values:[
                    'ariana',
                    'beja',
                    'ben arous',
                    'bizerte',
                    'gabes',
                    'gafsa',
                    'jendouba',
                    'kairouan',
                    'kasserine',
                    'kebili',
                    'le kef',
                    'mahdia',
                    'manouba',
                    'medenine',
                    'monastir',
                    'nabeul',
                    'sfax',
                    'sidi bouzid',
                    'siliana',
                    'sousse',
                    'tataouine',
                    'tozeur',
                    'tunis',
                    'zaghouan'
                ]
            }
        },
        userRef:{
                type: String, 
                required: true 
        },
}, {timestamps:true}

);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing ;