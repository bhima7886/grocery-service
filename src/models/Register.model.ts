import express from 'express';
import { DataTypes } from "sequelize"
import { auditColumns } from "../shared/utils/sequelize-model-helper";
const RegisterModel=(sequelize:any,_Sequelize:any)=>{
       const register=sequelize.define(
        'register',{
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
           name:{
                 type:DataTypes.STRING,
                  unique:true,
                  validate:{
                    min:5,
                    max:32
                  }
           },
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate:{
                  min:5,
                  max:64,
                },
                allowNull: false,
            },
            phoneNumber: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
            },
            ...auditColumns
        }
       )
       return register;
}
export default RegisterModel;
