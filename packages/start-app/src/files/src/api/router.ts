import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/test', (_req, res) => {
  res.send('API is working');
});

apiRouter.use('*', (_req, res) => {
  res.send('Error 404: Page not found');
});

export default apiRouter;
