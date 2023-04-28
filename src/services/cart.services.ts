
//import { title } from "process";
import db from "../models";
const Mycart:any=db.cart;

export const createItem:any=async (
    title:string,
    description:string,
    price:string,
    image:string
)=>{
    return await  Mycart.create({
        title:title,
        description:description,
        price:price,
        image:image,
    })
}
export const getAllcart= async ()=>
{
    return Mycart.findAll();
}
