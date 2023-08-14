import { useState } from 'react';
//mui components
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
//mui icons
import IconButton from '@mui/material/IconButton';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import './style.scss';

export const InvitePlayersButton = () => {
  const [openDialog, setDialogOpen] = useState(false);
  const handleClick = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  const appURL = window.location.href;
  return (
    <Box className="invitePlayerWrapper">
      <Button
        variant="contained"
        onClick={handleClick}
        className="inviteButton"
      >
        <Box className="inviteButtonContent">
          <GroupAddIcon /> Invite Player
        </Box>
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        className="invitePlayerDialog"
      >
        <DialogTitle id="invitePlayerTitle">
          <Box className="dialogTitle">
            <span>Invite Your Team</span>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box className="invitePlayersContent">
            <TextField
              autoFocus
              variant="standard"
              margin="dense"
              fullWidth
              value={appURL}
            />
            <Button variant="contained">Copy Invitation Link</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
