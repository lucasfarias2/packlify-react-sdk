import { renderComponent } from '@packlify/core';
import Home from '@/shared/views/Home';

export function render(url: string, props: IInitialState) {
  return renderComponent({ Component: Home, url, props, withRouter: true });
}
