import { Router } from 'express';
import Controller from '../controllers/Controller';

const route: Router = Router();

route.get('/api', Controller.index);


export default route;