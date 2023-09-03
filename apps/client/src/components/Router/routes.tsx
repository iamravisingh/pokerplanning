import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoomEntry } from '../RoomEntry';
import { Home } from '../Home';
import { Layout } from '../Layout';
import { RoomPlayground } from "../Room";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create/room" element={<RoomEntry type="Create"/>} />
          <Route path="/join/room" element={<RoomEntry type="Join"/>} />
          <Route path="/room" element={<RoomPlayground/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
