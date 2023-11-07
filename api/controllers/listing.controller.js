import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
    try {
      const listing = await Listing.create(req.body);
      //return res.status(201).json(listing);
      res.status(201).json({
success : true,
listing

      })
    } catch (error) {
      next(error);
    }
  };

  export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Listing.distinct("category");
        return res.status(200).json({ categories });
    } catch (error) {
        next(error);
    }
};
  export const getAllRegions = async (req, res, next) => {
    try {
        const regions = await Listing.distinct("region");
        return res.status(200).json({ regions });
    } catch (error) {
        next(error);
    }
};