import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import POKER_LOGO from "../../assets/images/pokerlogo.svg";


export const Header = () => {
    return (
        <Box width={250} height={95} className="logoContainer"  >
            <NavLink to="/">
                <img width="100%" height="100%" alt= "pokerplanning" src={POKER_LOGO} />
            </NavLink>
        </Box>
    )
}