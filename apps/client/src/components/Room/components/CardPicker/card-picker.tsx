import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import { CardPickerType } from './type';
import './style.scss';

export const CardPicker: FC<CardPickerType<ButtonProps>> = (props) => {
  const { handleClick, buttonProps, value, classes } = props;
  const onClick = () => {
    handleClick?.();
  };
  return (
    <Box className={`cardCount ${classes}`}>
      <Button className="cardNumber" onClick={onClick} {...buttonProps}>
        <Typography>{value}</Typography>
      </Button>
    </Box>
  );
};
