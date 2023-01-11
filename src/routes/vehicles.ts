import {Request, Response, Router} from 'express';
import {VehicleReq, VehicleRes} from '../types';

export const vehiclesRouter = Router();

vehiclesRouter.get('/', (req, res:Response<string, VehicleReq>)=>{

})

