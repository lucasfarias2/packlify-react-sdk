import type { PacklifyServerRequest, PacklifyServerResponse } from '@packlify/core';
import type { NextFunction } from 'express';

const fetch = async (req: PacklifyServerRequest, res: PacklifyServerResponse, next: NextFunction) => {
  next();
};

const render = (req: PacklifyServerRequest, res: PacklifyServerResponse) => {
  res.renderView('home', { initialState: res.locals.initialState, device: req.device });
};

export default { render, fetch };
