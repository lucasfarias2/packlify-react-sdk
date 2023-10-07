import express from 'express';
import homeController from './controllers/homeController.js';

const appRouter = express.Router();

appRouter.get('/', homeController.fetch, homeController.render);

export default appRouter;
