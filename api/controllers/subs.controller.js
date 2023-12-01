import User from "../models/user.model.js";
import { stripe } from "../utils/stripe.js";

export const getPrices = async (req,res) => {
    const prices = await stripe.prices.list({
        apiKey: process.env.STRIPE_SECRET_KEY
    });
    return res.json(prices);
}

export const checkout = async(req, res) => {
    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price: req.body.priceId,
                quantity: 1
            }
        ],
        success_url:'http://localhost:5173/',
        cancel_url:'http://localhost:5173/subscription',
        
    }, 
    {
        apiKey: process.env.STRIPE_SECRET_KEY
    }
    );

    return res.json(session);

}