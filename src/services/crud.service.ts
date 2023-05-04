import db from "../models";

const crud=db.crud;


export const Create:any=async (name:string,address:string,city:string)=>
{
    return await crud.Create({
        name:name,
        address:address,
        city:city,
    })
}

