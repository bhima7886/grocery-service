import { Request, Response } from "express";
import { createRegister, getRegister } from "../services/register.services";

export const handlecreateRegister=async (req:Request,res:Response)=>
{
     const {name,email,phoneNumber,password}=req.body;
     try{
     const register=await createRegister(name,email,phoneNumber,password);
     res.status(200).json(register)
     }
     catch(err)
     {
        console.log(err);
     }
}
export const handleGetRegister = async (req: Request, res: Response) => {
    try {

        const register = await getRegister()
        res.status(200).json(register);

    }
    catch (error) {
        console.log(error);
    }
}