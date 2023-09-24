import { DeviceContext } from '@/shared/contexts/DeviceContext';

const Page = ({ children, className, initialState, device, withNavbar = false, darkMode = false }: IProps) => {
  return (
    <DeviceContext.Provider value={{ type: device?.type }}>
      <main className={`${className} ${withNavbar ? 'with-navbar' : 'without-navbar'} ${darkMode ? 'dark' : ''}`}>
        {children}
      </main>
      <footer
        className={`h-100 border-t bg-white p-6 text-center text-xs text-gray-400 shadow-sm ${darkMode ? 'dark' : ''}`}
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
