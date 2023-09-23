import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

declare const window: IWindow;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hydrate(Component: React.FunctionComponent<any> | React.ComponentClass<any>, withRouter = false) {
  const props = window.__PRELOADED_STATE__;
  
  const component = React.createElement(Component, props);
  const domElement = document.getElementById('root') as HTMLElement;

  if (withRouter) {
    const browserRouter = React.createElement(BrowserRouter, null, component);
    hydrateRoot(domElement, browserRouter);
  } else {
    hydrateRoot(domElement, component);
  }
}
