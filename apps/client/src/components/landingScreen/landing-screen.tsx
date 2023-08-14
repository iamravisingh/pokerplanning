import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FibonacciImage from '../../assets/images/card.svg';
import Typography from '@mui/material/Typography';
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
        <Typography className="caption">
          Create better estimates, healthier sprints, and happier teams.
        </Typography>
        <Button variant="contained" onClick={handleCreateRoom}>
          <Typography>Lets Start Planning</Typography>
        </Button>
      </Box>
      <Box>
        <img alt="fibonacci_image" src={FibonacciImage} />
      </Box>
    </Box>
  );
};
