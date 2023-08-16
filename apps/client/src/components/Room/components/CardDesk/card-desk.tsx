import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HandFinger from '../../../../assets/images/hand-finger.svg';
import { fibonacciRange } from './helper';
import { CardPicker } from '../CardPicker';
import './style.scss';

const GAME_OPTIONS = {
  PICK: 'Pick Your Card!',
  REVEAL: 'Reveal Card',
  NEW_VOTING: 'Start New Voting',
};
export const CardDesk = (): JSX.Element => {
  const [selectedCount, setSelectedCount] = useState<number | null>();
  const fibRange = fibonacciRange(12);

  const handleCardClick = (count: number) => () => {
    setSelectedCount(count);
  };

  const cardContent = (text?: string) => {
    if (text) {
      return (
        <Button className="deskButton" variant="contained">
          <Typography>{text}</Typography>
        </Button>
      );
    }
    return <Typography>{GAME_OPTIONS.PICK}</Typography>;
  };
  return (
    <Box>
      <Box className="cardContainer">
        <Card className="card">{cardContent()}</Card>
        <Box className="selectedCard">
          {selectedCount && (
            <Box className="selectedCardCount">
              <Button className="selectedCardNumber">
                <Typography>{selectedCount}</Typography>
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="cardCountContainer">
        <Box className="cardHelper">
          <Typography>Choose Your Card Below</Typography>
          <img width={40} height={40} src={HandFinger} alt="finger" />
        </Box>
        <Box className="cardCount">
          {fibRange.map((item) => {
            return (
              <CardPicker
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