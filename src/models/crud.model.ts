import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { auditColumns } from "../shared/utils/sequelize-model-helper";


const crudModel=(sequelize:any, Sequelize:any)=>
{
   const crudoperation=Sequelize.define(
    'crud',
   {
     id:{
        type:DataTypes.UUID,
        defaultValue:UUIDV4,
        primaryKey:true,
     },
     name:{
        type:DataTypes.STRING,
        allownull:false,  
     },
     address:{
        type:DataTypes.STRING,
     },
     city:{
          type:DataTypes.STRING
     },
     ...auditColumns
   }
   )
   return crudoperation
}
export default crudModel;