import { useState, FC, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AverageVote } from '../AverageVote';
import { CardFlip } from '../CardFlip';
import { GAME_OPTIONS } from './constant';
import { CardList } from '../CardList';
import { CardDeskProps } from './type';
import './style.scss';

export const CardPlayground: FC<CardDeskProps> = (props): JSX.Element => {
  const [selectedCount, setSelectedCount] = useState<number | string | null>(
    null
  );
  const [currentCardType, setCurrentCardType] = useState<string>(
    GAME_OPTIONS.PICK
  );

  const handleCardClick = (value: number | string) => () => {
    console.log('inside handle click >>>>>>>>', value);
    if (currentCardType === GAME_OPTIONS.PICK) {
      setCurrentCardType(GAME_OPTIONS.REVEAL);
    }
    setSelectedCount(value);
  };

  const handleEmojiSelect = (emoji: Record<string, string | string[]>) => {
    const currentEmoji = emoji.native as string;
    setSelectedCount(currentEmoji);
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
    const isNewVotingStarted =
      currentCardType === GAME_OPTIONS.NEW_VOTING ? 'startNewVoting' : '';
    if (text !== GAME_OPTIONS.PICK) {
      return (
        <Button
          className={`deskButton ${isNewVotingStarted}`}
          variant="contained"
          onClick={(e) => handleAction(e)}
        >
          <Typography>{text}</Typography>
        </Button>
      );
    }
    return <Typography>{GAME_OPTIONS.PICK}</Typography>;
  };

  const revelCardNow = currentCardType === GAME_OPTIONS.NEW_VOTING;
  return (
    <Box>
      <Box className="cardContainer">
        <motion.div layout initial={{ borderRadius: 50 }}>
          <Card className={`card ${selectedCount ? 'active' : ''}`}>
            {cardDeskContent(currentCardType)}
          </Card>
        </motion.div>
        <Box className="selectedCard">
          {selectedCount !== null && (
            <CardFlip showCard={revelCardNow} count={selectedCount} />
          )}
        </Box>
      </Box>
      {currentCardType === GAME_OPTIONS.NEW_VOTING ? (
        <AverageVote count={selectedCount} />
      ) : (
        <CardList
          selectedCount={selectedCount}
          onCardClick={handleCardClick}
          onEmojiSelect={handleEmojiSelect}
        />
      )}
    </Box>
  );
};
