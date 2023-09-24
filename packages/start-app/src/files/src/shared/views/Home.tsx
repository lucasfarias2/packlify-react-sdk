import Page from '@/shared/components/page/Page';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = (props: IViewProps) => {
  const { device, initialState } = props;

  return (
    <Page initialState={initialState} device={device}>
      <Routes>
        <Route path="/" element={<Home device={device} />} />
      </Routes>
    </Page>
  );
};

const Home = ({ device }: { device: IDevice }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-16">
      <p className="text-xl">Packlify - Testing from {device.type}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="mt-16 rounded bg-blue-500 p-2 font-semibold text-white"
      >
        Test client rendering ({count})
      </button>
    </div>
  );
};

export default Router;
