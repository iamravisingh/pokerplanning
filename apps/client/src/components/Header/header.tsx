
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { isPlanningStarted } from '../../store/reducers/planningSlice';
import Box from '@mui/material/Box';
import POKER_LOGO from '../../assets/images/pokerlogo.svg';
import { InvitePlayersButton } from './components/InviteDialog';
import './style.scss';

export const Header = () => {
  const checkPlanningStarted = useAppSelector(isPlanningStarted);  
  return (
    <Box className="headerContainer">
      <Box width={250} height={95} className="logoContainer">
        <NavLink to="/">
          <img
            width="100%"
            height="100%"
            alt="pokerplanning"
            src={POKER_LOGO}
          />
        </NavLink>
      </Box>
      {checkPlanningStarted && <InvitePlayersButton />}
    </Box>
  );
};
