import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const LandingScreen = () => {
    const navigate = useNavigate(); 
    const handleCreateRoom = () => {
      navigate("/create/room")
    }
    return (
        <Box className="pokerHeadline">
        <h2>Planning Poker</h2>
        <span>Online Planning Poker for Agile Teams</span>
        <Box mt={2} className="createRoom">   
            <Button variant="contained" onClick={handleCreateRoom}>lets start planning</Button>
        </Box>
    </Box>
    )
}