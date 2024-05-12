import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
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
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0}}
        exit={{ x: [100, 0, 0] }}
        transition={{ ease: 'easeOut', duration: 1}}
      >
        <Box className="landingContent">
          <h1 className="heading">Plan Better</h1>
          <Typography className="caption">
            Create better estimates, healthier sprints, and happier teams.
          </Typography>
          <Button variant="contained" onClick={handleCreateRoom}>
            <Typography>Start Planning Now!</Typography>
          </Button>
        </Box>
      </motion.div>
      <motion.div
        initial={{ x: 100}}
        animate={{ x: 0}}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <Box>
          <Hidden only={['xs', 'sm']}>
            <img loading="lazy" alt="fibonacci_image" src={FibonacciImage} />
          </Hidden>
        </Box>
      </motion.div>
    </Box>
  );
};
