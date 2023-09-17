import { useState, useEffect, FC  } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HandFinger from '../../../../assets/images/hand-finger.svg';
import { fibonacciRange } from './helper';
import { CardPicker } from '../CardPicker';
import { SocketInstanceType } from '../../../../common/hooks';
import './style.scss';

const GAME_OPTIONS = {
  PICK: 'Pick Your Card!',
  REVEAL: 'Reveal Card',
  NEW_VOTING: 'Start New Voting',
};

type CardDeskProps = {
  socket: SocketInstanceType,
  roomKey: string
}
export const CardDesk: FC<CardDeskProps> = (props): JSX.Element => {
  const { socket, roomKey } = props;
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const fibRange = [...new Set(fibonacciRange(12))];

  useEffect(() => {
    if(socket && socket.connected){
      socket.on("joined", data => {
        console.log("client joined >>>>>", data);
      })
    }
  },[socket])

  const handleCardClick = (count: number) => () => {
    setSelectedCount(count);
  };

  const cardDeskContent = (text?: string) => {
    if (text !== GAME_OPTIONS.PICK) {
      return (
        <Button className="deskButton" variant="contained">
          <Typography>{text}</Typography>
        </Button>
      );
    }
    return <Typography>{GAME_OPTIONS.PICK}</Typography>;
  };

  const deskText = selectedCount !== null  ? GAME_OPTIONS.REVEAL : GAME_OPTIONS.PICK
  return (
    <Box>
      <Box className="cardContainer">
        <Card className="card">{cardDeskContent(deskText)}</Card>
        <Box className="selectedCard">
          {selectedCount !== null && (
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
          <img width={40} height={40} src={HandFinger} alt="finger"/>
        </Box>
        <Box className="cardCount">
          {fibRange.map((item) => {
            return (
              <CardPicker
                classes={selectedCount === item ? "active" : ""}
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
