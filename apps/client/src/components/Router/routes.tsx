import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoomEntry } from '../RoomEntry';
import { Home } from '../Home';
import { Layout } from '../Layout';
import { RoomPlayground } from '../Room';
import { NotFound } from '../NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create/room" element={<RoomEntry type="Create" />} />
          <Route path="/join" element={<RoomEntry type="Join" />} />
          <Route path="/room" element={<RoomPlayground />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
