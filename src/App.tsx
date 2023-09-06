import { Outlet } from 'react-router-dom';

import Poster from './components/Poster/Poster';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Poster />

      <Outlet />
    </Layout>
  );
}

export default App;
