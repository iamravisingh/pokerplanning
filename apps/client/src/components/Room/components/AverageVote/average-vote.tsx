import { FC } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.scss';

type AverageVoteType = {
  count: number | string | null;
};

export const AverageVote: FC<AverageVoteType> = (props) => {
  const { count } = props;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      <Box className="averageContainer">
        <Button className="averageResult">
          <Typography>{count}</Typography>
        </Button>
        <Typography className="averageVoteCount">1 votes</Typography>
      </Box>
    </motion.div>
  );
};
