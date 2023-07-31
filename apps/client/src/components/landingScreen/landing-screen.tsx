import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FibonacciImage from '../../assets/images/card.svg';
import './style.scss';

export const LandingScreen = () => {
  const navigate = useNavigate();
  const handleCreateRoom = () => {
    navigate('/create/room');
  };
  return (
    <Box className="landingScreenContainer">
      <Box className="landingContent">
        <h1 className="heading">Plan Better</h1>
        <span>
          Create better estimates, healthier sprints, and happier teams.
        </span>
        <Button variant="contained" onClick={handleCreateRoom}>
          Lets Start Planning
        </Button>
      </Box>
      <Box>
        <img alt="fibonacci_image" src={FibonacciImage} />
      </Box>
      {/* <h2>Planning Poker</h2>
      <span>Online Planning Poker for Agile Teams</span>
      <Box mt={2} className="createRoom">
        <Button variant="contained" onClick={handleCreateRoom}>
          lets start planning
        </Button>
      </Box> */}
    </Box>
  );
};
