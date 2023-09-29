import { DeviceContext } from '@/shared/contexts/DeviceContext';
import classnames from 'classnames';

const Page = ({ children, className, initialState, device, darkMode = false }: IProps) => {
  return (
    <DeviceContext.Provider value={{ type: device?.type }}>
      <main className={classnames(className, { dark: darkMode })}>{children}</main>
      <footer
        className={classnames('h-100 border-t bg-white p-6 text-center text-xs text-gray-400 shadow-sm', {
          dark: darkMode,
        })}
      >
        <div>
          Copyright &copy; {new Date().getFullYear()} Lucas Farias. All rights reserved. <p>lucasfarias.com</p>
        </div>
      </footer>
    </DeviceContext.Provider>
  );
};

interface IProps extends IComponent {
  withNavbar?: boolean;
  initialState?: IInitialState;
  device: IDevice;
  darkMode?: boolean;
}

export default Page;
