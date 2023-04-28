

import express from "express";
//import { handleCreateItem, handleGetAllVegetables } from "../controllers/vegetable.controller";
import { handleCreatemycart,handleGetAllmycart } from "../controllers/cart.controller";
// eslint-disable-next-line import/no-duplicates 
import { ROUTES } from "../shared/constants/url";

//const vegetableRouter = express.Router();
const mycartRouter=express.Router();

mycartRouter.post(ROUTES.ADD_MYCART, handleCreatemycart);
mycartRouter.get(ROUTES.GET_MYCART,handleGetAllmycart);
//vegetableRouter.get(ROUTES., handleGetAllById);

export default mycartRouter;