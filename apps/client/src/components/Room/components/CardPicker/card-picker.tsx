import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import './style.scss';

type CardPickerType = {
  handleClick?: () => void;
  value: string | number;
  buttonProps?: ButtonProps;
  classes?: string;
};

export const CardPicker: FC<CardPickerType> = (props) => {
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
