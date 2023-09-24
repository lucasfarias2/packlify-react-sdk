import Home from '@/shared/views/Home';
import { renderComponent } from '@packlify/core';

export function render(url: string, props: IInitialState) {
  return renderComponent({ Component: Home, url, props, withRouter: true });
}
