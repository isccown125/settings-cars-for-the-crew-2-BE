import {Router} from 'express';

export const vehiclesRouter = Router();

vehiclesRouter.post('/', (req, res)=>{
    res.send('all vechicles');
})

