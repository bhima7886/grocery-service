
import db from "../models";

const Profile=db.profile;

export const CreateProfile:any= async (
  name:string,
  email:string,
  phoneNumber:string,
  image:string,
  address:string,

)=>{
    return await Profile.create({
        name:name,
        email:email,
        phoneNumber:phoneNumber,
        image:image,
        address:address
    })
}

export const GetProfile:any=async ()=>{
    return await Profile.findAll();
}