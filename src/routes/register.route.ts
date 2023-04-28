import express from 'express';
import { ROUTES } from '../shared/constants/url';
import { handleGetRegister, handlecreateRegister } from '../controllers/register.controller';



export const registerRouter=express.Router();

registerRouter.post(ROUTES.CREATE_REGISTER,handlecreateRegister);
registerRouter.get(ROUTES.GET_REGISTER,handleGetRegister);
