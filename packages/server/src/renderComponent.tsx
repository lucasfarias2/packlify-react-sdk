/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

export function renderComponent(
  Component: React.FunctionComponent<any> | React.ComponentClass<any>,
  url: string,
  props: any,
  withRouter = false
): string {
  const component = <Component {...props} />;

  if (withRouter) {
    return renderToString(<StaticRouter location={url}>{component}</StaticRouter>);
  }

  return renderToString(component);
}
