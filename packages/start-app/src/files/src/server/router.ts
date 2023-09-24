import homeController from './controllers/homeController.js';
import express from 'express';

const appRouter = express.Router();

appRouter.get('/', homeController.fetch, homeController.render);

export default appRouter;
