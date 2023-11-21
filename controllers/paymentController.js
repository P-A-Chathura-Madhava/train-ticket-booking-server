import Payment from "../models/Payment.js";

export const createPayment = async (req, res, next) => {
    const newPayment = new Payment(req.body);
    try {
      const savedPayment = await newPayment.save();
      res.status(200).json(savedPayment);
    } catch (error) {
      next(error);
    }
  };