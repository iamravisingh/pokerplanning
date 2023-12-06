import { useState, useEffect, FC, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HandFinger from '../../../../assets/images/hand-finger.svg';
import { fibonacciRange } from './helper';
import { CardPicker } from '../CardPicker';
import { CardFlip } from '../CardFlip';
import { GAME_OPTIONS } from './constant';
import { CardDeskProps } from './type';
import './style.scss';

export const CardDesk: FC<CardDeskProps> = (props): JSX.Element => {
  const { socket } = props;
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [currentCardType, setCurrentCardType] = useState<string>(
    GAME_OPTIONS.PICK
  );
  const fibRange = [...new Set(fibonacciRange(12))];

  useEffect(() => {
    if (socket?.connected) {
      socket.on('joined', (data) => {
        console.log('client joined >>>>>', data);
      });
    }
  }, [socket]);

  const handleCardClick = (count: number) => () => {
    setSelectedCount(count);
    if (currentCardType === GAME_OPTIONS.PICK) {
      setCurrentCardType(GAME_OPTIONS.REVEAL);
    }
  };

  const handleAction = (event: MouseEvent<HTMLButtonElement>) => {
    const type = event.target as HTMLButtonElement;
    const text = type.innerText;
    let updateCardType = GAME_OPTIONS.PICK;
    if (text === GAME_OPTIONS.REVEAL) {
      updateCardType = GAME_OPTIONS.NEW_VOTING;
    } else if (text === GAME_OPTIONS.NEW_VOTING) {
      setSelectedCount(null);
    }
    setCurrentCardType(updateCardType);
  };
  const cardDeskContent = (text?: string) => {
    if (text !== GAME_OPTIONS.PICK) {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Button
            className="deskButton"
            variant="contained"
            onClick={(e) => handleAction(e)}
          >
            <Typography>{text}</Typography>
          </Button>
        </motion.div>
      );
    }
    return <Typography>{GAME_OPTIONS.PICK}</Typography>;
  };

  const revelCardNow = currentCardType === GAME_OPTIONS.NEW_VOTING;
  return (
    <Box>
      <Box className="cardContainer">
        <Card className="card">{cardDeskContent(currentCardType)}</Card>
        <Box className="selectedCard">
          {selectedCount !== null && (
            <CardFlip showCard={revelCardNow} count={selectedCount} />
          )}
        </Box>
      </Box>
      <Box className="cardCountContainer">
        <Box className="cardHelper">
          <Typography>Choose Your Card Below</Typography>
          <img width={40} height={40} src={HandFinger} alt="finger" />
        </Box>
        <Box className="cardCountWrapper">
          {fibRange.map((item) => {
            return (
              <CardPicker
                classes={selectedCount === item ? 'active' : ''}
                key={item}
                value={item}
                handleClick={handleCardClick(item)}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
