import { NavLink, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import POKER_LOGO from '../../assets/images/pokerlogo.svg';
import { InvitePlayersButton } from './components/InviteDialog';
import { isPlanningStarted } from "./helper"
import './style.scss';

export const Header = () => {
  console.log("isPlanningStarted>>>>>>>", isPlanningStarted())  
  const location = useLocation();
//   const isPlanningStarted = location.pathname.includes("roomKey=")
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
      {isPlanningStarted() && <InvitePlayersButton />}
    </Box>
  );
};
