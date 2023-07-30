import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";


export const Header = () => {
    const navigate = useNavigate();
    const onLogoClick = () => {
        navigate("/")
    }
    return (
        <Box>
            <span onClick={onLogoClick}>Logo</span>
        </Box>
    )
}