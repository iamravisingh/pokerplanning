import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoom } from '../CreateRoom';
import { Home } from '../Home';
import { Layout } from '../Layout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create/room" element={<CreateRoom />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
