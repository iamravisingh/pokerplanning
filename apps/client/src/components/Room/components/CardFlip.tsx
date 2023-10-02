import { FC } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type CardFlipType = {
  showCard: boolean;
  count: number | string;
  user: string;
};

export const CardFlip: FC<CardFlipType> = (props) => {
  const { showCard, count, user } = props;

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotateY: showCard ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Box className="cardCount">
          <Button
            className="cardNumber"
            style={{
              background: showCard ? '#fff' : '#282A3A',
              borderRadius: '10px',
              border: '3px solid #50577a',
            }}
          >
            {showCard && <Typography>{count}</Typography>}
            {!showCard && <Typography style={{ color: '#fff' }}>?</Typography>}
          </Button>
          <Typography className="userName">{user}</Typography>
        </Box>
      </motion.div>
    </div>
  );
};
