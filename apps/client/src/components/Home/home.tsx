import { useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CreateRoom } from "./components"
import "./style.css"

export const Home = () => {
  const [ openRoomModal, setRoomModal ] = useState(false);  

  const handleCreateRoom = () => {
    setRoomModal(true)
  }
  return (
    <div>
      {/* <Header/> */}
      <section>
        <Box className="pokerHeadline">
            <h2>Planning Poker</h2>
            <span>Online Planning Poker for Agile Teams</span>
            <Box mt={2} className="createRoom">   
                <Button onClick={handleCreateRoom}>Create Room</Button>
            </Box>
        </Box>
        {openRoomModal && <CreateRoom open={openRoomModal} setRoomModal={setRoomModal}/>}
      </section>
      {/* <Footer/> */}
    </div>
  );
};
