import db from "../models";
//import db from '../models/Register.model'

const Register:any=db.register;

export const createRegister:any= async (
    
    name:string,
    email:string,
    phoneNumber:string,
    password:string,

)=>{
    return await Register.create({
        name:name,
        email:email,
        phoneNumber:phoneNumber,
        password:password
    })
}
export const getRegister = async ()=>{
    return  Register.findAll();
}





