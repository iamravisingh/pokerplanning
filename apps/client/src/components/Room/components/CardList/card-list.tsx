import { FC } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HandFinger from '../../../../assets/images/hand-finger.svg';
import { fibonacciRange } from './helper';
import { CardPicker } from '../CardPicker';
import { EmojiPicker } from '../../../EmojiPicker';
import { EMOJI_SMILE } from './constant';
import { CardListType } from './type';
import './style.scss';

export const CardList: FC<CardListType> = (props) => {
  const { selectedCount, onCardClick, onEmojiSelect } = props;
  const gameCountList: Array<string | number> = [
    ...new Set(fibonacciRange(12)),
    EMOJI_SMILE,
  ];
  const showEmojiPicker = selectedCount === EMOJI_SMILE;

  return (
    <Box className="cardCountContainer">
      <Box className="cardHelper">
        <Typography>Choose Your Card Below</Typography>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <img
            loading="lazy"
            width={40}
            height={40}
            src={HandFinger}
            alt="finger"
          />
        </motion.div>
      </Box>
      <Box className="cardCountWrapper">
        {gameCountList.map((item) => {
          return (
            <CardPicker
              classes={selectedCount === item ? 'active' : ''}
              key={item}
              value={item}
              handleClick={onCardClick(item)}
            />
          );
        })}
        <EmojiPicker enablePicker={showEmojiPicker} onSelect={onEmojiSelect} />
      </Box>
    </Box>
  );
};
