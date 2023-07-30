import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoom } from "../CreateRoom";
import { Home } from "../Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/room" element={<CreateRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
