import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NotFound from '../../assets/images/not-found.svg';
import { ANIMATION_TEMPLATE } from '../../common/constant';
import './style.scss';

export const NotFoundScreen = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <motion.div {...ANIMATION_TEMPLATE.PAGE_LANDING}>
      <Box className="notfoundWrapper">
        <Grid
          container
          spacing={{ xs: 4, sm: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={7}>
            <img
              loading="lazy"
              width="90%"
              height="100%"
              src={NotFound}
              alt="notfound"
            />
          </Grid>
          <Grid item xs={4} sm={8} md={4}>
            <Box className="notfoundContent">
              <Typography variant="h1" component={'h1'}>
                Opps!
              </Typography>
              <Typography variant="h2" component={'h2'}>
                Something Went Wrong
              </Typography>
              <Button variant="contained" onClick={handleBack}>
                <Typography>Go Back</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};
