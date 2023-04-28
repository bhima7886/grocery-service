import { Request, Response, NextFunction } from "express";
//import { createItem, getAllcart } from "../services/vegetable.service";
import {createItem ,getAllcart } from "../services/cart.services";
export const handleCreatemycart= async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, price, image } = req.body;

    try {
        const mycart = await createItem(title, description, price, image);
        res.status(200).json(mycart);
    }
    catch (error) {
        next(error);
    }
}

export const handleGetAllmycart = async (req: Request, res: Response) => {
    try {

        const mycart = await getAllcart()
        res.status(200).json(mycart);

    }
    catch (error) {
        console.log(error);
    }
}