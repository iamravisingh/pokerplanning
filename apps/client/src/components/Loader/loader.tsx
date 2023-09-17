import { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

type LoaderProps = {
  show: boolean;
};
export const Loader: FC<LoaderProps> = (props) => {
  const { show = false } = props;
  console.log('loader inside >>>>>', show);
  return (
    <div>
      <Backdrop sx={{ color: '#fff' }} open={show}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
