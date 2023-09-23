/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';

interface RenderComponentProps {
  Component: React.FunctionComponent<any> | React.ComponentClass<any>;
  url: string;
  props?: any;
  withRouter?: boolean;
}

export function renderComponent({ Component, url, props = {}, withRouter = false }: RenderComponentProps): string {
  const component = React.createElement(Component, props);

  if (withRouter) {
    const routerProps = {
      location: url,
      children: component,
    };

    return renderToString(React.createElement(StaticRouter, routerProps))
  }

  return renderToString(component);
}
