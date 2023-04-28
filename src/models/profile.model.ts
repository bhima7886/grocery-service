/*import express from 'express';
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
*/
import { Express } from "express";
import Datatypes from 'sequelize';
import { auditColumns } from "../shared/utils/sequelize-model-helper";

const ProfileModel=(sequelize:any,_Sequelize:any)=>{
const  profile=sequelize.define(
    'profile',{
        id: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV4,
            primaryKey: true
        },
       name:{
             type:Datatypes.STRING,
              unique:true,
              validate:{
                min:5,
                max:32
              }
       },
        email: {
            type: Datatypes.STRING,
            unique: true,
            validate:{
              min:5,
              max:64,
            },
            allowNull: false,
        },
        phoneNumber: {
            type: Datatypes.STRING,
            unique: true,
            allowNull: false,
        },
        image:{
            type:Datatypes.STRING,
            unique:true,
            allowNull:false,
        },
       
        address :{
           type:Datatypes.STRING,
           unique:true,
           allownull:false,
        },
        ...auditColumns
    }
)
return profile;
}
export default ProfileModel;