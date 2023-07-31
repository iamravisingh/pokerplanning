import Box from '@mui/material/Box';
import POKER_LOGO from "../../../assets/images/pokerlogo.svg";
import { useNavigate } from "react-router-dom";


export const Header = () => {
    const navigate = useNavigate();
    const onLogoClick = () => {
        navigate("/")
    }
    return (
        <Box width={250} height={95} className="logoContainer">
            <img width="100%" height="100%" onClick={onLogoClick} alt= "pokerplanning" src={POKER_LOGO} />
        </Box>
    )
}